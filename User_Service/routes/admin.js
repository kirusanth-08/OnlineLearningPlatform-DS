const router = require('express').Router()
const adminController = require('../controllers/adminController')
const verify = require('../middleware/verfyToken')


router.get('/instructor',adminController.getAllinstructor)
router.get('/notApproved',verify,adminController.getAll_not_approved_instructor)
router.delete('/instructor/:id',verify,adminController.removeInstructor)
router.get('/student/:id',adminController.viewStudentByStuID)
router.get('/students',adminController.getAllstudent)

module.exports = router