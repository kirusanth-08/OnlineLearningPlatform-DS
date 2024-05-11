const express = require('express');
const router = express.Router();
const enrollmentController = require('../controllers/enrollmentController');

router.post('/enroll', enrollmentController.enrollCourse);
router.put('/enroll/:courseId/:studentId',enrollmentController.updateEnrollStatus)
router.get('/', enrollmentController.getEnrollments);
router.post('/students/:courseId', enrollmentController.getEnrolledStudents);
router.post('/myCourses/:id', enrollmentController.getEnrolledCourses);
router.delete('/:courseId', enrollmentController.unEnrollCourse);
router.get('/totalenroll', enrollmentController.getEnrollmentCount)
router.get('/enrollmentsthisweek', enrollmentController.getEnrollmentCountLastWeek)

module.exports = router;