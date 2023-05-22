const express = require('express')
const router = express.Router()

//get all
router.get('/all', async (req, res) => {
  let data = await db.findAll()

  return res.json(data)
});

//post
router.post('/add', async (req, res) => {
  let title = req.body.title;
  let category = req.body.category;
  let description = req.body.description;
  let coordinates = req.body.coordinates;

  try {
    let newDocument = {
      title: title,
      category: category,
      description: description,
      coordinates: coordinates
    };

    console.log(await db.insert(newDocument));

    res.sendStatus(200)
  } catch (error) {
    console.error(error)
    res.sendStatus(500)
  }
});

//PUT
router.put('/edit', async (req, res) => {
  let _id = req.body._id;
  let title = req.body.title;
  let category = req.body.category;
  let description = req.body.description;
  let coordinates = req.body.coordinates;

  try {
    let updateObj = {
      title: title,
      category: category,
      description: description,
      coordinates: coordinates
    };

    console.log(await db.update(_id, updateObj))

    res.sendStatus(200)
  } catch (error) {
    console.error(error)
    res.sendStatus(500)
  }
});

router.delete('/remove', async (req, res) => {
  let _id = await req.body._id

  try {

    console.log(await db.deleteOne(_id))

    res.sendStatus(200)
  } catch (error) {


    console.error(error)

    res.sendStatus(500)
  }
});



module.exports = router;
