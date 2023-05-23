class Document {
  constructor(title, category, description, coordinates) {
    this.title = title;
    this.category = category;
    this.description = description;
    this.coordinates = coordinates;
  }
}

const mongoose = require('mongoose');
const db = {};

const locationSchema = new mongoose.Schema({
  title: String,
  category: String,
  description: String,
  coordinates: {
    latitude: Number,
    longitude: Number
  }
});

const Locations = mongoose.model('Locations', locationSchema);

db.mongoose = mongoose;
db.model = { Locations };

module.exports = {
  db,
  Document
}
