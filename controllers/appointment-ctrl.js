const Appointment = require('../models/appointment-model');

createAppointment = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide an appointment',
        })
    }

    const appointment = new Appointment(body)

    if (!appointment) {
        return res.status(400).json({ success: false, error: err })
    }

    appointment
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: appointment._id,
                message: 'Appointment created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Appointment not created!',
            })
        })
}

getAppointmentByID = async (req, res) => {
    await Appointment.findOne({ _id: req.params.id }, (err, appointment) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!appointment) {
            return res
                .status(404)
                .json({ success: false, error: `Appointment not found` })
        }
        return res.status(200).json({ success: true, data: appointment })
    }).catch(err => console.log(err))
}

getAppointments = async (req, res) => {
    await Appointment.find({}, (err, appointments) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!appointments.length) {
            return res
                .status(404)
                .json({ success: false, error: `Appointment not found` })
        }
        return res.status(200).json({ success: true, data: appointments })
    }).catch(err => console.log(err))
}

updateAppointment = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    Appointment.findOne({ _id: req.params.id }, (err, appointment) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Appointment not found!',
            })
        }
        appointment.customer = body.customer,
        appointment.barber = body.barber,
        appointment.service = body.service,
        appointment.startTime = body.startTime
        appointment
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: appointment._id,
                    message: 'Appointment updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Appointment not updated!',
                })
            })
    })
}

deleteAppointment = async (req, res) => {
    await Appointment.findOneAndDelete({ _id: req.params.id }, (err, appointment) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!appointment) {
            return res
                .status(404)
                .json({ success: false, error: `Appointment not found` })
        }

        return res.status(200).json({ success: true, data: appointment })
    }).catch(err => console.log(err))
}

module.exports = {
    createAppointment,
    updateAppointment,
    getAppointments,
    getAppointmentByID,
    deleteAppointment
}
