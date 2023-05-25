const uri = 'mongodb+srv://enz:MV6qCi73W7sQ7sTG@cluster0.ohmduf8.mongodb.net/master?retryWrites=true&w=majority'
const { db } = require('./models/model')
const { Location, Category } = db.model

async function getAllLocations() {
    return await Location.find().populate('category')
}
async function getOneLocation(query) {
  try {
    return await Location.find({ title: query }).populate('category')
  } catch(err) {
    throw err;
  }
}
async function insertManyLocations(locations) {
    Location.insertMany(locations, (err, docs) => {
        if (err) {
            console.log(docs)
            throw err
        }
    })
    return await Location.find().populate('category')
}
async function searchLocation(query) {
    return await Location.find({ title: query }, (err, docs) => {
        if (err) {
            console.log(docs)
            throw err
        }
    })
}
// Update one
async function updateLocation(id, updatedData) {
    return await Location.findByIdAndUpdate(id, updatedData, { new: true })
}
// Remove one
async function removeLocation(id) {
  try {
    return await Location.findByIdAndRemove(id)
  } catch(error) {
    throw error;
  }
}

module.exports = {
    uri,
    db,
    insertManyLocations,
    getAllLocations,
    getOneLocation,
    searchLocation,
    updateLocation,
    removeLocation
}
