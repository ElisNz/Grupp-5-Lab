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

const Location = mongoose.model('Location', locationSchema);

module.exports = Location;
