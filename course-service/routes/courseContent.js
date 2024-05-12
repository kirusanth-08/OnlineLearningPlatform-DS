// Import the necessary modules and controller
const express = require('express');
const courseContentController = require('../controllers/courseContentController');

const router = express.Router();

// Create a new course content entry
router.post('/create/:courseId', courseContentController.createCourseContent);

// Update an existing course content entry
// router.put('/update/:id', courseContentController.updateCourseContent);

// View a specific course content entry by its ID
router.get('/view/:id', courseContentController.viewCourseContent);

// Delete a specific course content entry by its ID
router.delete('/delete/:id', courseContentController.deleteCourseContent);

// View all course content entries
router.get('/all', courseContentController.viewAllCourseContent);

// Export the router so it can be used in the main app file
module.exports = router;
