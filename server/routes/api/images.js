const express = require('express');
const mongodb = require('mongodb');
require('dotenv').config();

const router = express.Router();


//Get Locations
router.get('/', async (req, res) => {
    const locations = await getLocationsCollection();
    res.send(await locations.find({}).toArray());
});

router.post('/', async (req, res) => {
    const locations = await getLocationsCollection();
    await locations.insertOne({
      userName: req.body.userName,
      email: req.body.email,
      password: req.body.password
    });
    res.status(201).send();
  });

  router.delete('/', async (req, res) => {
    const locations = await getLocationsCollection();
    await locations.deleteOne({
      _id: req.body._id,
    });
    res.status(201).send();
  });


async function getLocationsCollection() {

    const client = await mongodb.MongoClient.connect(
        process.env.ATLAS_CONNECTION_STRING,
        {
          useNewUrlParser: true
        }
      );
    
      return client.db('FeaturedLocation').collection('images');

}



module.exports = router;



