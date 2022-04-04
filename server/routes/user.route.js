const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const User = require('../db/models/user.model');
const ResponseError = require('../errors/responseError');
const DbService = require('../services/db.service');
const AuthenticationService = require('../services/authentication.service');
const Lender = require('../db/models/lender.model');

const { HTTP_STATUS_CODES, COLLECTIONS, DEFAULT_ERROR_MESSAGE, LENDER_STATUSES } = require('../global');
const { authenticate } = require('../middlewares/authenticate');
const { signupValidation, loginValidation, userUpdateValidation } = require('../validation/hapi');

router.post("/signup", async (req, res, next) => {
    const { error } = signupValidation(req.body);
    if (error) return next(new ResponseError(error.details[0].message, HTTP_STATUS_CODES.BAD_REQUEST));

    try {
        const existingUser = await DbService.getOne(COLLECTIONS.USERS, { email: req.body.email });
        if (existingUser) return next(new ResponseError("User with this email already exists", HTTP_STATUS_CODES.BAD_REQUEST));

        const user = new User(req.body);
        user.password = AuthenticationService.hashPassword(req.body.password);
        await DbService.create(COLLECTIONS.USERS, user);

        setTimeout(() => {
            const token = AuthenticationService.generateToken({ _id: mongoose.Types.ObjectId(user._id) });
            return res.status(HTTP_STATUS_CODES.OK).send({
                token,
            });
        }, 1000);
    } catch (err) {
        return next(new ResponseError(err.message || DEFAULT_ERROR_MESSAGE, err.status || HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR));
    }
});

router.post("/login", async (req, res, next) => {
    const { error } = loginValidation(req.body);
    if (error) return next(new ResponseError(error.details[0].message, HTTP_STATUS_CODES.BAD_REQUEST));

    try {
        const user = await DbService.getOne(COLLECTIONS.USERS, { email: req.body.email });
        if (!user) return next(new ResponseError("User with this email has not been found", HTTP_STATUS_CODES.NOT_FOUND));

        const isPasswordValid = AuthenticationService.verifyPassword(req.body.password, user.password);
        if (!isPasswordValid) return next(new ResponseError("Invalid password", HTTP_STATUS_CODES.BAD_REQUEST));

        setTimeout(() => {
            const token = AuthenticationService.generateToken({ _id: mongoose.Types.ObjectId(user._id) });
            return res.status(HTTP_STATUS_CODES.OK).send({
                token,
            });
        }, 1000);
    } catch (err) {
        return next(new ResponseError(err.message || DEFAULT_ERROR_MESSAGE, err.status || HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR));
    }
});

router.put('/', authenticate, async (req, res, next) => {
    const { error } = userUpdateValidation(req.body);
    if (error) return next(new ResponseError(error.details[0].message, HTTP_STATUS_CODES.BAD_REQUEST));

    try {
        const availableUser = await DbService.getOne(COLLECTIONS.USERS, {
            "$or": [
                { email: req.body.email },
                { phone: req.body.phone }
            ]
        });

        if (availableUser && availableUser._id.toString() != req.user._id.toString()) 
            return next(new ResponseError("User with this email or phone number already exists. Unable to update your profile", HTTP_STATUS_CODES.BAD_REQUEST));
    
        await DbService.update(COLLECTIONS.USERS, { _id: mongoose.Types.ObjectId(req.user._id) }, req.body);
        
        return res.sendStatus(HTTP_STATUS_CODES.OK);
    } catch (err) {
        return next(new ResponseError(err.message || "Internal server error", err.status || HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR));
    }
});

router.post('/validate-token', async (req, res, next) => {
    const token = req.header("x-auth-token");
    if (!token) {
        return res.status(HTTP_STATUS_CODES.OK).send({
            valid: false,
            user: null
        })
    }
    try {
        let valid = true;
        let user = null;
        const verified = AuthenticationService.verifyToken(token);
        if (!verified) valid = false;
        else {
            user = await DbService.getById(COLLECTIONS.USERS, verified._id);
            if (!user) valid = false;
            else {
                if (verified.iat <= new Date(user.lastPasswordReset).getTime() / 1000) valid = false;
            }
        }

        return res.status(HTTP_STATUS_CODES.OK).send({
            valid: valid,
            user: user
        })
    }
    catch (error) {
        return next(new ResponseError(error.message, error.status || HTTP_STATUS_CODES.UNAUTHORIZED), req, res, next);
    }
});

module.exports = router;