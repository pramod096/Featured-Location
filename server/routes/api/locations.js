const express = require("express");
const mongodb = require("mongodb");

require("dotenv").config();
const multer = require("multer");
// const upload = multer({ dest: __dirname + '/uploads'})
const storage = multer.memoryStorage();
const multerUploads = multer({ storage: storage }).single("photo");
const { uploader } = require("cloudinary");
const cloudinary = require("cloudinary");
require("dotenv").config();
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const router = express.Router();

//Get Locations
router.get("/", async (req, res) => {
  const locations = await getLocationsCollection();
  res.send(await locations.find({}).toArray());
});

router.post("/", multerUploads, async (req, res) => {
  if (req.file) {
    const locations = await getLocationsCollection();
    const file = "data:image/png;base64," + req.file.buffer.toString("base64");
    return uploader
      .upload(file)
      .then(async (result) => {
        const image = result.url;
        const locations = await getLocationsCollection();
        await locations.insertOne({
          locationName: req.body.locationName,
          address: req.body.address,
          hours: req.body.hours,
          phoneNumber: req.body.phoneNumber,
          photo: image,
        });
        return res.status(200).json({
          messge: "Your image has been uploded successfully to cloudinary",
          data: {
            image,
          },
        });
      })
      .catch((err) =>
        res.status(400).json({
          messge: "someting went wrong while processing your request",
          data: {
            err,
          },
        })
      );
  }
});

router.delete("/", async (req, res) => {
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
      useNewUrlParser: true,
    }
  );

  return client.db("FeaturedLocation").collection("locations");
}
module.exports = router;
