const mongoose = require('mongoose');

const courseContentSchema = new mongoose.Schema({
    topic: {
        type: String,
        required: true
    },
    course_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course', // Referencing the Course model
        required: true
    },
    video : {
        type: String
    },
    lecture: {
        filename: String, // Original filename
        path: String // File path or URL
    },
    assignment: {
        filename: String, // Original filename
        path: String // File path or URL
    }
     
});

module.exports = mongoose.model('CourseContent', courseContentSchema);
