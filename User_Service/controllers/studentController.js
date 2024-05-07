const { model } = require('mongoose');
const User = require('../models/User');

const studentController = {

    viewProfile: async(req,res)=>{
        if(req.user.role !== 'student') return res.status(403).json({ message: 'Forbidden. Only student view their profile.'});

        

        try{
            const filterUser = await User.findOne(req.user._id)
            //check specific instructor can view profile with his specific id
           if (filterUser._id != req.params.id) return res.status(401).json({ message: `Forbidden. hey ${filterUser.username}!, you can't view others profile.` });


            const instructor = await User.findById({_id : req.params.id})
            res.json(instructor)
        }
        catch(err){
            res.status(500).json({ message: 'Internal Server Error' });
        }
    },

     //update 
     updateProfile: async (req, res) => {
         
    
        try {
            const userId = req.params.id;
            const updatedStatus= req.body.instructor; // Assuming the updated profile data is sent in the request body
            
    
            // Check if the user exists and is an student
            const user = await User.findById(userId);
    
            if (!user) {
                return res.status(404).json({ error: 'User not found.' });
            }
    
            
            user.instructor = updatedStatus
             

            // Update the user's profile
            const updatedDetails = await user.save()
            
    
            res.json({ message: 'Profile status updated successfully.', updatedDetails });
        } catch (err) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
}
module.exports = studentController