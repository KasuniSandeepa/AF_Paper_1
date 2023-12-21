const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema({
    name:{ type: String, required: true, trim: true},
    code:{ type: String, required: true, trim: true},
    passMark:{ type: Number, required: true, trim: true},
    lectureInCharge:{ type: String, required: true, trim: true},
    subjects:[{ type: mongoose.Schema.Types.ObjectId, required: false, ref: 'subjects'}]
})

const Course = mongoose.model('courses', CourseSchema);

module.exports = Course;