const User = require('../models/User');
const {registerValidation , loginValidation } = require('../Validation/authValidation')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const userAuthController = {
    
    registerUser : async(req,res)=>{
        //validate the data before create a user
       const {error} =  registerValidation(req.body)
       if(error) return res.status(400).send(error.details[0].message)

       //checking if the user already in database
       const emailExist = await User.findOne({email : req.body.email})
       if(emailExist) return res.status(400).send('email already exist')

       // hash the password 
       const salt = await bcrypt.genSalt(10)
       const hashPassword = await bcrypt.hash(req.body.password,salt)

       //create new user
         const user = new User({
            username :req.body.username,
            email :req.body.email,
            password :hashPassword,
            role : req.body.role,
            profile_picture : req.body.profile_picture ,
            expertise: req.body.expertise,
            bio: req.body.bio
         })
         try{
            const savedUser = await user.save()
            res.send({user : user._id})

              // Emit a notification to the admin if the user role is 'instructor'
        if (req.body.role === 'instructor') {
            io.emit('newInstructor', { username: req.body.username, email: req.body.email });
        }
         }
         catch{
            res.status(400).send(err)
         }
    },


    loginUser : async(req,res)=>{
            
        //validate the data before user login
        const {error} =  loginValidation(req.body)
        if(error) return res.status(400).send(error.details[0].message)

        //checking if the user already in database
       const user = await User.findOne({email : req.body.email})
       if(!user) return res.status(400).send('Email is not found') 

        // Check if the password is correct
        const validPassword = await bcrypt.compare(req.body.password, user.password);
        if(!validPassword) return res.status(400).send('Invalid password');
        

         

        //create and assign a tokken 
        const token = jwt.sign({_id : user._id},process.env.TOKEN_SECRET)
        //res.header('auth-token',token)
        // Set token in a cookie////////////////////////////////////////////////////////////////////////////////
        res.cookie('auth-token', token, {
        httpOnly: true,
        expires: new Date(Date.now() +  5 * 60 * 1000), // Set expiry time to 10 minutes from now
    });

        res.send("Success! You are logged in");
    },



    

    logoutUser: async (req, res) => {
        // Clear the authentication token cookie
        res.clearCookie('auth-token');
    
        // Redirect the user to the login page or send a response indicating successful logout
        res.send("You are logged out");
    }
    
}

module.exports = userAuthController