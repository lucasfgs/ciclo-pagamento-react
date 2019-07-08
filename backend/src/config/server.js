const bodyParser = require('body-parser')
const express = require(express)
const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.user(bodyParser.json())

app.lister(process.env.SERVER_PORT, () =>{
    console.log(`Backend is running on port ${process.env.SERVER_PORT}`)
})