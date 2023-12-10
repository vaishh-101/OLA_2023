const express = require('express');
const ContactRouter = express.Router();
const Contact = require('../models/ContactUs');

// Get all contact records
ContactRouter.get('/contacts', async (req, res) => {
  try {
    const contactRecords = await Contact.find();
    res.json(contactRecords);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Create a new contact record
ContactRouter.post('/contacts', async (req, res) => {
  try {
    const { fullname, email, message } = req.body;
    const newContactRecord = new Contact({ fullname, email, message });
    const savedContactRecord = await newContactRecord.save();
    res.status(201).json(savedContactRecord);
  } catch (error) {
    res.status(400).json({ error: 'Bad request' });
  }
});

module.exports = ContactRouter;
