const mongoose = require('mongoose')
mongoose.Promise = global.Promise
module.exports = mongoose.connect(process.env.DB_CONNECTION_STRING, { useNewUrlParser: true })