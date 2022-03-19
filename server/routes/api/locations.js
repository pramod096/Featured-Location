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
          likeCount: 0,
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

router.put("/", multerUploads, async (req, res) => {
  const locations = await getLocationsCollection();
  let image = "";
  if (!(req.file == undefined)) {
    const file = "data:image/png;base64," + req.file.buffer.toString("base64");
    return uploader
      .upload(file)
      .then(async (result) => {
        image = result.url;
        await locations.updateOne(
          { _id: mongodb.ObjectId(req.body._id) },
          {
            $set: {
              locationName: req.body.locationName,
              address: req.body.address,
              hours: req.body.hours,
              phoneNumber: req.body.phoneNumber,
              photo: image,
            },
          }
        );
      })
      .catch((err) =>
        res.status(400).json({
          messge: "someting went wrong while processing your request",
          data: {
            err,
          },
        })
      );
  } else {
    image = req.body.photo;
    await locations
      .updateOne(
        { _id: mongodb.ObjectId(req.body._id) },
        {
          $set: {
            locationName: req.body.locationName,
            address: req.body.address,
            hours: req.body.hours,
            phoneNumber: req.body.phoneNumber,
            photo: image,
          },
        }
      )
      .then(() => {
        res.status(201).send();
      })
      .catch((err) => {
        console.log(err);
      });
  }
});

router.delete("/", async (req, res) => {
  const locations = await getLocationsCollection();
  console.log("JS --- ", req.body);
  await locations
    .deleteOne({
      _id: mongodb.ObjectId(req.body._id._id),
    })
    .then(() => {
      res.status().send();
    })
    .catch((err) => {
      console.log(err);
    });
});

router.patch("/", async (req, res) => {
  const locations = await getLocationsCollection();
  console.log("like --- ", req);
  await locations
    .updateOne(
      { _id: mongodb.ObjectId(req.body._id) },
      {
        $set: {
          likeCount: req.body.likeCount,
        },
      }
    )
    .then(() => {
      res.status(201).send();
    })
    .catch((err) => {
      console.log(err);
    });
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
