const { model } = require('mongoose');
const Course = require('../models/Course')
const courseController = {
    createCourse: async (req, res) => {
        try {
            const { title, description, instructor_id, priceAll, pricePer ,duration} = req.body;
            const newCourse = new Course({
                title,
                description,
                instructor_id,
                priceAll,
                pricePer,
                duration
            });
             
            await newCourse.save();

            res.status(201).json({ message: 'Course created successfully', course: newCourse });
        } catch (error) {
            console.error('Error creating course:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
  
    },
    updateCourse: async (req, res) => {
        try {
            const courseId = req.params.id;
            const { title, description, instructor_id, priceAll, pricePer ,duration} = req.body;
            let course = await Course.findById(courseId);


            if (!course) {
                return res.status(404).json({ error: 'Course not found' });
            }


            course.title = title;
            course.description = description;
            course.instructor_id = instructor_id;
            course.priceAll = priceAll;
            course.pricePer = pricePer;
            course.duration = duration;
            course.isApproved=false;


            await course.save();

            res.status(200).json({ message: course });
        } catch (error) {
            console.error('Error updating course:', error);
            res.status(500).json({ error: 'Internal server error' });
        }

    },
    updateCourseStatus: async (req, res) => {
         
        try {
            const courseId = req.params.id;
            const  isApprove  = req.body.isApproved;

            let course = await Course.findById(courseId);


            if (!course) {
                return res.status(404).json({ error: 'Course not found' });
            }
            course.isApproved = isApprove
            await course.save();
            res.status(200).json({ message: course });
        } catch (error) {
            console.error('Error updating course:', error);
            res.status(500).json({ error: 'Internal server error' });
        }

    },
    deleteCourse: async (req, res) => {
        try {
            const courseId = req.params.id;


            const deletedCourse = await Course.findByIdAndDelete(courseId);

            if (!deletedCourse) {
                return res.status(404).json({ error: 'Course not found' });
            }

            res.status(200).json({ message: 'Course deleted successfully', course: deletedCourse });
        } catch (error) {
            console.error('Error deleting course:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    },
    viewApprovedCourses: async (req, res) => {
        try {
            const courses = await Course.find({isApproved : true});
            res.json({ course : courses });
        } catch (error) {
            console.error('Error fetching courses:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    },
    viewAllCourse: async (req, res) => {
        try {

            const courses = await Course.find();
            res.json({ course : courses });
        } catch (error) {
            console.error('Error fetching courses:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    },
    viewNotApproved: async (req, res) => {
        try {

            const courses = await Course.find({isApproved : false});

            res.json({ course : courses });
        } catch (error) {
            console.error('Error fetching courses:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    },
    viewCourse: async (req, res) => {
        try {
            const courseId = req.params.id;


            const course = await Course.findById(courseId);

            if (!course) {
                return res.json({ error: 'Course not found' });
            }

            res.json({ course : course });
        } catch (error) {
            console.error('Error fetching course:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    },

    viewInstructorCourse: async (req, res) => {
        try {
            const instructorId = req.body.instructor_id;
            // console.log(instructorId)
            const courses = await Course.find({'instructor_id.id' : instructorId});
            res.json({ courses });
        } catch (error) {
            // console.error('Error fetching instructor courses:', error);
            console.error('Error fetching instructor courses:',);
            res.status(500).json({ error: 'Internal server error' });
        }
    }
}

module.exports = courseController