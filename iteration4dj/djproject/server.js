//Exact replica of iteration 3 but implemented with node and ejs.
//to do: make updates and improve functionality, ie add and remove actually doing something...
//set ups
var express = require('express');
var app = express();
//db setups
const mongoose = require('mongoose');
const Song = require('./models/song');
const Timeslots = require('./models/timeslots');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));


//db connect
mongoose.connect('mongodb://localhost:27017/dj', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;

console.log("hi");

/* used to put song data onto the db now. retrieval comes solely from db however.
var his = [
    {
        id:0,
        name: 'Uptown Funk',
        artist: 'Mark Ronson ft Bruno Mars',
        inplaylist: true
    },
    {
        id:1,
        name: 'Shape of You',
        artist: 'Ed Sheeran',
        inplaylist: false
    },
    {
        id:2,
        name: 'Old Town Road',
        artist: 'Lil Nas X',
        inplaylist: true
    },
    {
        id:3,
        name: 'Blinding Lights',
        artist: 'The Weeknd',
        inplaylist: true
    },
    {
        id:4,
        name: 'Bad Guy',
        artist: 'Billie Eilish',
        inplaylist: true
    },
    {
        id:5,
        name: 'Levitating',
        artist: 'Dua Lipa',
        inplaylist: true
    },
    {
        id:6,
        name: 'Montero (Call me by your name)',
        artist: 'Lil Nas X',
        inplaylist: true
    },
    {
        id:7,
        name: 'Good 4 U',
        artist: 'Olivia Rodrigo',
        inplaylist: true
    },
    {
        id:8,
        name: 'Stay',
        artist: 'The Kid LAROI & Justin Bieber',
        inplaylist: true
    },
    {
        id:9,
        name: 'Princess Diana',
        artist: 'Ice Spice',
        inplaylist: false
    },
    {
        id:10,
        name: 'Let it go',
        artist: 'Elsa',
        inplaylist: true
    },
    {
        id:11,
        name: 'Random Album Title',
        artist: 'Deadmau5',
        inplaylist: true
    }
];
 called once to migrate hard coded array data over.
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', async () => {
    console.log("connected");
    try {
        // Insert data into MongoDB collection
        const result = await Song.insertMany(his);
        console.log(`${result.length} items inserted successfully.`);
    } catch (error) {
        console.error('Error inserting items:', error);
    } finally {
        // Close the database connection
        db.close();
    }
});
*/
//use css.
app.use(express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', async () => {
    //index page
    timeslots = await Timeslots.find();
    console.log(timeslots);
    app.get('/', function(req, res) {
        res.render('pages/index', {
            timeslots
        });
    });

    playlist = await Song.find({inplaylist:true});
    history = await Song.find({inplaylist:false});
    app.get('/playlists', function(req, res) {
        var time =  req.query.time;
        res.render('pages/playlists', {
            time, songs: playlist, history
        });
    });

    app.post('/addSong', async (req, res) => {
        var time = req.body.time;
        console.log('hi');
        console.log(time);
        const selectedOptions = Array.isArray(req.body.selectedOptions)
        ? req.body.selectedOptions
        : [req.body.selectedOptions];
        console.log(selectedOptions);
        selectedOptions.forEach(function (value) {
            const splitVal = value.split('-');

            const songName = splitVal[0].trim();
            const songArtist = splitVal[1].trim();

            const condition = {
                name: songName,
                artist: songArtist
            }
            const update = {$set: {inplaylist: true}};

            Song.findOneAndUpdate(condition, update, { new: true })
            .then(updatedDocument => {
              if (updatedDocument) {
                console.log('Updated document:', updatedDocument);
              } else {
                console.log('Document not found or not updated.');
              }
            })
            .catch(error => {
              console.error('Error updating document:', error);
            });
        });
        playlist = await Song.find({inplaylist:true});
        history = await Song.find({inplaylist:false});
        //console.log(history);
        res.render('pages/playlists', {
            time, songs: playlist, history
        });
    });

    app.post('/removeSong', async (req, res) => {
        var time = req.body.time;
        const selectedOptions = Array.isArray(req.body.selectedOptions)
        ? req.body.selectedOptions
        : [req.body.selectedOptions];
        console.log(selectedOptions);
        selectedOptions.forEach(function (value) {
            const splitVal = value.split('-');

            const songName = splitVal[0].trim();
            const songArtist = splitVal[1].trim();
            console.log(songName);
            console.log(songArtist);

            const condition = {
                name: songName,
                artist: songArtist
            }
            const update = {$set: {inplaylist: false}};

            Song.findOneAndUpdate(condition, update, { new: true })
            .then(updatedDocument => {
              if (updatedDocument) {
                console.log('Updated document:', updatedDocument);
              } else {
                console.log('Document not found or not updated.');
              }
            })
            .catch(error => {
              console.error('Error updating document:', error);
            });
        });
        playlist = await Song.find({inplaylist:true});
        history = await Song.find({inplaylist:false});
        console.log(time);
        //console.log(history);
        res.render('pages/playlists', {
            time, songs: playlist, history
        });
    });
});

app.listen(8080);
console.log('server is listening on port 8080');