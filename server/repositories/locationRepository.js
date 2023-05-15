const cityModel = require("../models/cityModel");
const db_context = require("../db_context");

async function getAllCities() {

    let cities = [];

    let data = await db_context.selectAllCities()

    data.forEach(city => {
        cities.push(new cityModel(city.city))
    });

    return cities;
};

async function addCity(city, country_id) {

    let result = await db_context.insertCity(city, country_id)

    return result;
};

async function removeCity(city, country_id) {

    let result = await db_context.deleteCity(city, country_id)

    return result;
};

module.exports = {
    getAllCities,
    addCity,
    removeCity
}