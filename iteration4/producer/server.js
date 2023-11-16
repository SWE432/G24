var express = require('express');
var app = express();
const { main } = require('./db');

// set the view engine to ejs
app.set('view engine', 'ejs');

app.use(express.static('public'));

// use res.render to load up an ejs view file

let playlists;
let events;
let djs;
let timeslots;


// index page
app.get('/', async function(req, res) {  
  
  // if data is loaded already loaded in, use it to render the page
  if (playlists || events || djs || timeslots) {
    res.render('pages/index', {
      playlists: playlists,
      events: events,
      djs: djs,
      timeslots: timeslots,
    });
  } else {
    try {
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
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  }
});

app.listen(8080);
console.log('Server is listening on port 8080');
