const router = require('express').Router()
const studentController = require('../controllers/studentController')
const verify = require('../middleware/verfyToken')

router.get('/:id',studentController.viewProfile)
router.put('/update/:id',studentController.updateProfile)

module.exports = router