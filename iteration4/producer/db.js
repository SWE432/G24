const mongoose = require('mongoose');

const playlistSchema = new mongoose.Schema({
  name: String,
  genre: String
});

const djSchema = new mongoose.Schema({
  name: String
});

const eventSchema = new mongoose.Schema({
  name: String,
  description: String
});

const timeslotSchema = new mongoose.Schema({
  time: String
});

const selectionSchema = new mongoose.Schema({
  playlist: String,
  events: [String],
  dj: String,
  timeslot: String,
  author: String,
  timestamp: {
    type: Date,
    default: Date.now(),
  }
}, 
{
  versionKey: false
});


const Playlist = mongoose.model('Playlist', playlistSchema);
const DJ = mongoose.model('DJ', djSchema);
const Event = mongoose.model('Event', eventSchema);
const Timeslot = mongoose.model('Timeslot', timeslotSchema);
const Selection = mongoose.model('Selection', selectionSchema);


async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/web-dev');

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

async function insertSelections(selections) {
  const newSelection = new Selection({
    playlist: selections.playlist,
    events: selections.events,
    dj: selections.dj,
    timeslot: selections.timeslot,
    author: selections.author,
    timestamp: selections.timestamp
  })

  await newSelection.save();
};

async function getLatestSelection() {
  try {
    const latestSelection = await Selection.findOne({}, {}, { sort: { 'timestamp': -1 }});
    return latestSelection;
  } catch (error) {
    console.error("error retrieving latest selection:", error);
  }
}

module.exports = { main, insertSelections, getLatestSelection };