//const { getAllCities, addCity, removeCity } = require("../repositories/cityRepository" );
const locationFunctions = require('../repositories/locationRepository');

async function get(req, res) {

    let data = await getAllCities();

    return res.json(data);
}

async function addOne(req, res) {

    let data = await addCity(req.body.postedData, 90);

    return res.json({ message: "Saved" });
}

async function addMany(req, res) {
    try {
        await locationFunctions.insertMockLocation();
    } catch (err) {
        res.status(err);
    } finally {
        res.status(200).send({ message: `Saved ${req.body}` });
    }
}

async function remove(req, res) {

    let data = await removeCity('TEST123', 90);

    return res.json({ message: "Deleted" });
}

module.exports = {
    addMany,
}