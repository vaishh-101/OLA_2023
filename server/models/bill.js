
const mongoose = require('mongoose');

const billSchema = new mongoose.Schema({
  items: [
    {
      productName: { type: String, required: true },
      quantity: { type: Number, required: true },
      price: { type: Number, required: true },
    },
  ],
  totalAmount: { type: Number, required: true },
  customerName: { type: String, required: true },
  created_at: { type: Date, default: Date.now },
});

const Bill = mongoose.model('Bill', billSchema);

module.exports = Bill;
