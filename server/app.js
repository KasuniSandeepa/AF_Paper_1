const cors = require('cors');
const dotenv = require('dotenv');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const subjectAPI = require('./src/api/subject.api');
const courseAPI = require('./src/api/course.api');

dotenv.config();
const app = express();
app.use(cors());
app.use(bodyParser.json());

const MONGODB_URI = process.env.MONGODB_URI;

mongoose.connect(MONGODB_URI || '&w=majority', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}, (error) => {
    if (error) {
        console.log('Database Error: ', error.message);
    }

});

mongoose.connection.once('open', () => {
    console.log('Database Synced');
});

app.route('/').get((req, res) => {
    res.send('SLIIT AF FINAL API BY SE2021 BATCH');
});

app.use('/subject', subjectAPI());
app.use('/course', courseAPI());

module.exports = app;


