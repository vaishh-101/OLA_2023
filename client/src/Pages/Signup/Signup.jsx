import React, { useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from 'react-router-dom';
import HomeImg from '../../Assets/Homepage.jpg';
import axios from 'axios';

function Signup() {
  const centerStyle = {
    display: 'flex',
    flexDirection: 'column', // Change to column layout for responsiveness
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  };

  const inputStyle = {
    width: "100%",
    padding: "10px",
    fontSize: "19px",
    border: "none",
    borderRadius: "8px",
textAlign: "center"
  };

  const textContainerStyle = {
    marginTop: '20px', // Use margin-top instead of marginLeft for spacing
    textAlign: 'center',
  };

  const buttonStyle = {
    margin: '10px',
    padding: '10px 20px',
    backgroundColor: '#704214',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  const textSpacing = {
    margin: '0',
    padding: '5px 0',
  };

  const navigate = useNavigate();

  const redirectToHomePage = () => {
    navigate('/');
  };

  const [fullname, setfullname] = useState("")
  const [username, setusername] = useState("");
  const [password, setPassword] = useState("");
  const handleSignup = () => {
   
    const user = {
      fullname,
      username,
      password,
    };

    // Make a POST request to create a new user
    axios.post('http://localhost:5000/api/users', user)
      .then(response => {
        // Handle the success response
        Swal.fire({
          title: "Success!",
          text: "Signup Success🤗...",
          icon: "success",
        });
        navigate("/login");
      })
      .catch(error => {
        // Handle any errors in the response
        Swal.fire({
          title: "Error!",
          text: "Signup Failed...😭",
          icon: "error",
          confirmButtonText: "Try Again",
        });
      });
  };



  return (
    <div
    style={{
      backgroundImage: `url(${HomeImg})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
    }}
  >
   
      <div style={centerStyle}>
        <div style={textContainerStyle}>
          <h4 style={{ fontSize: '40px', fontFamily: 'Harrington', ...textSpacing }}>
            Signup to VILLA
            <br /><br/>
          </h4>
          <div>
          <div>
          <input
            style={inputStyle}
            type="text"
            placeholder="Fullname"
            value={fullname}
            onChange={(e) => setfullname(e.target.value)}
          />
          <br />
          <br />
          <input
            style={inputStyle}
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setusername(e.target.value)}
          />
          <br />
          <br />
          <input
            style={inputStyle}
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <br />
          <div style={{ textAlign: "center" }}>
            <button
              style={{
              width: "20vh",
                padding: "10px",
                backgroundColor: "#3D0C02",
                borderRadius: "10px",
                color: "white",
              }}
              onClick={handleSignup}
            >
              Submit
            </button>
          </div>
        </div>
          </div>
          <button style={buttonStyle} onClick={redirectToHomePage}>
            Back to Home
          </button>
        </div>
      </div>
    </div>
  
  );
}

export default Signup;
