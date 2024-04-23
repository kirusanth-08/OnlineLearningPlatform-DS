const Enrollment = require('../models/enrollment');

const enrollmentController = {
    enrollCourse: async (req, res) => {
        try {
            const enrollment = new Enrollment(req.body);
            await enrollment.save();
            res.status(201).json(enrollment);
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

    getEnrolledStudents: async (req, res) => {
        try {
            const enrollments = await Enrollment.find({ courseId: req.params.courseId });
            const studentIds = enrollments.map(enrollment => enrollment.user_id);
            res.json(studentIds);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    getEnrolledCourses: async (req, res) => {
        try {
            const enrollments = await Enrollment.find({ user_id: req.body.userId });
            const courseIds = enrollments.map(enrollment => enrollment.course_id);
            res.json(courseIds);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    

    unEnrollCourse: async (req, res) => {
        try {
            await Enrollment.findByIdAndDelete(req.params.id);
            res.json({ message: 'Deleted Enrollment' });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

//     enrolledCourses: async (req, res) => {
//     try {
//         const enrollments = await Enrollment.find({ user_id: req.params.studentId });
//         const courseIds = enrollments.map(enrollment => enrollment.course_id);
//         res.json(courseIds);
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// }
};

module.exports = enrollmentController;