const express = require('express');
const router = express.Router();
const notificationController = require('../controllers/notificationController');

// Route to create a new notification
router.post('/', notificationController.createNotification);

// Route to get all notifications for a user
router.get('/:userId', notificationController.getNotificationsByUser);

// Route to update notification status
router.put('/:notificationId', notificationController.updateNotificationStatus);


module.exports = router;