const mongoose = require('mongoose');
const { VEHICLE_STATUSES, CAR_MAKERS, VEHICLE_TYPES, UNLOCK_TYPES, CURRENCY_TYPES, SCOOTER_MAKERS, BIKE_MAKERS, COLLECTIONS, DATABASE_MODELS} = require('../../global');

const vehicleSchema = mongoose.Schema({
    lenderId: {
        type: mongoose.Types.ObjectId,
        ref: DATABASE_MODELS.USER,
        required: true
    },
    title: {
        type: String,
        minLength: 1,
        maxLength: 100,
        required: true 
    },
    description: {
        type: String,
        minLength: 1,
        maxLength: 500,
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
            return this.type == VEHICLE_TYPES.CAR
        },  
        min: 2,
        max: 8
    },
    smartCarKey: {
        type: String,
        required: function() {
            return this.unlockTypes.includes(UNLOCK_TYPES.AUTOMATIC)
        }
    },
    pickupLocations: [{
        address: {
            type: String,
            minLength: 1,
            required: true
        },
        lat: {
            type: Number,
            min: -90,
            max: 90,
            required: true
        },
        lon: {
            type: Number,
            min: -180,
            max: 180,
            required: true
        } 
    }],
    returnLocations: [{
        address: {
            type: String,
            minLength: 1,
            required: true
        },
        lat: {
            type: Number,
            min: -90,
            max: 90,
            required: true
        },
        lon: {
            type: Number,
            min: -180,
            max: 180,
            required: true
        } 
    }],
    unlockTypes: {
        type: [{
            type: String,
            enum: Object.values(UNLOCK_TYPES),
        }],
        validate: [unlockTypesSizeLimit, "Unlock types array must of 1 or 2 values"]
    },
    price: {
        currency:{
            type: String,
            enum: Object.values(CURRENCY_TYPES),
            required: true
        },
        amount: {
            type: Number,
            min: 1,
            required: true
        }
    },
    photos: [{
        photo: {
            type: String,
            required: true
        },
        visible: {
            type: Boolean,
            default: true
        },
        createdAt: {
            type: Number,
            default: Date.now
        }
    }]
})

function unlockTypesSizeLimit(value) {
    return value.length == 1 || value.length == 2;
}

const Vehicle = mongoose.model(DATABASE_MODELS.VEHICLE, vehicleSchema);
module.exports = Vehicle;