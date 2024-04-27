const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ['seen', 'not seen'],
    default: 'not seen',
  },
});

const Notification = mongoose.model('Notification', notificationSchema);

module.exports = Notification;