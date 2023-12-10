const express = require('express');
const MedicineRoute = express.Router();
const Medicine = require('../models/med');

// Get all medicine
MedicineRoute.get('/', async (req, res) => {
  try {
    const medicine = await Medicine.find();
    res.json(medicine);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get a specific Medicine by ID
MedicineRoute.get('/:id', getMedicine, (req, res) => {
  res.json(res.Medicine);
});



// Create a new Medicine
MedicineRoute.post('/', async (req, res) => {
  try {
    const newMedicine = new Medicine({
      image: req.body.image,
      title: req.body.title,
      price: req.body.price,
    });

    const savedMedicine = await newMedicine.save();
    res.status(201).json(savedMedicine);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});


MedicineRoute.post('/bulkinsert', async (req, res) => {
    try {
      const medicine = req.body;
      await Medicine.insertMany(medicine);
      res.status(201).json({ message: 'medicine inserted successfully' });
    } catch (error) {
      console.error('Error inserting medicine:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

// Update a Medicine by ID
MedicineRoute.patch('/:id', getMedicine, async (req, res) => {
  if (req.body.image != null) {
    res.Medicine.image = req.body.image;
  }
  if (req.body.title != null) {
    res.Medicine.title = req.body.title;
  }
  if (req.body.price != null) {
    res.Medicine.price = req.body.price;
  }

  try {
    const updatedMedicine = await res.Medicine.save();
    res.json(updatedMedicine);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});


MedicineRoute.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const med = await Medicine.findOneAndDelete({ _id: id });
    
    if (!med) {
      return res.status(404).json({ error: 'Medicine not found' });
    }

    res.json({ message: 'Medicine deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


// Middleware to get a Medicine by ID
async function getMedicine(req, res, next) {
  try {
    const Medicine = await Medicine.findOne({ id: req.params.id });
    if (Medicine == null) {
      return res.status(404).json({ message: 'Medicine not found' });
    }
    res.Medicine = Medicine;
    next();
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

module.exports = MedicineRoute;
