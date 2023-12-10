import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import TextField from '@mui/material/TextField';
import image from '../../Assets/image.PNG';
import Button from '@mui/material/Button'; 
import { useNavigate } from 'react-router-dom';
import selectedProducts from '../Product'

const centerContentStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '110vh',
  padding: "15px",
};

const centerImageStyle = {
  display: 'block',
  margin: '0 auto', 
  maxWidth: '100%', 
  height: 'auto',
};

const formstyle= {
  padding: "20px",
}

const buttonStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: '20px',
}

function Payment(props) {
  const selectedProducts = props.selectedProducts;
  const location = useLocation();
  const navigate = useNavigate();
  const selectedAddress = location.state.selectedAddress;
  const selectedPay = location.state.selectedPay;
  const [paymentMethod, setPaymentMethod] = useState('');


const handleUsePaymentMethod = () => {

  console.log('Payment method used:', paymentMethod);


  if (selectedAddress) {
    navigate('/dashboard/bill', {
      state: {
        selectedAddress,
        paymentMethod,
        selectedPay: 'Your selectedPay data here', 
        selectedProducts,
      },
    });
  }
 
  else {
    console.error('selectedAddress is not available.');
  }
};


  return (
    <>
      <div style={centerContentStyle}>
        <Card>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              Select Payment Method
            </Typography>
            {selectedAddress && (
              <div>
                <h2>Selected Address</h2>
                <p>Full Name: {selectedAddress.fullName}</p>
                <p>
                  Address: {selectedAddress.addressLine}, {selectedAddress.area}, {selectedAddress.state}, {selectedAddress.pincode}
                </p>
              </div>
            )}
            <FormControl component="fieldset" style={formstyle}>
              <RadioGroup
                aria-label="payment-method"
                name="payment-method"
                value={paymentMethod}
                onChange={(e) => setPaymentMethod(e.target.value)}
              >
                <FormControlLabel value="online" control={<Radio />} label="Online Payment" />
                <FormControlLabel value="cash" control={<Radio />} label="Cash on Delivery" />
                <FormControlLabel value="credit-card" control={<Radio />} label="Credit Card" />
              </RadioGroup>
            </FormControl>
            {paymentMethod === 'online' && (
              <div>
                <h2>Online Payment</h2>
                <p>Scan the QR code to make the payment.</p>
                <img src={image} alt="QR Code" style={centerImageStyle} />
              </div>
            )}
            {paymentMethod === 'credit-card' && (
              <div>
                <h2>Credit Card Payment</h2>
                <TextField label="Enter Credit Card Number" variant="outlined" size="small" fullWidth />
              </div>
            )}
          </CardContent>
        </Card>
        <div style={buttonStyle}>
          <Button variant="contained" color="primary" onClick={handleUsePaymentMethod}>
            Use this payment method
          </Button>
        </div>
      </div>
    </>
  );
}

export default Payment;
