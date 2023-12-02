const mongoose = require('mongoose');

//Listing 14.24

//const mongoose = require('mongoose');
// define a schema that maps to the structure of the data in MongoDB



const genreSchema = new mongoose.Schema({
    name: String,
}); 

const songSchema = new mongoose.Schema({
    title: String,
    artist: String,
    duration: Number,
    genre: String,
});




//my note - could not find export file or why it was necessary
// now create model using this schema that maps to books collection in database
//module.exports = mongoose.model('Book', bookSchema,'books');
// get our data model
//const Book = require('./models/Book.js');
//my addition to just use model

const Song = mongoose.model('Song', songSchema);
const Genre = mongoose.model('Genre', genreSchema);
//need a book to find

loadDbDocs()
async function loadDbDocs(){
    await mongoose.connect('mongodb://127.0.0.1:27017/listener');


    // console.log(Genre.find());
}

async function getGenres(){
    const testGenres = await Genre.find();
    console.log(testGenres);
    return testGenres;
}

async function getSongs(){
    const testSongs = await Song.find();
    console.log(testSongs);
    return testSongs;
}
module.exports= {loadDbDocs, getGenres, getSongs};
