const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();


//Get Locations
router.get('/', async (req, res) => {
    const locations = await getLocationsCollection();
    res.send(await locations.find({}).toArray());
});

router.post('/', async (req, res) => {
    const locations = await getLocationsCollection();
    await locations.insertOne({
      name: req.body.name,
    });
    res.status(201).send();
  });


async function getLocationsCollection() {

    const client = await mongodb.MongoClient.connect(
        'mongodb+srv://Pramod:16181@featuredlocation.b28gj.mongodb.net/FeaturedLocation?retryWrites=true&w=majority',
        {
          useNewUrlParser: true
        }
      );
    
      return client.db('FeaturedLocation').collection('locations');

}




module.exports = router;