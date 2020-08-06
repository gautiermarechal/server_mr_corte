const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Customer = require('../models/customer-model').schema
const Barber = require('../models/barber-model').schema

const Appointment = new Schema(
    {
        customer : { type: Customer },
        barber: { type: Barber },
        service: {type: String},
        startTime: { type: Array }
    },
    { timestamps: true },
);

module.exports = mongoose.model('appointments', Appointment)