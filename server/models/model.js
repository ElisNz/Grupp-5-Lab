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
    title: {
      type: String,
      default: 'okänd'
    },
    category: {
      type: mongoose.Schema.Types.ObjectId, 
      ref: 'Category'
    },
    description: {
      type: String,
      default: 'no description'
    },
    coordinates: {
        latitude: {
          type: Number,
          default: '0.0'
        },
        longitude: {
          type: Number,
          default: '0.0'
        },
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
