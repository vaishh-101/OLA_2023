import React, { useState, useEffect } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Swal from 'sweetalert2';

function AddressPage() {
  const [addresses, setAddresses] = useState([]);
  const [isAdding, setIsAdding] = useState(false);
  const [newAddress, setNewAddress] = useState({
    fullName: '',
    mobileNumber: '',
    addressLine: '',
    area: '',
    pincode: '',
    state: '',
  });

  useEffect(() => {
    const fetchAddresses = async () => {
      try {
        const response = await fetch('http://localhost:5000/del/delivery');
        const data = await response.json();
        setAddresses(data);
      } catch (error) {
        console.error('Error fetching addresses:', error);
      }
    };

    fetchAddresses();
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/del/delivery/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setAddresses((prevAddresses) => prevAddresses.filter((address) => address._id !== id));
      } else {
        console.error('Error deleting address:', response.statusText);
      }
    } catch (error) {
      console.error('Error deleting address:', error);
    }
  };

  const handleAddAddress = async () => {
    try {
      const response = await fetch('http://localhost:5000/del/delivery', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newAddress),
      });

      if (response.ok) {
        const data = await response.json();
        setAddresses((prevAddresses) => [...prevAddresses, data]);
        setNewAddress({
          fullName: '',
          mobileNumber: '',
          addressLine: '',
        });
        setIsAdding(false);

        Swal.fire({
          icon: 'success',
          title: 'Address Added!',
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        console.error('Error adding address:', response.statusText);

        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Failed to add address. Please try again.',
        });
      }
    } catch (error) {
      console.error('Error adding address:', error);

      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'An unexpected error occurred. Please try again.',
      });
    }
  };

  return (
    <div style={{ textAlign: 'center', overflowX: 'auto' }}>
      <h2>Address Page</h2>
      <Button
        variant="contained"
        color="primary"
        onClick={() => setIsAdding(true)}
        style={{ marginBottom: '20px' }}
      >
        <AddCircleIcon style={{ marginRight: '8px' }} />
        Add Address
      </Button>

      {isAdding && (
        <Card style={{ maxWidth: '400px', margin: 'auto', marginBottom: '20px' }}>
          <CardContent>
            <TextField
              label="fullName"
              fullWidth
              margin="normal"
              value={newAddress.fullName}
              onChange={(e) => setNewAddress({ ...newAddress, fullName: e.target.value })}
            />
            <TextField
              label="mobileNumber"
              fullWidth
              margin="normal"
              value={newAddress.mobileNumber}
              onChange={(e) => setNewAddress({ ...newAddress, mobileNumber: e.target.value })}
            />
            <TextField
              label="addressLine"
              fullWidth
              margin="normal"
              value={newAddress.addressLine}
              onChange={(e) => setNewAddress({ ...newAddress, addressLine: e.target.value })}
            />
             <TextField
              label="area"
              fullWidth
              margin="normal"
              value={newAddress.area}
              onChange={(e) => setNewAddress({ ...newAddress, area: e.target.value })}
            />
             <TextField
              label="pincode"
              fullWidth
              margin="normal"
              value={newAddress.pincode}
              onChange={(e) => setNewAddress({ ...newAddress, pincode: e.target.value })}
            />
             <TextField
              label="state"
              fullWidth
              margin="normal"
              value={newAddress.state}
              onChange={(e) => setNewAddress({ ...newAddress, state: e.target.value })}
            />

            <Button variant="contained" color="primary" onClick={handleAddAddress}>
              Add Address
            </Button>
          </CardContent>
        </Card>
      )}

      <table style={{ borderCollapse: 'collapse', margin: 'auto', width: '100%' }}>
        <thead>
          <tr>
            <th style={tableCellStyle}>ID</th>
            <th style={tableCellStyle}>fullName</th>
            <th style={tableCellStyle}>mobileNumber</th>
            <th style={tableCellStyle}>addressLine</th>
            <th style={tableCellStyle}>area</th>
            <th style={tableCellStyle}>pincode</th>
            <th style={tableCellStyle}>state</th>
            <th style={tableCellStyle}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {addresses.map((address) => (
            <tr key={address._id}>
              <td style={tableCellStyle}>{address._id}</td>
              <td style={tableCellStyle}>{address.fullName}</td>
              <td style={tableCellStyle}>{address.mobileNumber}</td>
              <td style={tableCellStyle}>{address.addressLine}</td>
              <td style={tableCellStyle}>{address.area}</td>
              <td style={tableCellStyle}>{address.pincode}</td>
              <td style={tableCellStyle}>{address.state}</td>
              <td style={tableCellStyle}>
                <DeleteIcon style={{ cursor: 'pointer' }} onClick={() => handleDelete(address._id)} />
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

export default AddressPage;
