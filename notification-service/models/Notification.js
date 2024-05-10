const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema({
  date: {
    type: Date,
     
  },
  title: {
    type: String,
     
  },
  description: {
    type: String,
    
  },
  receiverName : {

    type: String

  },
  receiverMail : {

    type: String

  }
  // status: {
  //   type: String,
  //   enum: ['seen', 'not seen'],
  //   default: 'not seen',
  // },
});

const Notification = mongoose.model('Notification', notificationSchema);

module.exports = Notification;