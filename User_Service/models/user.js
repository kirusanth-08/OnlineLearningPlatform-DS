const mongoose = require('mongoose');

// Define user schema
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        min : 5, 
        max : 100
    },
    email: {
        type: String,
        required: true,
        unique: true,
        min : 8,
        max : 355
    },
    password: {
        type: String,
        required: true
    },
    // role: {
    //     type: String,
    //     default : 'student'
    //     // required: true,
    //     // enum: ['student', 'instructor','admin']
    // },
    profile_picture :{
        type: String,
        default: 'https://www.khalqfoundation.org/assets/images/default.png' 
    },
    date : {
        type : Date,
        default : Date.now
    },
                                   
    // //(e.g., Programming, Mathematics, Biology)
    // expertise :{
    //     type : String,
    //     required : function (){
    //         return this.role === 'instructor'
    //     }
    // },
    
    // bio : {
    //     type : String,
    //     required : function (){
    //         return this.role === 'instructor'
    //     }
    // },
    instructor: {
        type: Boolean,
        default: false, // New users are not approved by default
        
    }

});

// Create a User model

module.exports = mongoose.model('User', userSchema);

