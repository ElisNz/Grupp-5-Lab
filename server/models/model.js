const mongoose = require('mongoose');
const db = {};

class Document {
  constructor(title, category, description, coordinates) {
    this.title = title;
    this.category = category;
    this.description = description;
    this.coordinates = coordinates;
  }
}

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

module.exports = {
  db,
  Document
}
