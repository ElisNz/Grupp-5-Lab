const mongoose = require('mongoose');
const db = {};

// DTO
class Document {
  constructor(title, category, description, coordinates) {
    this.title = title;
    this.category = category;
    this.description = description;
    this.coordinates = coordinates;
  }
};

// DB
const locationSchema = new mongoose.Schema({
    title: String,
    category: {
      type: mongoose.Schema.Types.ObjectId, 
      ref: 'Category'
    },
    description: String,
    coordinates: {
        latitude: Number,
        longitude: Number
    }
});

const categorySchema = new mongoose.Schema({
  name: String,
  description: String,
  places: [ {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Location'
  } ]
});

const Location = mongoose.model('Location', locationSchema);
const Category = mongoose.model('Category', categorySchema);

db.mongoose = mongoose;
db.model = { Location, Category };

module.exports = {
  db,
  Document
};
