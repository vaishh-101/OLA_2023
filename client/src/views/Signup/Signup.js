import React, { useState } from 'react';
import './Signup.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';



const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
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
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <>
    <Navbar />
    <div className="signup-container">
      <form onSubmit={handleSubmit} className="signup-form">
        <h2 className="form-title">Sign Up</h2>

        <label className="label">
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="input-field"
            required
          />
        </label>

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
          Number:
          <input
            type="tel"
            name="mobile"
            value={formData.mobile}
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
          Sign Up
        </button>
      </form>
    </div>
    <Footer />
    </>
  );
};

export default Signup;
