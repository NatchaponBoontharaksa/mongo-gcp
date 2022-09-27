const mongoose = require('mongoose');

/*
{
    _id,
    Token: String,                  - Token that generate from webserver
    date: String,                   - DDMMYYYY
    time: String,                   - HHMMSS
    MessageCount: Number,           - Number of message that send to server
    deviceInfo: {
        deviceId: String,           - Maybe IMEI of NB-IoT device
        deviceStatus: Boolean,      - Status of system (Healthy, Unhealthy)
        deviceSignal: String,       - signal status (dBm)
    },
    sensorInfo: {
        powerConsumption: Number,   - power consumption of system
        batteryVoltage: Number,     - battery remain
        batteryCurrent: Number,     - battery current load
        solarVoltage: Number,       - Voltage output from solar cell
        solarCurrent: Number,       - Currect output from solar cell
        lightValue: Number,         - brightness from LED
        location: [Number, Number]  - Longtitude and Latitude
    }
}
*/

const smartPoleSchema = mongoose.Schema({
    rssi: String,
    payload: String
})

module.exports = mongoose.model('smartPole', smartPoleSchema);