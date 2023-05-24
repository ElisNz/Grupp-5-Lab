const uri = 'mongodb+srv://enz:MV6qCi73W7sQ7sTG@cluster0.ohmduf8.mongodb.net/master?retryWrites=true&w=majority';
const { db } = require('./models/model');
const { Location, Category } = db.model;

async function insertManyLocations(locations) {
    Location.insertMany(locations, (err, docs) => {
      if(err) {
        console.log(docs);
        throw err;
      }
    });
    return await Location.find().populate('category');
  }

const Functions = {
  async searchLocation(query) {

    },
  async getAllLocationsfunction() {
    return await Location.find();
    },
  async insertOneLocation(location) {

    },
  async insertManyLocations(locations) {
    console.log('context called');
      switch(locations) {
        case (typeof locations !== Array):
          throw 'parameter must be of type array';
          break;
        default:
          break;
      };
      for(let i of locations) {
        console.log(i);
        let documentToAdd = new Location(i);
      }
      return '200';
    },
  async deleteLocation() {

    }
};

module.exports = {
  uri,
  db,
  Functions,
  insertManyLocations
}
