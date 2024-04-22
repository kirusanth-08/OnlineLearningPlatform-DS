const router = require('express').Router()
const instructorCont = require('../controllers/instructorController')
const verify = require('../middleware/verfyToken')

router.get('/:id',verify,instructorCont.viewProfile) 
router.put('/update/:id',verify,instructorCont.updateProfile) 

module.exports = router