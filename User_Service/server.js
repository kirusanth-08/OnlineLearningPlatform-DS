const express = require('express')
const mongoose = require('mongoose')
const app = express()
const dotenv = require('dotenv')
const cookieParser = require('cookie-parser');
dotenv.config();

const http = require('http');
const {Server} = require('socket.io'); // Import Socket.IO
const server = http.createServer(app)
const cors = require('cors')
app.use(cors())
const io = new Server(server,{
    cors : {
        origin : 'http://localhost:3000',
        methods : ['POST','GET']
    }
})

//import routes
const authRoute = require('./routes/auth')
const adminRoute = require('./routes/admin')
const instructRoute = require('./routes/instructor')
const studentRoute = require('./routes/student')

//connect the database 
mongoose.connect(process.env.DB_CONNECT,{useNewUrlParser : true}) 
const con = mongoose.connection 
con.on('open',()=>{
    console.log('mongoDB connected.....')
})
// Use cookie-parser middleware
app.use(cookieParser());
//Middelware 
app.use(express.json())


//routes middlewares
app.use('/api/user',authRoute)
app.use('/api/admin',adminRoute)
app.use('/api/instructor',instructRoute)
app.use('/api/student',studentRoute)

// Socket.IO logic
io.on('connection', (socket) => {
    console.log(' user socket connected');

    socket.on('disconnect',()=>{
        console.log('user socket connected');
    })
});


server.listen(8080,()=>{
    console.log("server running on port 8080.....")
})
