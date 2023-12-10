// routes/bill.js
const express = require('express');
const router = express.Router();
const Bill = require('../models/bill');

// Save a new bill
router.post('/bills', async (req, res) => {
  try {
    const newBill = await Bill.create(req.body);
    res.status(201).json(newBill);
  } catch (error) {
    res.status(500).json({ error: 'Error creating a new bill' });
  }
});

// Get all bills
router.get('/bills', async (req, res) => {
  try {
    const bills = await Bill.find();
    res.status(200).json(bills);
  } catch (error) {
    res.status(500).json({ error: 'Error retrieving bills' });
  }
});

// Get a specific bill by ID
router.get('/bills/:id', async (req, res) => {
  try {
    const bill = await Bill.findById(req.params.id);
    if (!bill) {
      return res.status(404).json({ error: 'Bill not found' });
    }
    res.status(200).json(bill);
  } catch (error) {
    res.status(500).json({ error: 'Error retrieving the bill' });
  }
});

// Add more routes as needed (update, delete, etc.)

module.exports = router;
