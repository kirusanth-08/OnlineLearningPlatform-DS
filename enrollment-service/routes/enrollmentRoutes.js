const express = require('express');
const router = express.Router();
const enrollmentController = require('../controllers/enrollmentController');

// Route to enroll a user in a course
router.post('/', enrollmentController.enrollCourse);

// Route to get all enrollments
router.get('/', enrollmentController.getEnrollments);

// Route to get all enrolled students for a course
router.get('/students/:courseId', enrollmentController.getEnrolledStudents);

// Route to get all enrolled courses for a user
router.get('/courses/:userId', enrollmentController.getEnrolledCourses);

// Route to unenroll a user from a course
router.delete('/:id', enrollmentController.unEnrollCourse);

module.exports = router;
