const locationFunctions = require('../repositories/locationRepository')

async function getAll(req, res) {
  let data = await locationFunctions.getAll()
  return res.json(data)
}
async function getOne(req, res) {
    let data = await locationFunctions.getOne(req.params.query)
    return res.json(data)
  }
async function addOne(req, res) {
    try {
        let addedObject = await locationFunctions.insertLocation(req.body)
      } catch (err) {
        res.status(err)
      } finally {
        res.status(200).send({ message: `Saved ${req.body}` })
      }
}
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
        res.status(200).send(updatedLocation)
    } catch (error) {
        console.error('Error updating location:', error)
        res.send(error)
    }
}
async function removeOne(req, res) {
  try {
    const { id } = req.body
    await locationFunctions.removeOne(id)
    res.status(200).send({ message: 'Successfully removed the location.' })
  } catch (err) {
    res.send({ message: err.message })
  }
}

module.exports = {
  addOne,
  addMany,
  getAll,
  getOne,
  removeOne,
  updateOne
}
