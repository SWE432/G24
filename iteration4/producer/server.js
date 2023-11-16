const express = require('express');
const { main, insertSelections } = require('./db');
const bodyParser = require('body-parser');
const cors = require('cors')
const app = express();


// set the view engine to ejs
app.set('view engine', 'ejs');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));


let playlists;
let events;
let djs;
let timeslots;


// index page
app.get('/', async function(req, res) {  
  console.log('serving producer page');

  const data = await main()

  playlists = data.playlists;
  events = data.events;
  djs = data.djs;
  timeslots = data.timeslots;

  res.render('pages/index', {
    playlists: playlists,
    events: events,
    djs: djs,
    timeslots: timeslots,
  });

});

app.post('/submitSelections', async function (req, res) {
  console.log('recieved selection');
  const selections = req.body;
  // console.log(selections);

  try {
    await insertSelections(selections);
    res.status(200).send('Selections submitted successfully.');
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }

});


app.listen(8080);
console.log('Server is listening on port 8080');
