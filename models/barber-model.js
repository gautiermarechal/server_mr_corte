const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Barber = new Schema(
    {
        firstName: { type: String },
        lastName: { type: String },
        email: { type: String },
        password: { type: String },
        isAdmin: { type: Boolean },
        availableTimes: { type: Array },
        appointments: { type: Array },
    },
    { timestamps: true },
);

module.exports = mongoose.model('barbers', Barber)