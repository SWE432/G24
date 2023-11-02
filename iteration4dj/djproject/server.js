//Exact replica of iteration 3 but implemented with node and ejs.
//to do: make updates and improve functionality, ie add and remove actually doing something...
//set ups
var express = require('express');
var app = express();

//use css.
app.use(express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

//index page
app.get('/', function(req, res) {
    res.render('pages/index');
});

app.get('/playlists', function(req, res) {
    var time =  req.query.time;
    var currentlist = [
        {
            id:0,
            name: 'Let it go',
            artist: 'Elsa'
        },
        {
            id:1,
            name: 'Random Album Title',
            artist: 'Deadmau5'
        }
    ];
    
    var history = [
        {
            id:0,
            name: 'Uptown Funk',
            artist: 'Mark Ronson ft Bruno Mars'
        },
        {
            id:1,
            name: 'Shape of You',
            artist: 'Ed Sheeran'
        },
        {
            id:2,
            name: 'Old Town Road',
            artist: 'Lil Nas X'
        },
        {
            id:3,
            name: 'Blinding Lights',
            artist: 'The Weeknd'
        },
        {
            id:4,
            name: 'Bad Guy',
            artist: 'Billie Eilish'
        },
        {
            id:5,
            name: 'Levitating',
            artist: 'Dua Lipa'
        },
        {
            id:6,
            name: 'Montero (Call me by your name)',
            artist: 'Lil Nas X'
        },
        {
            id:7,
            name: 'Good 4 U',
            artist: 'Olivia Rodrigo'
        },
        {
            id:8,
            name: 'Stay',
            artist: 'The Kid LAROI & Justin Bieber'
        },
        {
            id:9,
            name: 'Princess Diana',
            artist: 'Ice Spice'
        },
    ];
    //console.log(time);
    res.render('pages/playlists', {
        currentlist, history, time
    });
});

app.listen(8080);
console.log('server is listening on port 8080');