const router = require('express').Router()
const studentController = require('../controllers/studentController')
const verify = require('../middleware/verfyToken')

router.get('/:id',verify,studentController.viewProfile)
router.put('/update/:id',verify,studentController.updateProfile)

module.exports = router