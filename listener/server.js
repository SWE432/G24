var express = require('express');
const mongoose = require('mongoose');
const db = require('./db');
const bodyParser = require('body-parser');
const cors = require('cors');
var app = express();

mongoose.connect('mongodb://127.0.0.1:27017/listener');

app.use('/public', express.static('public'));


// set the view engine to ejs
app.set('view engine', 'ejs');
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// use res.render to load up an ejs view file

// index page
app.get('/', async (req, res) => {
  playlist = await db.getSongs();
  res.render('pages/index', {
    playlist
  });
});

// about page
app.get('/listener-preferences', async (req, res) => {
    categories = await db.getGenres();
    // doNothing = await db.getSongs();
    console.log(categories);
    res.render('pages/listener-preferences', { categories });
});

app.listen(3000);
console.log('Server is listening on port 3000');