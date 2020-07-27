const Barber = require('../models/barber-model');

createBarber = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a barber',
        })
    }

    const barber = new Barber(body)

    if (!barber) {
        return res.status(400).json({ success: false, error: err })
    }

    barber
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: barber._id,
                firstName: barber.firstName,
                message: 'Barber created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Barber not created!',
            })
        })
}

getBarberByID = async (req, res) => {
    await Barber.findOne({ _id: req.params.id }, (err, barber) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!barber) {
            return res
                .status(404)
                .json({ success: false, error: `Barber not found` })
        }
        return res.status(200).json({ success: true, data: barber })
    }).catch(err => console.log(err))
}

getBarbers = async (req, res) => {
    await Barber.find({}, (err, barbers) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!barbers.length) {
            return res
                .status(404)
                .json({ success: false, error: `Barber not found` })
        }
        return res.status(200).json({ success: true, data: barbers })
    }).catch(err => console.log(err))
}

module.exports = {
    createBarber,
    getBarberByID,
    getBarbers
}
