const router = require('express').Router()
const courseController = require('../controllers/courseController')

router.post('/create',courseController.createCourse)
router.put('/:id/update',courseController.updateCourse)
router.put('/:id/status',courseController.updateCourseStatus)
router.delete('/delete/:id',courseController.deleteCourse)
router.get('/viewAll',courseController.viewAllCourse)
router.get('/view',courseController.viewCourses)
router.get('/:id',courseController.viewCourse)

module.exports = router 