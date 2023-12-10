import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import { Link, Outlet } from "react-router-dom";
import img1 from "../../Assets/2.png";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Hidden from "@mui/material/Hidden";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styled from "styled-components";
import Product from "../Product";

import { ShoppingCart } from "@mui/icons-material";
import ListItemIcon from "@mui/material/ListItemIcon";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import LogoutIcon from "@mui/icons-material/Logout";

const navBarStyles = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

const rightCornerStyles = {
  display: "flex",
  alignItems: "center",
};

const logoStyles = {
  width: "50px",
  height: "40px",
};

const dashboardStyle = {
  // backgroundColor: '#AB274F',
};

function Dashboard(props) {
  // const userName = "John Doe";
  const { counter } = props;

  let navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [menuAnchorEl, setMenuAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setMenuAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setMenuAnchorEl(null);
  };

  return (
    <>
      <div style={dashboardStyle}>
        <AppBar position="static">
          <Toolbar style={navBarStyles}>
            <Hidden mdUp>
              <IconButton
                color="inherit"
                aria-label="menu"
                onClick={handleMenuOpen}
              >
                <MenuIcon />
              </IconButton>
            </Hidden>
            <img src={img1} alt="Logo" style={logoStyles} />
            <div>
              <Hidden smDown>
                <Button component={Link} to="/dashboard/main" color="inherit">
                  Home
                </Button>
                <Button
                  component={Link}
                  to="/dashboard/product"
                  color="inherit"
                >
                  Product
                </Button>
                <Button
                  component={Link}
                  to="/dashboard/vetAppointment"
                  color="inherit"
                >
                  Consult a Vet
                </Button>
                <Button
                  component={Link}
                  to="/dashboard/contact"
                  color="inherit"
                >
                  Contact Us
                </Button>
                <Button component={Link} to="/dashboard/health" color="inherit">
                  HealthCare
                </Button>
              </Hidden>
            </div>
            <div style={rightCornerStyles}>
              <Hidden mdUp>
                <div style={{ marginLeft: "auto" }}>
                  <IconButton
                    color="inherit"
                    aria-label="menu"
                    onClick={handleMenuOpen}
                  ></IconButton>
                </div>
              </Hidden>
              {isLoggedIn ? (
                <>
                  <IconButton
                    component={Link}
                    to="/dashboard/cart"
                    color="inherit"
                    style={{ marginLeft: "20px" }}
                  >
                    <ShoppingCart />
                    {/* {counter > 0 && <span style={{ marginLeft: "8px" }}>{counter}</span>} */}
                    {counter > 0 && (
                      <span style={{ marginLeft: "8px" }}>{counter}</span>
                    )}
                  </IconButton>

                  <Avatar
                    style={{ marginLeft: "20px" }}
                    // alt={userName} 
                    src="/broken-image.jpg"
                  ></Avatar>
                  <ListItemIcon
                    style={{ marginLeft: "20px" }}
                    onClick={() => {
                      localStorage.clear();
                      Swal.fire({
                        title: "Logout!",
                        text: "You Logged out...👍",
                        icon: "success",
                      });

                      navigate("/login");
                    }}
                  >
                    <LogoutIcon />
                  </ListItemIcon>
                </>
              ) : (
                <Button component={Link} to="/login" color="inherit">
                  Log In
                </Button>
              )}
            </div>
          </Toolbar>

       
          <Menu
            anchorEl={menuAnchorEl}
            open={Boolean(menuAnchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem
              component={Link}
              to="/dashboard/main"
              onClick={handleMenuClose}
            >
              Home
            </MenuItem>
            <MenuItem
              component={Link}
              to="/dashboard/product"
              onClick={handleMenuClose}
            >
              Product
            </MenuItem>
            <MenuItem
              component={Link}
              to="/dashboard/vetAppointment"
              onClick={handleMenuClose}
            >
              Consult a Vet
            </MenuItem>
            <MenuItem
              component={Link}
              to="/dashboard/contact"
              onClick={handleMenuClose}
            >
              Contact Us
            </MenuItem>
            <MenuItem
              component={Link}
              to="/dashboard/health"
              onClick={handleMenuClose}
            >
              HealthCare
            </MenuItem>
          </Menu>
        </AppBar>
        <div>
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default Dashboard;
