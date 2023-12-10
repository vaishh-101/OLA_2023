import React, { useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from 'react-router-dom';
import HomeImg from '../../Assets/Homepage.jpg';
import axios from 'axios';

function Login() {
  const centerStyle = {
    display: 'flex',
    flexDirection: 'column', 
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
    marginTop: '20px', 
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

  
  const [username, setusername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
 
    const user = {
      username,
      password,
    };

    if (user.username.toLowerCase() === "admin" && user.password.toLowerCase() === "admin") {
      navigate("/admin/hom");
      return;
    }

    axios.get(`http://localhost:5000/api/users?username=${user.username}&password=${user.password}`)
      .then(response => {
       
        if (response.data.length > 0) {
          localStorage.setItem("username", user.username);
          localStorage.setItem("fullName", response.data[0].fullname); 
          Swal.fire({
            title: "Success!",
            text: "Login Success🤗...",
            icon: "success",
          });
          navigate("/dashboard/main");
        } else {

          Swal.fire({
            title: "Error!",
            text: "Login Failed...😭",
            icon: "error",
            confirmButtonText: "Try Again",
          });
        }
      })
      .catch(error => {
       
        Swal.fire({
          title: "Error!",
          text: "Login Failed...😭",
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
            Login to VILLA
            <br /><br/>
          </h4>
          <div>
          <div>
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
              onClick={handleLogin}
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

export default Login;
