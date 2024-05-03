// notificationModel.js

const mongoose = require('mongoose');

// Define the Notification schema
const notificationSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  message: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ['sent', 'delivered', 'read', 'completed'],
    default: 'sent'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Create Notification model from schema
const Notification = mongoose.model('Notification', notificationSchema);

module.exports = Notification;
