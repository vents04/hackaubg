const express = require("express");
const Ride = require("../db/models/ride.model");
const { COLLECTIONS, HTTP_STATUS_CODES, RIDE_STATUSES, THIRTY_MINUTES_IN_MILLISECONDS } = require("../global");
const { authenticate } = require("../middlewares/authenticate");
const DbService = require("../services/db.service");
const { postRideValidation, updateRideStatusValidation } = require("../validation/hapi");
const router = express.Router();

router.post('/', authenticate, async(req, res, next) => {
    const { error } = postRideValidation(req.body);
    if(error) return next(new ResponseError(error.details[0].message, HTTP_STATUS_CODES.BAD_REQUEST));

    try {
        const vehicle = await DbService.getById(COLLECTIONS.VEHICLES, req.body.vehicleId);
        if(!vehicle) return next(new ResponseError("Vehicle not found", HTTP_STATUS_CODES.NOT_FOUND));
        if(vehicle.lenderId.toString() == req.user._id.toString()) return next(new ResponseError("Cannot rent your own vehicles", HTTP_STATUS_CODES.CONFLICT));
        

        const ride = new Ride(req.body);
        if(ride.plannedPickupDt > ride.plannedReturnDt) return next(new ResponseError("Pickup date cannot be after return date ", HTTP_STATUS_CODES.CONFLICT));
        const rides = await DbService.getMany(COLLECTIONS.RIDES, {vehicleId: mongoose.Types.ObjectId(req.body.vehicleId), "$and": [
            {status: {"$ne": RIDE_STATUSES.CANCELLED}},
            {status: {"$ne": RIDE_STATUSES.FINISHED}},
        ]});

        for(let current of rides){
            if(!(ride.plannedPickupDt - THIRTY_MINUTES_IN_MILLISECONDS > current.plannedReturnDt) 
            && !(ride.plannedReturnDt + THIRTY_MINUTES_IN_MILLISECONDS < current.plannedPickupDt)){
                return next(new ResponseError("Dates cannot overlap", HTTP_STATUS_CODES.CONFLICT));
            }
        }

        ride.userId = req.user._id.toString();
        ride.status = RIDE_STATUSES.ONGOING
        await DbService.create(COLLECTIONS.RIDES, ride);        

        return res.sendStatus(HTTP_STATUS_CODES.OK);
    } catch(e) {
        return next(new ResponseError(e.message || DEFAULT_ERROR_MESSAGE, e.status || HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR));
    }
});

router.put('/initialupdate', authenticate, async(req, res, next) => {
    const { error } = updateRideStatusValidation(req.body);
    if(error) return next(new ResponseError(error.details[0].message, HTTP_STATUS_CODES.BAD_REQUEST));

    try {
        const ride = await DbService.getById(COLLECTIONS.RIDES, req.body.rideId);
        if(!ride) return next(new ResponseError("Ride not found", HTTP_STATUS_CODES.NOT_FOUND));
        
        if(req.user._id.toString() != ride.userId.toString()) return next(new ResponseError("You do not have permission to change the ride status", HTTP_STATUS_CODES.FORBIDDEN));

        DbService.update(COLLECTIONS.RIDES, req.body);
        
        return res.sendStatus(HTTP_STATUS_CODES.OK);
    } catch(e) {
        return next(new ResponseError(e.message || DEFAULT_ERROR_MESSAGE, e.status || HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR));
    }
});

module.exports = router;