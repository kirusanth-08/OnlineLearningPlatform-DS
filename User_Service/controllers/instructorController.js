const { model } = require('mongoose');
const User = require('../models/User');

const instructorController = {

        viewProfile: async(req,res)=>{
            if(req.user.role !== 'instructor') return res.status(403).json({ message: 'Forbidden. Only instructor view their profile.'});

            

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
            if (req.user.role !== 'instructor') {
                return res.status(403).json({ message: 'Forbidden. Only instructors can update their profile.' });
            }
        
            try {
                const userId = req.user._id;
                const updatedBio = req.body.bio; // Assuming the updated profile data is sent in the request body
                
        
                // Check if the user exists and is an instructor
                const user = await User.findById(userId);
        
                if (!user) {
                    return res.status(404).json({ message: 'User not found.' });
                }
        
                // Check if the user is updating their own profile
                if (user._id.toString() !== req.params.id) {
                    return res.status(401).json({ message: `Forbidden. You can't update other users' profile.` });
                }
        
                user.bio = updatedBio
                 

                // Update the user's profile
                const updatedDetails = await user.save()
                
        
                res.json({ message: 'Profile updated successfully.', updatedDetails });
            } catch (err) {
                res.status(500).json({ message: 'Internal Server Error' });
            }
        },
        

}

module.exports = instructorController