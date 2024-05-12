const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    instructor_id: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User', // Assuming there's a User model
            required: true
        },
        username: {
            type: String,
            required: true
        }
    }
});

module.exports = mongoose.model('Course', courseSchema);
