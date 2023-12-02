//song schema
const mongoose = require('mongoose');

const songSchema = new mongoose.Schema({
    id: Number, 
    name: String,
    artist: String,
    inplaylist: Boolean
});

const Song = mongoose.model('Song', songSchema);

module.exports = Song;