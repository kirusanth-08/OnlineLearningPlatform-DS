const { model } = require('mongoose');
const User = require('../models/User');

const adminController ={
    //get all instructor
    getAllinstructor :  async(req,res)=>{
        //first validate admin
        if(req.user.role !== 'admin') return res.status(403).json({ message: 'Forbidden. Only Admin view instructor.'});

        try{
            const instructor = await User.find({role : 'instructor', isApproved : 'true'})
            res.json(instructor)
        }
        catch(err){
            res.status(500).json({ message: 'Internal Server Error' });
        }
        
    },
    //get not approved instructor
    getAll_not_approved_instructor :  async(req,res)=>{
        //first validate admin
        if(req.user.role !== 'admin') return res.status(403).json({ message: 'Forbidden. Only Admin view instructor.'});

        try{
            const instructor = await User.find({role : 'instructor', isApproved : 'false'})
            res.json(instructor)
        }
        catch(err){
            res.status(500).json({ message: 'Internal Server Error' });
        }
        
    },

    //remove instructor 
    removeInstructor : async(req,res)=>{
        if(req.user.role !== 'admin') return res.status(403).json({ message: 'Forbidden. Only Admin view instructor.'}); 
        const instructorId = req.params.id;
        try {
            // Find and delete the instructor by ID
            const result = await User.findByIdAndDelete(instructorId);
            
            if (!result) {
                return res.status(404).json({ message: 'Instructor not found.' });
            }
    
            res.json({ message: 'Instructor removed successfully.' });
        } catch (err) {
            res.status(500).json({ message: 'Internal Server Error' });
        }

    },
    //remove student 
   removeStudent : async(req,res)=>{
        if(req.user.role !== 'admin') return res.status(403).json({ message: 'Forbidden. Only Admin view instructor.'}); 
        const studentId = req.params.id;
        try {
            // Find and delete the instructor by ID
            const result = await User.findByIdAndDelete(studentId);
            
            if (!result) {
                return res.status(404).json({ message: 'student not found.' });
            }
    
            res.json({ message: 'student removed successfully.' });
        } catch (err) {
            res.status(500).json({ message: 'Internal Server Error' });
        }

    },
     //get all student
     getAllstudent :  async(req,res)=>{
        //first validate admin
        if(req.user.role !== 'admin') return res.status(403).json({ message: 'Forbidden. Only Admin view instructor.'});

        try{
            const student = await User.find({role : 'student'})
            res.json(student)
        }
        catch(err){
            res.status(500).json({ message: 'Internal Server Error' });
        }
        
    },
    

    
}

module.exports = adminController