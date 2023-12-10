import React, { useState, useEffect } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Swal from 'sweetalert2'; 

function Medicine() {
  const [products, setProducts] = useState([]);
  const [isAdding, setIsAdding] = useState(false);
  const [newMedicine, setNewMedicine] = useState({
    title: '',
    price: '',
    image: '',
   
  });

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:5000/med');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/med/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setProducts((prevProducts) => prevProducts.filter((product) => product._id !== id));
      } else {
        console.error('Error deleting product:', response.statusText);
      }
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  const handleAddMedicine = async () => {
    try {
      const response = await fetch('http://localhost:5000/med', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newMedicine),
      });

      if (response.ok) {
        const data = await response.json();
        setProducts((prevProducts) => [...prevProducts, data]);
        setNewMedicine({
          title: '',
          price: '',
          image: '',
      
        });
        setIsAdding(false);

       
        Swal.fire({
          icon: 'success',
          title: 'Medicine Added!',
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        console.error('Error adding medicine:', response.statusText);
       
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Failed to add medicine. Please try again.',
        });
      }
    } catch (error) {
      console.error('Error adding medicine:', error);
     
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'An unexpected error occurred. Please try again.',
      });
    }
  };

  return (
    <div style={{ textAlign: 'center', overflowX: 'auto' }}>
      <h2>Product Page</h2>
      <Button
        variant="contained"
        color="primary"
        onClick={() => setIsAdding(true)}
        style={{ marginBottom: '20px' }}
      >
        <AddCircleIcon style={{ marginRight: '8px' }} />
        Add Medicine
      </Button>

      {isAdding && (
        <Card style={{ maxWidth: '400px', margin: 'auto', marginBottom: '20px' }}>
          <CardContent>
            <TextField
              label="Title"
              fullWidth
              margin="normal"
              value={newMedicine.title}
              onChange={(e) => setNewMedicine({ ...newMedicine, title: e.target.value })}
            />
            <TextField
              label="Price"
              fullWidth
              margin="normal"
              value={newMedicine.price}
              onChange={(e) => setNewMedicine({ ...newMedicine, price: e.target.value })}
            />
            <TextField
              label="Image URL"
              fullWidth
              margin="normal"
              value={newMedicine.image}
              onChange={(e) => setNewMedicine({ ...newMedicine, image: e.target.value })}
            />
            

            <Button variant="contained" color="primary" onClick={handleAddMedicine}>
              Add Medicine
            </Button>
          </CardContent>
        </Card>
      )}

      <table style={{ borderCollapse: 'collapse', margin: 'auto', width: '100%' }}>
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

export default Medicine;
