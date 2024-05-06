const mongoose = require('mongoose');

const courseContentSchema = new mongoose.Schema({
    
    instructor_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Referencing the User model
                
    },
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
        // You can add more fields if needed, such as size, MIME type, etc.
    },
    assignment: {
        filename: String, // Original filename
        path: String // File path or URL
        // You can add more fields if needed, such as size, MIME type, etc.
    }
     
});

module.exports = mongoose.model('CourseContent', courseContentSchema);
