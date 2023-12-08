import React, { useEffect, useState } from 'react';
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  const [user, setUser] = useState({});

  useEffect(() => {
    const storageUser = JSON.parse(localStorage.getItem("user") || '{}');
    setUser(storageUser);
  }, [])

  return (
    <div className="navbar">
      <Link to="/" className="navbar-title">
      ola-uber
      </Link>

      <div className='navbar-links-container'>
        <Link to="/login" className="navbar-link">
          Login
        </Link>
        <Link to="/signup" className="navbar-link">
          Signup
        </Link>
      </div>
    </div>
  )
}

export default Navbar;