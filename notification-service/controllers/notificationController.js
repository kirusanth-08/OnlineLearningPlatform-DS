const Notification = require('../models/Notification');

// Controller functions
module.exports = {
  // Create a new notification
  createNotification: async (req, res) => {
    try {
      const { userId, message, type } = req.body;

      // Create a new notification
      const notification = new Notification({
        userId,
        message,
        type,
        status: 'sent', // Initial status
      });

      // Save the notification to the database
      await notification.save();

      res.status(201).json({ success: true, notification });
    } catch (error) {
      console.error('Error creating notification:', error);
      res.status(500).json({ success: false, error: 'Internal server error' });
    }
  },

  // Get all notifications for a user
  getNotificationsByUser: async (req, res) => {
    try {
      const { userId } = req.params;

      // Find notifications by userId
      const notifications = await Notification.find({ userId });

      res.status(200).json({ success: true, notifications });
    } catch (error) {
      console.error('Error fetching notifications:', error);
      res.status(500).json({ success: false, error: 'Internal server error' });
    }
  },

  // Update notification status
  updateNotificationStatus: async (req, res) => {
    try {
      const { notificationId } = req.params;
      const { status } = req.body;

      // Find the notification by ID and update its status
      const notification = await Notification.findByIdAndUpdate(
        notificationId,
        { status },
        { new: true }
      );

      if (!notification) {
        return res.status(404).json({ success: false, error: 'Notification not found' });
      }

      res.status(200).json({ success: true, notification });
    } catch (error) {
      console.error('Error updating notification status:', error);
      res.status(500).json({ success: false, error: 'Internal server error' });
    }
  }
};
