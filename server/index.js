const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const multer = require('multer')
const upload = multer({ dest: './public/images/uploads'})
const mongodb = require('mongodb');
require('dotenv').config();

const app = express();

app.use(bodyParser.json());
app.use(cors());

const locations = require('./routes/api/locations');
const users = require('./routes/api/users')
const images = require('./routes/api/images')

app.use('/api/locations', locations);
app.use('/api/users', users);
app.use('/api/images', images);

app.post('/upload', upload.single('photo'), async (req, res) => {
    const images = await getImagesCollection();
    await images.insertOne({
      userName: req.body.fname,
      image: req.file
    });
    res.status(201).send();

})

app.get('/upload', async (req, res) => {
    const images = await getImagesCollection();
    res.send(await images.find({}).toArray());
});

async function getImagesCollection() {

    const client = await mongodb.MongoClient.connect(
        process.env.ATLAS_CONNECTION_STRING,
        {
          useNewUrlParser: true
        }
      );
    
      return client.db('FeaturedLocation').collection('images');

}

//For production
if(process.env.NODE_ENV === 'production'){
    
    //Static folder
    app.use(express.static(__dirname + '/public/'));

    //For SPA
    app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'));
}

const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Started on Port ${port}`));