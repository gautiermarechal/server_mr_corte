const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const db = require('./db')
const customerRouter = require('./routes/customer-router')
const barberRouter = require('./routes/barber-router')
const appointmentRouter = require('./routes/appointment-router')


const app = express()
const apiPort = 3000

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use('/api', customerRouter)
app.use('/api', barberRouter)
app.use('/api', appointmentRouter)

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))