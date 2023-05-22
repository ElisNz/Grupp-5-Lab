const mongoose = require('mongoose');

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

module.exports = Locations;
