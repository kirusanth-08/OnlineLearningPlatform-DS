const express = require('express')
const mongoose = require('mongoose')
const app = express() 
const dotenv = require('dotenv')
const cors = require('cors')
const path = require('path');
dotenv.config();

const courseRoute = require('./routes/course')
const courseContentRoute = require('./routes/courseContent')
//connect the database 
mongoose.connect(process.env.DB_CONNECT,{useNewUrlParser : true}) 
const con = mongoose.connection 
con.on('open',()=>{
    console.log('mongoDB connected.....')
})

// Serve static files from the 'uploads' directory
app.use('/file', express.static(path.join(__dirname, '/')));

//Middelware 
app.use(express.json())
// Use CORS middleware
app.use(cors());
//course route 
app.use('/api/course',courseRoute)
//course_content route 
app.use('/api/courseContent',courseContentRoute)
app.listen(8082,()=>{
    console.log("server running on port 8082.....")
})