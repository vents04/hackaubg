const express = require("express");
const router = express.Router();

const userRoute = require('./user.route');
const lenderRoute = require('./lender.route');
const rideRoute = require('./ride.route');
const vehicleRoute = require('./vehicle.route');
const smartcarRoute = require('./smartcar.route');

router.use('/user', userRoute);
router.use('/lender', lenderRoute);
router.use('/ride', rideRoute);
router.use('/vehicle', vehicleRoute);
router.use('/smartcar', smartcarRoute)

module.exports = router;