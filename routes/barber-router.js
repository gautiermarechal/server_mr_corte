const express = require('express')

const BarberCtrl = require('../controllers/barber-ctrl')

const router = express.Router()

router.post('/barber', BarberCtrl.createBarber)
router.get('/barber/:id', BarberCtrl.getBarberByID)
router.get('/barbers/', BarberCtrl.getBarbers)

module.exports = router