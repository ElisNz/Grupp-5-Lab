const mongoose = require('mongoose')
const db = {}

const locationSchema = new mongoose.Schema({
    title: String,
    category: String,
    description: String,
    coordinates: {
        latitude: Number,
        longitude: Number
    }
})

const Location = mongoose.model('Location', locationSchema)

db.mongoose = mongoose
db.model = { Location }

module.exports = db
