const express = require('express');
const mongoose = require('mongoose');
const { HTTP_STATUS_CODES, COLLECTIONS, DEFAULT_ERROR_MESSAGE, LENDER_STATUSES } = require('../global');
const { postVehicleValidation, updateVehicleValidation } = require('../validation/hapi');
const Vehicle = require('../db/models/vehicle.model');
const router = express.Router();

const { authenticate } = require('../middlewares/authenticate');

const ResponseError = require('../errors/responseError');
const DbService = require('../services/db.service');
const AuthenticationService = require('../services/authentication.service');

router.post("/", authenticate, async (req, res, next) => {
    const { error } = postVehicleValidation(req.body);
    if (error) return next(new ResponseError(error.details[0].message, HTTP_STATUS_CODES.BAD_REQUEST));

    const lender = await DbService.getById(COLLECTIONS.LENDERS, { "$or": [{lenderId: mongoose.Types.ObjectId(req.body.lenderId.userId)}, {lenderId: mongoose.Types.ObjectId(req.body.lenderId.bussinessId)}]});
    if(!lender && lender.status != LENDER_STATUSES.ACTIVE){
        return next(new ResponseError("Lender wasn't found or his status wasn't active", HTTP_STATUS_CODES.NOT_FOUND));
    }
    try {
        const vehicle = new Vehicle(req.body);
        await DbService.create(COLLECTIONS.VEHICLES, vehicle);

        res.status(HTTP_STATUS_CODES.OK);

    } catch (err) {
        return next(new ResponseError(err.message || DEFAULT_ERROR_MESSAGE, err.status || HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR));
    }
});

router.put("/", authenticate, async (req, res, next) => {
    const { error } = updateVehicleValidation(req.body);
    if (error) return next(new ResponseError(error.details[0].message, HTTP_STATUS_CODES.BAD_REQUEST));

    try {
        const vehicle = DbService.getOne(COLLECTIONS.VEHICLES, { "$or": [{lenderId: mongoose.Types.ObjectId(req.body.lenderId.userId)}, {lenderId: mongoose.Types.ObjectId(req.body.lenderId.bussinessId)}]});
        if(!vehicle){
            return next(new ResponseError("The vehicle you try to update was not found", HTTP_STATUS_CODES.NOT_FOUND));
        }
        await DbService.update(COLLECTIONS.VEHICLES, { lenderId: mongoose.Types.ObjectId(req.user._id) }, req.body);
        
        res.sendStatus(HTTP_STATUS_CODES.OK);
    } catch (err) {
        return next(new ResponseError(err.message || "Internal server error", err.status || HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR));
    }

})

module.exports = router;