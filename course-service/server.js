const express = require('express')
const mongoose = require('mongoose')
const app = express() 
const dotenv = require('dotenv')
dotenv.config();

const courseRoute = require('./routes/course')
const courseContentRoute = require('./routes/courseContent')
//connect the database 
mongoose.connect(process.env.DB_CONNECT,{useNewUrlParser : true}) 
const con = mongoose.connection 
con.on('open',()=>{
    console.log('mongoDB connected.....')
})


//Middelware 
app.use(express.json())
//course route 
app.use('/api/course',courseRoute)
//course_content route 
app.use('/api/courseContent',courseContentRoute)
app.listen(8082,()=>{
    console.log("server running on port 8082.....")
})




