const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({

  image: String,
  title: String,
  price: String,
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
