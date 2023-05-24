//const { getAllCities, addCity, removeCity } = require("../repositories/cityRepository" );
const locationFunctions = require('../repositories/locationRepository')

async function getAll(req, res) {
    let data = await locationFunctions.getAll()
    return res.json(data)
}

async function addOne(req, res) {}

async function addMany(req, res) {
    try {
        let addedObjects = await locationFunctions.insertMockLocation()
        console.log(addedObjects)
    } catch (err) {
        res.status(err)
    } finally {
        res.status(200).send({ message: `Saved ${req.body}` })
    }
}
// update
async function updateOne(req, res) {
    const { id } = req.params
    const updatedData = req.body

    try {
        const updatedLocation = await locationFunctions.updateMockLocation(
            id,
            updatedData
        )
        res.json(updatedLocation)
    } catch (error) {
        console.error('Error updating location:', error)
        res.status(500).json({ error: 'Internal server error' })
    }
}

async function removeOne(req, res) {}

module.exports = {
    addMany,
    getAll,
    updateOne
}
