const uri = 'mongodb+srv://enz:MV6qCi73W7sQ7sTG@cluster0.ohmduf8.mongodb.net/master?retryWrites=true&w=majority';
const { db } = require('./models/model');
const { Location, Category } = db.model;

async function getAllLocations() {
    return await Location.find();
  };

async function insertManyLocations(locations) {
    Location.insertMany(locations, (err, docs) => {
      if(err) {
        console.log(docs);
        throw err;
      }
    });
    return await Location.find().populate('category');
  };

async function searchLocation(query) {
    return await Location.find({title: query}, (err, docs) => {
      if(err) {
        console.log(docs);
        throw err;
      }
    });
  };

const Functions = {
  async searchLocation(query) {

    },
  async getAllLocationsfunction() {
    return await Location.find();
    },
  async insertOneLocation(location) {

    },
  async deleteLocation() {

    }
};

module.exports = {
  uri,
  db,
  Functions,
  insertManyLocations,
  getAllLocations,
  searchLocation
}
