const express = require('express')
const router = require('./routes')

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/', router)

const port = process.env.PORT || 8080
app.listen(port)
