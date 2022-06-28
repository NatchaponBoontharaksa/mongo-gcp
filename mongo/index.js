const express = require('express');
const mongoose = require('mongoose');
const app = express();
const smartPole = require('./models/smartPole');
require("dotenv").config({ path: "./config.env" });

// User: superAdmin, pwd: 1234
// User: natchapon, pwd: 1234

const port = process.env.PORT || 3001;
const db = process.env.MONGO_URI;
const option = {
    user: process.env.MONGO_USERNAME,
    pass: process.env.MONGO_PWD
}

app.use(express.json())

mongoose.connect(db, option).then(() => {
    console.log('Connected to database')
});

app.get("/api/get/", async (req, res, next) => {
    const data = await smartPole.find({})
    res.send(data);
})

app.post("/api/add", async (req, res, next) => {
    console.log("add data!!!!")
    const data = {
        id: req.body.id,
        deviceStatus: req.body.deviceStatus
    }
    console.log(data.id, data.deviceStatus);
    const result = new smartPole({
        id: data.id,
        deviceStatus: data.deviceStatus
    });
    await result.save();
    res.send(result);
})

app.listen(port, () => {
    console.log('Application is running on port ' + port);
});

//========================================
// const express = require('express');
// const { MongoClient } = require("mongodb");
// const app = express();
// const smartPole = require('./models/smartPole');
// require("dotenv").config({ path: "./config.env" });
// const port = process.env.PORT || 3001;

// app.post("/api/add", async (req, res, next) => {
//     const client = new MongoClient(process.env.MONGO_URI2);
//     await client.connect();
//     await client.db('iot').collection('smartpoles').insertOne({
//         id: req.body.id,
//         deviceStatus: req.body.deviceStatus
//     })
//     await client.close();
//     res.status(200).send("ADD DATA COMPLETE");
// })

// app.listen(port, () => {
//     console.log('Application is running on port ' + port);
// });