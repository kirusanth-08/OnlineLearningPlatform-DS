
const router = require('express').Router()
const courseContentController = require('../controllers/courseContentController')
router.post('/assign/:id',courseContentController.assignInstructor)
router.post('/resign/:id',courseContentController.resignInstructor)
router.post('/create',courseContentController.createCourseContent)
router.put('/update/:id',courseContentController.updateCourseContent)
router.delete('/delete/:id',courseContentController.deleteCourseContent)
router.get('/:id',courseContentController.viewCourseContent)
router.get('/',courseContentController.viewAllCourseContent)

module.exports = router