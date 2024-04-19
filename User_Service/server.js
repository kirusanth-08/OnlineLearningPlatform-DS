const express = require('express')
const mongoose = require('mongoose')
const app = express()
const url = 'mongodb+srv://ds2024:ds2024@cluster0.iryrt4w.mongodb.net/OnlineLearning'

//connect the database 
mongoose.connect(url,{useNewUrlParser : true}) 
const con = mongoose.connection 
con.on('open',()=>{
    console.log('mongoDB connected.....')
})

//Middelware 
app.use(express.json())


app.listen(8080,()=>{
    console.log("server running on port 8080.....")
})