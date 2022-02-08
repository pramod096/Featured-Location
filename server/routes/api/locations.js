const express = require('express');
const mongodb = require('mongodb');

require('dotenv').config();
const multer = require('multer')
// const upload = multer({ dest: __dirname + '/uploads'})	
const storage = multer.memoryStorage();
const multerUploads = multer({ storage: storage }).single('photo');	
const { uploader } = require('cloudinary')	
const cloudinary = require('cloudinary')	
require('dotenv').config();	
cloudinary.config({	
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,	
  api_key: process.env.CLOUDINARY_API_KEY,	
  api_secret: process.env.CLOUDINARY_API_SECRET	
});

const router = express.Router();


//Get Locations
router.get('/', async (req, res) => {
    const locations =  await getLocationsCollection();
    res.send(await locations.find({}).toArray());
});

router.post('/', multerUploads, async (req, res) => {
  if(req.file) {
    const locations =  await getLocationsCollection();
    const file = 'data:image/png;base64,' + (req.file.buffer).toString('base64')
56	
  return uploader.upload(file).then(async (result) => {
57	
  const image = result.url;
58	
  const locations =  await getLocationsCollection();
    await locations.insertOne({
      locationName: req.body.locationName,
      address: req.body.address,	
          hours: req.body.hours,
          phoneNumber: req.body.phoneNumber,	
          photo: image
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
        'mongodb+srv://Pramod:16181@featuredlocation.b28gj.mongodb.net/FeaturedLocation?retryWrites=true&w=majority',
        {
          useNewUrlParser: true
        }
      );
    
      return client.db('FeaturedLocation').collection('locations');

}




module.exports = router;