const bodyParser = require('body-parser')
const express = require('express')
const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.listen(process.env.SERVER_PORT, () =>{
    console.log(`Backend is running on port ${process.env.SERVER_PORT}`)
})

module.exports = app