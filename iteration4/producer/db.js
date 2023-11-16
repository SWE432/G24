const mongoose = require('mongoose');

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/web-dev');

  const playlistSchema = new mongoose.Schema({
    name: String,
    genre: String
  });
  const Playlist = mongoose.model('Playlist', playlistSchema);
  
  const djSchema = new mongoose.Schema({
    name: String
  });
  const DJ = mongoose.model('DJ', djSchema);

  const eventSchema = new mongoose.Schema({
    name: String,
    description: String
  });
  const Event = mongoose.model('Event', eventSchema);

  const timeslotSchema = new mongoose.Schema({
    time: String
  });
  const Timeslot = mongoose.model('Timeslot', timeslotSchema);

  const playlists = await Playlist.find();
  const events = await Event.find();
  const djs = await DJ.find();
  const timeslots = await Timeslot.find();

  const data = {
    playlists: playlists,
    events: events,
    djs: djs,
    timeslots: timeslots
  }

  return data;
}

module.exports = { main };