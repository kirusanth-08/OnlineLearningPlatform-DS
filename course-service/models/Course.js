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
    // instructor_id: {
       
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'User', // Referencing the User model
    //     required: true
    // },
    instructor_id: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User', // Assuming there's a User model
            required: true
        },
        username: {
            type: String,
            required: true
        },
        profile_picture: {
            type: String,
            required: true
        }
    },
    priceAll: {
        type: Number,
        required: true
    },
    pricePer: {
        type: Number,
        required: true
    },
    duration:{
        type: Number,
        required: true
    }
     
});

module.exports = mongoose.model('Course', courseSchema);
