const mongoose = require('mongoose');
const { DATABASE_MODELS, USER_STATUSES } = require('../../global');

const userSchema = mongoose.Schema({
    email: {
        type: String,
        minLength: 3,
        maxLength: 320,
        required: true,
        unique: true
    },
    password: {
        type: String,
        minLength: 1,
        required: true,
    },
    firstName: {
        type: String,
        minLength: 1,
        maxLength: 200,
        required: true
    },
    lastName: {
        type: String,
        minLength: 1,
        maxLength: 200,
        required: true
    },
    phone: {
        type: String,
        minLength: 8,
        maxLength: 15,
        required: true,
    },
    profilePicture: {
        type: String,
        default: null
    },
    verifiedEmail: {
        type: Boolean,
        default: false
    },
    lastPasswordReset: {
        type: Number,
        default: Date.now
    },
    status: {
        type: String,
        enum: Object.values(USER_STATUSES),
        default: USER_STATUSES.ACTIVE
    },
    createdDt: {
        type: Number,
        default: Date.now
    }
});

const User = mongoose.model(DATABASE_MODELS.USER, userSchema);
module.exports = User;