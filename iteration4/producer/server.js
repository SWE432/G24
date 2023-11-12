var express = require('express');
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

app.use(express.static('public'));

// use res.render to load up an ejs view file

// index page
app.get('/', function(req, res) {
  let playlists = [
    { name: 'Playlist 1', genre: 'Pop'},
    { name: 'Playlist 2', genre: 'Rock'},
    { name: 'Playlist 3', genre: 'RnB'},
    { name: 'Playlist 4', genre: 'Rap'},
    { name: 'Playlist 5', genre: 'Jazz'},
  ];

  let events = [
    { name: 'Spooky SZN', description: 'Songs that will make you scream!' },
    { name: 'Merry Jingles', description: 'All your favorite Christmas carols!' },
    { name: 'Freaky Friday', description: 'ANY and ALL guest requests played in a queue' },
    { name: 'Silent Sunday', description: 'Ambient, calming sounds all sunday long' },
    { name: 'Fall Funk-Fest', description: 'Playing tunes that will warm you up in this cold weather' },
  ];

  let djs = [
    { name: "DJ TuringUp",  },
    { name: "DJ Jazzman",  },
    { name: "DJ Tarzzzan",  },
    { name: "Placeholder 6",  },
    { name: "Placeholder 7",  },
    { name: "Placeholder 8",  },
  ];

  let timeslots = [
    { time: "12:00 PM - 01:00 PM", },
    { time: "01:00 PM - 02:00 PM", },
    { time: "02:00 PM - 03:00 PM", },
    { time: "03:00 PM - 04:00 PM", },
    { time: "04:00 PM - 05:00 PM", },
    { time: "05:00 PM - 06:00 PM", },
    { time: "06:00 PM - 07:00 PM", },
    { time: "07:00 PM - 08:00 PM", },
    { time: "08:00 PM - 09:00 PM", },
    { time: "09:00 PM - 10:00 PM", },
  ];


  res.render('pages/index', {
    playlists: playlists,
    events: events,
    djs: djs,
    timeslots: timeslots,
  });
});


app.listen(8080);
console.log('Server is listening on port 8080');