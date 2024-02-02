require('dotenv').config();

const routes = require('./routes/routes')
const express = require('express');
const mongoose = require('mongoose');
const mongoConn = process.env.ATLAS_URI;
const router = express.Router();

module.exports = router;

mongoose.connect(mongoConn);

const db = mongoose.connection;

db.on('error', (e) => {
    console.log(e)
});

db.once('connected', () => {
    console.log("DB C")
})

const app = express();

app.use(express.json());
app.use('/api', routes);


app.listen(2120, () => {
    console.log('Hamster Running on Wheel: 2120')
})