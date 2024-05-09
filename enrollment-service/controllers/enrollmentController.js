const Enrollment = require('../models/enrollment');

const enrollmentController = {
    // Function to enroll a user in a course
    enrollCourse: async (req, res) => {
          
        try {
            const { courseId, userId } = req.body;

            // Check if the user has already enrolled in the course
            const existingEnrollment = await Enrollment.findOne({ course_id: courseId, user_id: userId });

            if (existingEnrollment) {
                return res.status(400).json({ message: 'User is already enrolled in this course' });
            }

            // Check if the course is published by the same user
            const course = await Course.findById(courseId);

            if (!course) {
                return res.status(404).json({ message: 'Course not found' });
            }

            if (course.user_id.toString() === userId) {
                return res.status(400).json({ message: 'User cannot enroll in their own course' });
            }

            // If the user has not enrolled in the course and the course is not published by the user, create a new enrollment
            const enrollment = new Enrollment({ course_id: courseId, user_id: userId });
            await enrollment.save();

            res.status(201).json(enrollment);
            const alreadyEnrolled = await Enrollment.find({ user_id: req.body.user_id, course_id: req.body.course_id });
            if (alreadyEnrolled.length > 0) {
                return res.json({ message: 'Already enrolled' });
            }    
            const enrollment = new Enrollment(req.body);
            await enrollment.save();
            res.status(201).json({enroll : enrollment});
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    },
    
    //confirm the enrollment
    confirmEnrollment: async (req, res) => {
        try {
            const { enrollmentId } = req.params;
            const enrollment = await Enrollment.findByIdAndUpdate(enrollmentId, { status: 'active' }, { new: true });
            
            if (!enrollment) {
                return res.status(404).json({ message: 'Enrollment not found' });
            }

            res.json(enrollment);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    //cancelled the enrollment
    handlePaymentCancellation: async (req, res) => {
        try {
            const { enrollmentId } = req.params;

            // Delete the enrollment entry
            await Enrollment.findByIdAndDelete(enrollmentId);

            res.json({ message: 'Enrollment cancelled' });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    // Function to get all enrollments
    updateEnrollStatus: async (req, res) => {
        try {
            const alreadyEnrolled = await Enrollment.find({ course_id: req.params.courseId, user_id: req.params.studentId });
           
             
            if (!alreadyEnrolled || alreadyEnrolled.length === 0) {
                return res.json({ message: 'You have not enrolled in this course yet.' });
            }
    
            const updateStatus = req.body.status;
    
            // Iterate over each enrollment and update its status
            for (let enrollment of alreadyEnrolled) {
                enrollment.status = updateStatus;
                await enrollment.save();
            }
    
            res.status(200).json({ message: 'Enrollment status updated successfully.' });
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    },
    
    getEnrollments: async (req, res) => {
        try {
            const enrollments = await Enrollment.find();
            res.json(enrollments);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    // Function to get all enrolled students for a course
    getEnrolledStudents: async (req, res) => {
        try {
            const enrollments = await Enrollment.find({ course_id: req.params.courseId });
            const studentIds = enrollments.map(enrollment => enrollment.user_id);
            res.json(studentIds);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    // Function to get all enrolled courses for a user
    getEnrolledCourses: async (req, res) => {
        try {
            const enrollments = await Enrollment.find({ user_id: req.params.userId });
            const courseIds = enrollments.map(enrollment => enrollment.course_id);
            res.json(courseIds);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    // Function to unenroll a user from a course
    unEnrollCourse: async (req, res) => {
        // res.send('unEnrolled')
        try {
            await Enrollment.findByIdAndDelete(req.params.id);
            res.json({ message: 'Deleted Enrollment' });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
};

module.exports = enrollmentController;
