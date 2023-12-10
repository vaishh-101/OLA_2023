const express = require('express');
const UserRoute = express.Router();
const User = require('../models/User'); // Import your User model

// Get all users
UserRoute.get('/users', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Create a new user
UserRoute.post('/users', async (req, res) => {
  try {
    const { fullname, username, password } = req.body;
    const user = new User({ fullname, username, password });
    const savedUser = await user.save();
    res.json(savedUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Update a user by ID
UserRoute.patch('/users/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { fullname, username, password } = req.body;

    const user = await User.findByIdAndUpdate(id, { fullname, username, password }, { new: true });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Delete a user by ID
UserRoute.delete('/users/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.findOneAndDelete({ _id: id });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = UserRoute;
