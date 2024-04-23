const express = require('express');
const router = express.Router();
const enrollmentController = require('../controllers/enrollmentController');

router.post('/courseId', enrollmentController.enrollCourse);
router.get('/', enrollmentController.getEnrollments);
router.post('/students/:courseId', enrollmentController.getEnrolledStudents);
router.post('/myCourses/', enrollmentController.getEnrolledCourses);
router.delete('/:courseId', enrollmentController.unEnrollCourse);

module.exports = router;