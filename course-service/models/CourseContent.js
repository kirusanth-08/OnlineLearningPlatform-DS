const mongoose = require('mongoose');

const courseContentSchema = new mongoose.Schema({
     
    topic: {
        type: String,
        required: true
    },
    descriptions: {
        type: String,
        required: true
    },
    course_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course', // Referencing the Course model
        required: true
    } 
     
});

module.exports = mongoose.model('CourseContent', courseContentSchema);
