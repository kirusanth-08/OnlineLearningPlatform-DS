const { model } = require('mongoose');
const Course = require('../models/Course')
const courseController = {
    createCourse: async (req, res) => {
        
        try {
             
            const { title, description, instructor_id, priceAll, pricePer,dcover,name} = req.body;

        
            const newCourse = new Course({
                title,
                description,
                instructor_id,
                priceAll,
                pricePer,
                 
                
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
            const { title, description, instructor_id, price, start_date } = req.body;

            let course = await Course.findById(courseId);


            if (!course) {
                return res.status(404).json({ error: 'Course not found' });
            }


            course.title = title;
            course.description = description;
            course.instructor_id = instructor_id;
            course.price = price;
            course.start_date = start_date;



            await course.save();

            res.status(200).json({ message: 'Course updated successfully', course });
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
    viewAllCourse: async (req, res) => {
        try {

            const courses = await Course.find();

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

            res.json({ course });
        } catch (error) {
            console.error('Error fetching course:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    }
}

module.exports = courseController