const { model } = require('mongoose'); 
const CourseContent = require('../models/CourseContent')

const courseContentController = {
    assignInstructor : async(req,res)=>{

    },
    resignInstructor : async(req,res)=>{
        
    },
    createCourseContent : async(req,res)=>{
        try {
            const { instructor_id, topic, descriptions, course_id, video } = req.body;
        
            const newCourseContent = new CourseContent({
                instructor_id,
                topic,
                descriptions,
                course_id,
                video
            });

            await newCourseContent.save();

            res.status(201).json({ message: 'Course content created successfully', courseContent: newCourseContent });
        } catch (error) {
            console.error('Error creating course content:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    },
    updateCourseContent : async(req,res)=>{
        try {
            const contentId = req.params.id; 
            const { instructor_id, topic, descriptions, course_id, video } = req.body;

            let courseContent = await CourseContent.findById(contentId);

            if (!courseContent) {
                return res.status(404).json({ error: 'Course content not found' });
            }

            courseContent.instructor_id = instructor_id;
            courseContent.topic = topic;
            courseContent.descriptions = descriptions;
            courseContent.course_id = course_id;
            courseContent.video = video;

            await courseContent.save();

            res.status(200).json({ message: 'Course content updated successfully', courseContent });
        } catch (error) {
            console.error('Error updating course content:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    },
    viewCourseContent : async(req,res)=>{
        try {
            const contentId = req.params.id;

            const courseContent = await CourseContent.findById(contentId);

            if (!courseContent) {
                return res.status(404).json({ error: 'Course content not found' });
            }

            res.status(200).json({ courseContent });
        } catch (error) {
            console.error('Error fetching course content:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    },
    deleteCourseContent : async(req,res)=>{
        try {
            const contentId = req.params.id;

            const deletedCourseContent = await CourseContent.findByIdAndDelete(contentId);

            if (!deletedCourseContent) {
                return res.status(404).json({ error: 'Course content not found' });
            }

            res.status(200).json({ message: 'Course content deleted successfully', courseContent: deletedCourseContent });
        } catch (error) {
            console.error('Error deleting course content:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    },
    viewAllCourseContent : async(req,res)=>{
        try {
           

            const courseContent = await CourseContent.find(); 
             
            res.status(200).json({ courseContent });
        } catch (error) {
            console.error('Error fetching course content:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    }
}

module.exports = courseContentController