var express = require('express');
var app = express();

app.use('/public', express.static('public'));
// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// index page
app.get('/', (req, res) => {
  var playlist = [
    { name: 'Good Lookin', artist: "Dixon Dallas", birthYear: 2012},
    { name: 'Dine Alone Tonight', artist: "Me My and I", birthYear: 1996},
    { name: 'Last Bell', artist: "Expiration", birthYear: 2013}
  ];
  var tagline = "EJS is not fun";

  res.render('pages/index', {
    playlist: playlist,
    tagline: tagline
  });
});

// about page
app.get('/listener-preferences', (req, res) => {
    categories = [
        {name: 'Jazz'},
        {name: 'Lofi'},
        {name: 'Pop'},
        {name: 'Rock'},
    ]
    res.render('pages/listener-preferences', { categories });
});

app.listen(3000);
console.log('Server is listening on port 3000');