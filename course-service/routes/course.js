const router = require('express').Router()
const courseController = require('../controllers/courseController')

router.post('/create',courseController.createCourse)
router.put('/:id/update',courseController.updateCourse)
router.put('/:id/status',courseController.updateCourseStatus)
router.delete('/delete/:id',courseController.deleteCourse)
router.get('/viewAll',courseController.viewApprovedCourses)
router.get('/view',courseController.viewAllCourse)
router.get('/viewF',courseController.viewNotApproved)
router.get('/:id',courseController.viewCourse)
router.post('/myCourses',courseController.viewInstructorCourse)

module.exports = router 