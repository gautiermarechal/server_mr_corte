const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Customer = new Schema(
    {
        firstName: { type: String },
        lastName: { type: String },
        email: { type: String },
        password: { type: String },
        appointments: { type: Array }
    },
    { timestamps: true },
);

module.exports = mongoose.model('customers', Customer)