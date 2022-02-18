const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();

app.use(bodyParser.json());
app.use(cors());

const locations = require("./routes/api/locations");
const users = require("./routes/api/users");

app.use("/api/locations", locations);
app.use("/api/users", users);

//For production
if (process.env.NODE_ENV === "production") {
  //Static folder
  app.use(express.static(__dirname + "/public/"));

  //For SPA
  app.get(/.*/, (req, res) => res.sendFile(__dirname + "/public/index.html"));
}

const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Started on Port ${port}`));
