const Payment = require('../models/Payment');

const paymentController = {
  createPayment: async (req, res) => {
    
    try {
    const alreadyCompleted = await Payment.find({course_id:req.body.course_id, user:req.body.user})
    
    if(alreadyCompleted.length>0)  return res.json({message : 'already purchased'})



    const newPayment = new Payment(req.body);
      const savedPayment = await newPayment.save();
      res.status(200).json({payment :savedPayment});
    } catch (err) {
      res.status(500).json({error : 'error'});
    }
  },

  getAllPayments: async (req, res) => {
     
    try {
      const payments = await Payment.find();
      res.status(200).json({payment : payments});
    } catch (err) {
      res.status(500).json({error : err});
    }
  },

  getPaymentById: async (req, res) => {
    try {
      const payment = await Payment.findById(req.params.id);
      res.status(200).json(payment);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  updatePayment: async (req, res) => {
    try {
      const updatedPayment = await Payment.findByIdAndUpdate(req.params.id);
      if(!updatedPayment) return res.json({error : 'payment does not exit'})
      const updateStatus = req.body.status
      updatedPayment.status = updateStatus
      await updatedPayment.save()
      res.status(200).json({payment :updatedPayment});
    } catch (err) {
      res.status(500).json({error : err});
    }
  },

  deletePayment: async (req, res) => {
    try {
      await Payment.findByIdAndDelete(req.params.id);
      res.status(200).json("Payment has been deleted...");
    } catch (err) {
      res.status(500).json(err);
    }
  }
};

module.exports = paymentController;