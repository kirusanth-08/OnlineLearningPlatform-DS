const router = require('express').Router()
const userController = require('../controllers/userAuthController')
// Route for creating a new user
router.post('/register',userController.registerUser)
// Route for user login 
router.post('/login',userController.loginUser)
// logout 
router.post('/logout',userController.logoutUser)
//authentication 
router.post('/authenticate',userController.authenticate);

module.exports = router