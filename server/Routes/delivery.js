const express = require('express');
const DeliveryRoute = express.Router();
const DeliveryAddress = require('../models/delivery');

// Save a new delivery address
DeliveryRoute.post('/delivery', async (req, res) => {
  const { fullName, mobileNumber, addressLine, area, pincode, state, makeDefaultAddress } = req.body;
  
  try {
    const deliveryAddress = new DeliveryAddress({
      fullName,
      mobileNumber,
      addressLine,
      area,
      pincode,
      state,
      makeDefaultAddress,
    });
    await deliveryAddress.save();
    res.status(201).json(deliveryAddress);
  } catch (error) {
    res.status(500).json({ error: 'Could not save delivery address' });
  }
});

// Retrieve saved delivery addresses
DeliveryRoute.get('/delivery', async (req, res) => {
  try {
    const deliveryAddresses = await DeliveryAddress.find();
    res.json(deliveryAddresses);
  } catch (error) {
    res.status(500).json({ error: 'Could not retrieve delivery addresses' });
  }
});

// Update a delivery address by ID
DeliveryRoute.put('/delivery/:id', async (req, res) => {
    const { fullName, mobileNumber, addressLine, area, pincode, state, makeDefaultAddress } = req.body;
    const deliveryId = req.params.id;
  
    try {
      const updatedDeliveryAddress = await DeliveryAddress.findByIdAndUpdate(
        deliveryId,
        {
          fullName,
          mobileNumber,
          addressLine,
          area,
          pincode,
          state,
          makeDefaultAddress,
        },
        { new: true } // Return the updated document
      );
  
      if (!updatedDeliveryAddress) {
        return res.status(404).json({ error: 'Delivery address not found' });
      }
  
      res.json(updatedDeliveryAddress);
    } catch (error) {
      res.status(500).json({ error: 'Could not update delivery address' });
    }
  });
  
  // Delete a delivery address by ID
  DeliveryRoute.delete('/delivery/:id', async (req, res) => {
    const deliveryId = req.params.id;
  
    try {
      const deletedDeliveryAddress = await DeliveryAddress.findByIdAndDelete(deliveryId);
  
      if (!deletedDeliveryAddress) {
        return res.status(404).json({ error: 'Delivery address not found' });
      }
  
      res.json({ message: 'Delivery address deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Could not delete delivery address' });
    }
  });

module.exports = DeliveryRoute;
