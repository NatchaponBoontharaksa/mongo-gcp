const mongoose = require('mongoose');

/*
{
    _id,
    Token: String,
    date: {
        day: Number,
        month: Number,
        year: Number
    },
    time: {
        hour: Number,
        min: Number,
        sec: Number
    },
    deviceInfo: {
        deviceId: String,
        deviceStatus: Boolean,
        deviceSignal: String,
    },
    sensorInfo: {
        powerConsumption: Number,
        batteryVoltage: Number,
        batteryCurrent: Number,
        solarVoltage: Number,
        solarCurrent: Number,
        lightValue: Number,
        location: [Number, Number]
    }
}
*/

const smartPoleSchema = mongoose.Schema({
    id: String,
    deviceStatus: Boolean
})

module.exports = mongoose.model('smartPole', smartPoleSchema);