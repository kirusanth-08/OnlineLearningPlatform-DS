const router = require('express').Router()
const courseController = require('../controllers/courseController')

router.post('/create',courseController.createCourse)
module.exports = router