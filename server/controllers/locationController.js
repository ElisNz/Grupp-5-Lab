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

    let data = await addCity(req.body.postedData, 90);

    return res.json({ message: "Saved" });
}

async function remove(req, res) {

    let data = await removeCity('TEST123', 90);

    return res.json({ message: "Deleted" });
}

module.exports = {
    get,
    add,
    remove
}