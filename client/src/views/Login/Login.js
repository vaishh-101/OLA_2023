import React, { useState } from 'react';
import './Login.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login submitted:', formData);
  };

  return (
    <>
    <Navbar />
      <div className="login-container">
        <form onSubmit={handleSubmit} className="login-form">
          <h2 className="form-title">Login</h2>

          <label className="label">
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="input-field"
              required
            />
          </label>

          <label className="label">
            Password:
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="input-field"
              required
            />
          </label>

          <button type="submit" className="button">
            Login
          </button>
        </form>   
      </div>
      <Footer />
  
    </>
  );
};

export default Login;
