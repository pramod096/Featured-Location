const express = require("express");
const mongodb = require("mongodb");
require("dotenv").config();

const router = express.Router();

//Get Users

router.get("/", async (req, res) => {
  const users = await getUsersCollection();
  res.send(await users.find({}).toArray());
});

router.post("/", async (req, res) => {
  const users = await getUsersCollection();
  await users.insertOne({
    userName: req.body.userName,
    email: req.body.email,
    password: req.body.password,
  });
  res.status(201).send();
});

async function getUsersCollection() {
  const client = await mongodb.MongoClient.connect(
    process.env.ATLAS_CONNECTION_STRING,
    {
      useNewUrlParser: true,
    }
  );

  return client.db("FeaturedLocation").collection("users");
}

module.exports = router;
