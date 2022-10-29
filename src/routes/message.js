const express = require('express');

const Message = require('../models/Messages');
const sendSms = require('../helper/sendOtp');
const routes = express.Router();

routes.post('/sendOtp', async (req, res) => {
  const { message, contactNumber } = req.body || {};
  try {
    const messageContent = new Message(req.body);
    await messageContent.save();
    const smsResponse = await sendSms(contactNumber,message);
    res.send(smsResponse);
  } catch (error) {
    res.send(error);
  }
});

routes.get('/messages', async(req, res) => {
  try{
    const response = await Message.find({}).sort({ createdAt: -1 }).limit(10);
    res.send(response);
  } catch (error) {
    res.send(error);
  }
});

routes.post('/add-message', async (req, res) => {
  console.log(req.body);
  try {
    const messageContent = new Message(req.body);
    await messageContent.save();
    res.send(messageContent);
  } catch (error) {
    res.send(error);
  }
});

module.exports = routes;