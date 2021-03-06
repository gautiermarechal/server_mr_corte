const express = require('express')

const CustomerCtrl = require('../controllers/customer-ctrl')

const router = express.Router()

router.post('/customer', CustomerCtrl.createCustomer)
router.put('/customer/:id', CustomerCtrl.updateCustomer)
router.delete('/customer/:id', CustomerCtrl.deleteCustomer)
router.get('/customer/:id', CustomerCtrl.getCustomerByID)
router.get('/customerbyemail/:email', CustomerCtrl.getCustomerByEmail)
router.get('/customers', CustomerCtrl.getCustomers)

module.exports = router