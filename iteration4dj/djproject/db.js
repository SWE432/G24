const mongoose = require('mongoose');

const songSchema = new mongoose.Schema({
  title: String,
  artist: String
});


const song = mongoose.model('Song', songSchema);

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/dj')
}

module.exports = { main };