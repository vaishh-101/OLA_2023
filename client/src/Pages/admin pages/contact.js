import React, { useState, useEffect } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Swal from 'sweetalert2';

function ContactPage() {
  const [contacts, setContacts] = useState([]);
  const [isAdding, setIsAdding] = useState(false);
  const [newContact, setNewContact] = useState({
    fullName: '',
    mobileNumber: '',
    email: '',
  });

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await fetch('http://localhost:5000/contacts');
        const data = await response.json();
        setContacts(data);
      } catch (error) {
        console.error('Error fetching contacts:', error);
      }
    };

    fetchContacts();
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/contacts/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setContacts((prevContacts) => prevContacts.filter((contact) => contact._id !== id));
      } else {
        console.error('Error deleting contact:', response.statusText);
      }
    } catch (error) {
      console.error('Error deleting contact:', error);
    }
  };

  const handleAddContact = async () => {
    try {
      const response = await fetch('http://localhost:5000/contacts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newContact),
      });

      if (response.ok) {
        const data = await response.json();
        setContacts((prevContacts) => [...prevContacts, data]);
        setNewContact({
          fullName: '',
          mobileNumber: '',
          email: '',
        });
        setIsAdding(false);

        Swal.fire({
          icon: 'success',
          title: 'Contact Added!',
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        console.error('Error adding contact:', response.statusText);

        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Failed to add contact. Please try again.',
        });
      }
    } catch (error) {
      console.error('Error adding contact:', error);

      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'An unexpected error occurred. Please try again.',
      });
    }
  };

  return (
    <div style={{ textAlign: 'center', overflowX: 'auto' }}>
      <h2>Contact Page</h2>
      <Button
        variant="contained"
        color="primary"
        onClick={() => setIsAdding(true)}
        style={{ marginBottom: '20px' }}
      >
        <AddCircleIcon style={{ marginRight: '8px' }} />
        Add Contact
      </Button>

      {isAdding && (
        <Card style={{ maxWidth: '400px', margin: 'auto', marginBottom: '20px' }}>
          <CardContent>
            <TextField
              label="Full Name"
              fullWidth
              margin="normal"
              value={newContact.fullName}
              onChange={(e) => setNewContact({ ...newContact, fullName: e.target.value })}
            />
            <TextField
              label="Mobile Number"
              fullWidth
              margin="normal"
              value={newContact.mobileNumber}
              onChange={(e) => setNewContact({ ...newContact, mobileNumber: e.target.value })}
            />
            <TextField
              label="Email"
              fullWidth
              margin="normal"
              value={newContact.email}
              onChange={(e) => setNewContact({ ...newContact, email: e.target.value })}
            />

            <Button variant="contained" color="primary" onClick={handleAddContact}>
              Add Contact
            </Button>
          </CardContent>
        </Card>
      )}

      <table style={{ borderCollapse: 'collapse', margin: 'auto', width: '100%' }}>
        <thead>
          <tr>
            <th style={tableCellStyle}>ID</th>
            <th style={tableCellStyle}>Full Name</th>
            <th style={tableCellStyle}>Mobile Number</th>
            <th style={tableCellStyle}>Email</th>
            <th style={tableCellStyle}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <tr key={contact._id}>
              <td style={tableCellStyle}>{contact._id}</td>
              <td style={tableCellStyle}>{contact.fullName}</td>
              <td style={tableCellStyle}>{contact.mobileNumber}</td>
              <td style={tableCellStyle}>{contact.email}</td>
              <td style={tableCellStyle}>
                <DeleteIcon style={{ cursor: 'pointer' }} onClick={() => handleDelete(contact._id)} />
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

export default ContactPage;
