const mongoose = require('mongoose');

const smartPoleSchema = mongoose.Schema({
    id: String,
    deviceStatus: Boolean
})

module.exports = mongoose.model('smartPole', smartPoleSchema);