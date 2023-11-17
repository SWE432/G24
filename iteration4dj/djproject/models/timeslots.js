//song schema - only one needed for djs
const mongoose = require('mongoose');

const timeslotsSchema = new mongoose.Schema({
    time: String
});

const Timeslots = mongoose.model('Timeslot', timeslotsSchema);

module.exports = Timeslots;