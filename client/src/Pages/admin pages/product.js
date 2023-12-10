import React, { useState, useEffect } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

function ProductPage() {
  const [products, setProducts] = useState([]);
  const [isAdding, setIsAdding] = useState(false);
  const [newProduct, setNewProduct] = useState({
    title: '',
    price: '',
    image: '',
    // Add other fields as needed
  });

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

  const handleDelete = async (id) => {
    console.log('Deleting product with ID:', id);

    try {
      const response = await fetch(`http://localhost:5000/product/${id}`, {
        method: 'DELETE',
      });

      console.log('Delete response:', response);

      if (response.ok) {
        setProducts((prevProducts) => prevProducts.filter((product) => product._id !== id));
      } else {
        console.error('Error deleting product:', response.statusText);
      }
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  const handleAddProduct = async () => {
    try {
      const response = await fetch('http://localhost:5000/product', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newProduct),
      });

      if (response.ok) {
        const data = await response.json();
        setProducts((prevProducts) => [...prevProducts, data]);
        setNewProduct({
          title: '',
          price: '',
          image: '',
          // Reset other fields as needed
        });
        setIsAdding(false);
      } else {
        console.error('Error adding product:', response.statusText);
      }
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  return (
    <div style={{ textAlign: 'center', overflowX: 'auto' }}>
      <h2>Product Page</h2>
      
      {/* Button to add a new product */}
      <Button
        variant="contained"
        color="primary"
        onClick={() => setIsAdding(true)}
        style={{ marginBottom: '20px' }}
      >
        Add Product
      </Button>

      {isAdding && (
        <Card style={{ maxWidth: '400px', margin: 'auto', marginBottom: '20px' }}>
          <CardContent>
            <TextField
              label="Title"
              fullWidth
              margin="normal"
              value={newProduct.title}
              onChange={(e) => setNewProduct({ ...newProduct, title: e.target.value })}
            />
            <TextField
              label="Price"
              fullWidth
              margin="normal"
              value={newProduct.price}
              onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
            />
            <TextField
              label="Image URL"
              fullWidth
              margin="normal"
              value={newProduct.image}
              onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
            />
            {/* Add other fields as needed */}

            <Button variant="contained" color="primary" onClick={handleAddProduct}>
              Add Product
            </Button>
          </CardContent>
        </Card>
      )}

      <table style={{ borderCollapse: 'collapse', margin: 'auto', marginTop: '20px', width: '100%' }}>
        <thead>
          <tr>
            <th style={tableCellStyle}>ID</th>
            <th style={tableCellStyle}>Image</th>
            <th style={tableCellStyle}>Title</th>
            <th style={tableCellStyle}>Price</th>
            <th style={tableCellStyle}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product._id}>
              <td style={tableCellStyle}>{product._id}</td>
              <td style={tableCellStyle}>
                <img src={product.image} alt={`Product ${product._id}`} style={{ maxWidth: '50px' }} />
              </td>
              <td style={tableCellStyle}>{product.title}</td>
              <td style={tableCellStyle}>{product.price}</td>
              <td style={tableCellStyle}>
                <DeleteIcon style={{ cursor: 'pointer' }} onClick={() => handleDelete(product._id)} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const tableCellStyle = {
  border: '1px solid #ddd',
  padding: '8px',
};

export default ProductPage;
