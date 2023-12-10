import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import './cart.css'
import { useNavigate } from "react-router-dom";



const Cart = ({ selectedProducts, onProductDelete, onProceed }) => {
  const navigate = useNavigate()
  const handleProductDelete = (productId) => {
    onProductDelete(productId);
  };

  const limitTitleLength = (title, limit) => {
    const words = title.split(" ");
    if (words.length > limit) {
      return words.slice(0, limit).join(" ") + " ...";
    }
    return title;
  };

  const totalPrice = selectedProducts.reduce((total, product) => total + parseFloat(product.price), 0).toFixed(2);

  const handleclick = () => {
    navigate('/dashboard/deliveryadd');
  };

  return (
    <div>
      <h1 style={{ textAlign: "center", color: "blueviolet" }}>
        Keep shopping
      </h1>
      <div className="cart-container">
        {selectedProducts &&
          selectedProducts.map((product1) => (
            <div
              key={product1.id}
              className="cart-item"
            >
              <Card
                style={{
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                }}
              >
                <img
                  src={product1.image}
                  alt={product1.title}
                  className="cart-image"
                />
                <CardContent style={{ flex: "1" }}>
                  <Typography variant="h6" component="div" className="cart-title">
                    {limitTitleLength(product1.title, 3)}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {parseFloat(product1.price).toFixed(2)}
                  </Typography>
                  <div className="cart-buttons">
                    <Button
                      variant="outlined"
                      color="error"
                      onClick={() => handleProductDelete(product1.id)}
                    >
                      Delete
                    </Button>
                    <Button variant="outlined" color="error">
                      Buy Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
      </div>
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <Typography variant="h6" component="div">
          Total Price: Rs. {totalPrice}
        </Typography>
        <Button variant="contained" color="primary" onClick={handleclick}>
          Proceed
        </Button>
      </div>
    </div>
  );
};

export default Cart;
