const Notification = require('../models/Notification');

exports.getNotifications = async (req, res) => {
  try {
    const notifications = await Notification.find();
    res.status(200).json(notifications);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getNotification = async (req, res) => {
  try {
    const notification = await Notification.findById(req.params.id);
    if (notification == null) {
      return res.status(404).json({ message: 'Cannot find notification' });
    }
    res.status(200).json(notification);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createNotification = async (req, res) => {
  const notification = new Notification({
    date: req.body.date,
    title: req.body.title,
    description: req.body.description,
    status: req.body.status,
  });

  try {
    const newNotification = await notification.save();
    res.status(201).json(newNotification);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.updateNotification = async (req, res) => {
  try {
    const updatedNotification = await Notification.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updatedNotification);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deleteNotification = async (req, res) => {
  try {
    await Notification.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Notification deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};