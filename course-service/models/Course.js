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
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Referencing the User model
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    start_date: {
        type: Date,
        required: true
    } 
});

module.exports = mongoose.model('Course', courseSchema);
