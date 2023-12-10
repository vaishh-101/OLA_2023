import React, { useState, useEffect } from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

const Product = (props) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [products, setProducts] = useState([]);
  const [selectedProductCount, setSelectedProductCount] = useState(0);
  const { incrementCounter, selectedProducts, setSelectedProducts } = props;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:5000/product');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredProducts = products.filter((product) => {
    return product.title.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const searchBarStyle = {
    marginTop: '20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '20px',
  };

  const inputStyle = {
    width: '300px',
    fontSize: '24px',
    border: '1px solid black',
    borderRadius: '5px',
    padding: '10px',
  };

  const handleAddToCart = (product) => {
    const extractPrice = (price) => {
      if (typeof price === 'string') {
        const matches = price.match(/₹([\d,]+)/);
        if (matches) {
          return parseFloat(matches[1].replace(/,/g, ''));
        }
      }
      return 0;
    };

    const price = extractPrice(product.price);

    setSelectedProducts((prevSelectedProducts) => [
      ...prevSelectedProducts,
      { ...product, price: price },
    ]);
    setSelectedProductCount(selectedProductCount + 1);
    incrementCounter();
  };

  return (
    <>
      <div style={searchBarStyle}>
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={handleSearch}
          style={inputStyle}
        />
      </div>
      <Grid container spacing={2} marginTop={2}>
        {filteredProducts.map((product) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
            <Paper
              style={{
                padding: 16,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <img
                src={product.image}
                alt={product.title}
                style={{ width: '80%', height: 'auto', marginBottom: '8px' }}
              />
              <Typography variant="h6" style={{ flex: 1, textAlign: 'center' }}>
                {product.title}
              </Typography>
              <Typography
                variant="body2"
                style={{
                  color: 'black',
                  textAlign: 'center',
                  fontSize: '20px',
                }}
              >
                {product.price}
              </Typography>
              <Button
                variant="contained"
                color="primary"
                style={{ marginTop: '8px', width: '80%' }}
                onClick={() => handleAddToCart(product)}
              >
                Add to Cart
              </Button>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Product;
