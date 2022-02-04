const express = require('express')
const router = require('./routes')
const cors = require('cors')
const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())

app.use('/', router)

const port = process.env.PORT || 8080
app.listen(port)
