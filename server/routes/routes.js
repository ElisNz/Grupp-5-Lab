const express = require('express')
const router = express.Router()
/* const { Document } = require('../models/model'); */
const { addMany, addOne, getAll, getOne, updateOne, removeOne } = require('../controllers/locationController');

// Test route
router.get('/', (req, res) => {
    res.send('Welcome!')
})
// Get all
router.get('/all', getAll)
// Get one
/* router.get('/search/:query', getOne) */
// Add locations
router.post('/add', addOne)
router.post('/add-mock', addMany)
// Update a location(PUT)
router.put('/update/:id', updateOne)

router.delete('/remove', removeOne)

module.exports = router
