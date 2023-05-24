//const { getAllCities, addCity, removeCity } = require("../repositories/cityRepository" );
const locationFunctions = require('../repositories/locationRepository');

async function getAll(req, res) {
    let data = await locationFunctions.getAll();
    return res.json(data);
}

async function addOne(req, res) {

}

async function addMany(req, res) {
    try {
        let addedObjects = await locationFunctions.insertMockLocation();
        console.log(addedObjects);
    } catch (err) {
        res.status(err);
    } finally {
        res.status(200).send({ message: `Saved ${req.body}` });
    }
}

async function removeOne(req, res) {

}

module.exports = {
    addMany,
    getAll
}