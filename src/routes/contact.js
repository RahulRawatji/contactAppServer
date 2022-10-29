const express = require('express');

const Contact = require('../models/Contacts');

const routes = express.Router();

routes.get('/contact', async (req, res) => {
  try{
    const contactData = await Contact.find({}).sort({createdAt: -1});
    res.json(contactData);
  } catch (error) {
    res.setEncoding(error);
  }

});

routes.get('/details/:id', async (req, res) => {
  const{id: _id} = req.params;
  
  try {
    const data = await Contact.findOne({_id});
    res.send(data);
  } catch (error) {
    res.send(error);
  }
});

routes.post('/add-contact', async (req, res) => {
  const payload = req.body;
  try {
    const contact = new Contact(payload);
    const repsone = await contact.save();
    res.send(repsone);
  } catch (error) {
    res.send(error)
  } 
})

module.exports = routes;
