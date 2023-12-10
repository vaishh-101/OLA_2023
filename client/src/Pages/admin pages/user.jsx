import React, { useState, useEffect } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';

function UserPage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/users');
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/api/users/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setUsers((prevUsers) => prevUsers.filter((user) => user._id !== id));
      } else {
        console.error('Error deleting user:', response.statusText);
      }
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  return (
    <div style={{ textAlign: 'center', overflowX: 'auto' }}>
      <h2>User Page</h2>
      <table style={{ borderCollapse: 'collapse', margin: 'auto', marginTop: '20px', width: '100%' }}>
        <thead>
          <tr>
            <th style={tableCellStyle}>ID</th>
            <th style={tableCellStyle}>Username</th>
            <th style={tableCellStyle}>Email</th>
            <th style={tableCellStyle}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td style={tableCellStyle}>{user._id}</td>
              <td style={tableCellStyle}>{user.fullname}</td>
              <td style={tableCellStyle}>{user.username}</td>
              <td style={tableCellStyle}>
                <DeleteIcon style={{ cursor: 'pointer' }} onClick={() => handleDelete(user._id)} />
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

export default UserPage;
