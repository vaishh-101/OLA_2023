const express = require('express');
const ProductRouter = express.Router();
const Product = require('../models/Product');

// Get all products
ProductRouter.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get a specific product by ID
ProductRouter.get('/:id', getProduct, (req, res) => {
  res.json(res.product);
});



// Create a new product
ProductRouter.post('/', async (req, res) => {
  const product = new Product({
    id: req.body.id,
    image: req.body.image,
    title: req.body.title,
    price: req.body.price,
  });

  try {
    const newProduct = await product.save();
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

ProductRouter.post('/bulkinsert', async (req, res) => {
    try {
      const products = req.body;
      await Product.insertMany(products);
      res.status(201).json({ message: 'Products inserted successfully' });
    } catch (error) {
      console.error('Error inserting products:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

// Update a product by ID
ProductRouter.patch('/:id', getProduct, async (req, res) => {
  if (req.body.image != null) {
    res.product.image = req.body.image;
  }
  if (req.body.title != null) {
    res.product.title = req.body.title;
  }
  if (req.body.price != null) {
    res.product.price = req.body.price;
  }

  try {
    const updatedProduct = await res.product.save();
    res.json(updatedProduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});



ProductRouter.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const product = await Product.findOneAndDelete({ _id: id });

    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }

    res.json({ message: 'Product deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Middleware to get a product by ID
async function getProduct(req, res, next) {
  try {
    const product = await Product.findOne({ id: req.params.id });
    if (product == null) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.product = product;
    next();
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

module.exports = ProductRouter;
