const mongoose = require('mongoose');
const { VEHICLE_STATUSES, CAR_MAKERS, VEHICLE_TYPES} = require('../../global');

const vehicleSchema = mongoose.Schema({
    title: {
        type: String,
        minLength: 1,
        maxLength: 100  ,
        required: true 
    },
    description: {
        type: String,
        minLength: 1,
        maxLength: 500,
        required: true
    },
    model: {
        type: String,
        minLength: 1,
        maxLength: 70, // the actual characters length of the longest car name + a bit more chars - Land Rover Range Rover Evoque 2.0 TD4 E-Capability 4x4 HSE Dynam
        required: true
    },
    maker: {
        type: String,
        enum: function(){
            switch(this.type) {
                case VEHICLE_TYPES.CAR:
                    return CAR_MAKERS;
                case VEHICLE_TYPES.SCOOTER:
                    return SCOOTER_MAKERS;
                case VEHICLE_TYPES.BIKE:
                    return BIKE_MAKERS;
            }
        },
        required: true
    },
    status: {
        type: String,
        enum: Object.values(VEHICLE_STATUSES),
        default: VEHICLE_STATUSES.ACTIVE
    },
    type: {
        type: String,
        enum: Object.values(VEHICLE_TYPES),
        required: true
    },
    seats: {
        type: Number,
        required: function(){
            return this.type && VEHICLE_TYPES.CAR
        },  
        minLength: 1,
        maxLength: 8,
    }
})
const Vehicle = mongoose.model(DATABASE_MODELS.VEHICLE, vehicleSchema);
module.exports = Vehicle;