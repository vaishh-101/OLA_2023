const mongoose = require('mongoose');

const MedicineSchema = new mongoose.Schema({

  image: String,
  title: String,
  price: String,
});

const Medicine = mongoose.model('Medicine', MedicineSchema);

module.exports = Medicine;
