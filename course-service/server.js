const express = require('express')
const mongoose = require('mongoose')
const app = express() 
const dotenv = require('dotenv')
dotenv.config();


//connect the database 
mongoose.connect(process.env.DB_CONNECT,{useNewUrlParser : true}) 
const con = mongoose.connection 
con.on('open',()=>{
    console.log('mongoDB connected.....')
})
//Middelware 
app.use(express.json())
app.listen(8080,()=>{
    console.log("server running on port 8080.....")
})




