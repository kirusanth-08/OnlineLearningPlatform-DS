const mongoose = require('mongoose');

const courseContentSchema = new mongoose.Schema({
    
    instructor_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Referencing the User model
        required: true
    },
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
    },
    video : {
        type: String
    }
     
});

module.exports = mongoose.model('CourseContent', courseContentSchema);
