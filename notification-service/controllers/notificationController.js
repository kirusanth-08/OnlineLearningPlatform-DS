const Notification = require('../models/Notification');
 
const notificationController = {
  createNotification : async (req, res) => {
    //  res.send('notified')
    try{
       const notification = new Notification({
        date: req.body.date,
        title: req.body.title,
        description: req.body.description,
        receiverName : req.body.receiverName,
        receiverMail : req.body.receiverMail 
       })
  
      const newNotification = await notification.save();
      res.status(201).json({message : newNotification});
    } catch (err) {
      res.status(400).json({ error: err });
    }
  }
}
module.exports = notificationController


 