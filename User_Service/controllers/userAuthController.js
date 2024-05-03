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
       if(emailExist) return res.json({error : 'email already exist'})

       // hash the password 
       const salt = await bcrypt.genSalt(10)
       const hashPassword = await bcrypt.hash(req.body.password,salt)

       //create new user
         const user = new User({
            username :req.body.username,
            email :req.body.email,
            password :hashPassword,
            profile_picture : req.body.profile_picture ,
             
         })
         try{
            const savedUser = await user.save()
            res.send({user : savedUser._id})

       
         }
         catch(err){
            res.status(400).send({error : err})
         }
    },


    loginUser : async(req,res)=>{
            
        //validate the data before user login
        const {error} =  loginValidation(req.body)
        if(error) return res.status(400).send(error.details[0].message)

        //checking if the user already in database
       const user = await User.findOne({email : req.body.email})
       if(!user) return res.json({error : 'Email is not found'}) 

        // Check if the password is correct
        const validPassword = await bcrypt.compare(req.body.password, user.password);
        if(!validPassword) return res.json({error : 'Invalid password'});
        

         

        //create and assign a tokken 
        const token = jwt.sign({_id : user._id},process.env.TOKEN_SECRET)
        res.header('authtoken',token)
        // Set token in a cookie////////////////////////////////////////////////////////////////////////////////
    //     res.cookie('authtoken', token, {
    //     httpOnly: true,
    //     expires: new Date(Date.now() +  5 * 60 * 1000), // Set expiry time to 10 minutes from now
    // });

        res.send({token : token , username : user.username , id : user._id , instructor : user.instructor});
    },



    

    logoutUser: async (req, res) => {
        // Clear the authentication token cookie
        res.clearCookie('authtoken');
    
        // Redirect the user to the login page or send a response indicating successful logout
        res.send("You are logged out");
    },
    auth : {
       
    },

    authenticate : async(req,res)=>{
         
            try {
                // Extract token from request header or cookies
                const token = req.header('authtoken') || req.cookies['authtoken'];
    
                // If token doesn't exist, user is not authenticated
                if (!token) {
                    return res.status(401).json({ error: 'Access denied, authentication token missing' });
                }
    
                // Verify the token
                const decodedToken = jwt.verify(token, process.env.TOKEN_SECRET);
    
                // Token verification successful, user is authenticated
                res.status(200).json({user : req.user});
            } catch (error) {
                // Token verification failed, user is not authenticated
                res.status(401).json({ error: 'Access denied, invalid authentication token' });
            }
        //res.json(req.user)
    }
    
}

module.exports = userAuthController