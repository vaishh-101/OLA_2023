import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { Grid, Card, CardContent } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function DeliveryAdd() {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState([]);
  const [address, setAddress] = useState({
    fullName: '',
    mobileNumber: '',
    addressLine: '',
    area: '',
    pincode: '',
    state: '',
    makeDefaultAddress: false,
  });

  const navigate = useNavigate();

  useEffect(() => {
    // Fetch saved addresses from localStorage when the component mounts
    const savedAddresses = JSON.parse(localStorage.getItem('userAddresses')) || [];
    setData(savedAddresses);
  }, []);

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // const fetchData = async () => {
  //   try {
  //     const response = await fetch('http://localhost:5000/del/delivery');
  //     const data = await response.json();
  //     setData(data);
  //   } catch (error) {
  //     console.error('Error fetching data:', error);
  //   }
  // };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleUseAddress = async () => {
    if (validateFields()) {
      try {
        await saveAddressToDatabase(address);
       
        setData(prevData => [...prevData, address]);
      
        localStorage.setItem('userAddresses', JSON.stringify([...data, address]));
        setOpen(false);
      } catch (error) {
        console.error('Error saving address:', error);
      }
    } else {
      console.error('Mandatory fields are not filled.');
    }
  };
  

  const handleclick = (selectedAddress) => {
    navigate('/dashboard/payment', { state: { selectedAddress } });
  };

  const saveAddressToDatabase = async (address) => {
    try {
      const response = await fetch('http://localhost:5000/del/delivery', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(address),
      });

      if (response.status === 201) {
        console.log('Address saved successfully.');
      } else {
        console.error('Error saving address.');
      }
    } catch (error) {
      console.error('Error saving address:', error);
    }
  };

  const validateFields = () => {
    return (
      address.fullName &&
      address.mobileNumber &&
      address.addressLine &&
      address.area &&
      address.pincode &&
      address.state
    );
  };

  return (
    <div className="page-container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Typography variant="h5" gutterBottom>
        Select a Delivery Address
      </Typography>

      <Grid container spacing={8} padding={10}>
        {data.map((item, index) => (
          <Grid item key={index}>
            <Card variant="outlined">
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {item.fullName}
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                  {item.addressLine}, {item.area}, {item.state}, {item.pincode}
                </Typography>
                <Button variant="contained" color="warning"  onClick={() => handleclick(item)}>
                  Use this address
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Button variant="contained" color="warning" onClick={handleClickOpen}>
        Add Delivery Address
      </Button>

      <Dialog open={open} onClose={handleClose}>
        <IconButton
          edge="end"
          color="inherit"
          onClick={handleClose}
          aria-label="close"
          style={{ position: 'absolute', top: 0, right: 30 }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent>
          <Typography variant="h5" gutterBottom>
            Enter a new delivery address
          </Typography>

          <Typography variant="h6" gutterBottom>
            Full Name
          </Typography>
          <TextField
            fullWidth
            label="Enter your full name"
            variant="outlined"
            size="small"
            value={address.fullName}
            onChange={(e) => setAddress({ ...address, fullName: e.target.value })}
            required
          />

          <Typography variant="h6" gutterBottom>
            Mobile Number
          </Typography>
          <TextField
            fullWidth
            label="Enter your mobile number"
            variant="outlined"
            size="small"
            value={address.mobileNumber}
            onChange={(e) => setAddress({ ...address, mobileNumber: e.target.value })}
            required
          />

          <Typography variant="h6" gutterBottom>
            Flat, House No, Building, Company, Apartment
          </Typography>
          <TextField
            fullWidth
            label="Enter your address"
            variant="outlined"
            size="small"
            value={address.addressLine}
            onChange={(e) => setAddress({ ...address, addressLine: e.target.value })}
            required
          />

          <Typography variant="h6" gutterBottom>
            Area, Street, Sector, Village
          </Typography>
          <TextField
            fullWidth
            label="Enter your area/street"
            variant="outlined"
            size="small"
            value={address.area}
            onChange={(e) => setAddress({ ...address, area: e.target.value })}
            required
          />

          <Typography variant="h6" gutterBottom>
            Pincode
          </Typography>
          <TextField
            fullWidth
            label="Enter your pincode"
            variant="outlined"
            size="small"
            value={address.pincode}
            onChange={(e) => setAddress({ ...address, pincode: e.target.value })}
            required
          />

          <Typography variant="h6" gutterBottom>
            State
          </Typography>
          <TextField
            fullWidth
            label="Enter your state"
            variant="outlined"
            size="small"
            value={address.state}
            onChange={(e) => setAddress({ ...address, state: e.target.value })}
            required
          />

          <FormControl component="fieldset">
            <FormGroup>
              <FormControlLabel
                control={<Checkbox name="makeDefaultAddress" />}
                label="Make this my default address"
              />
            </FormGroup>
          </FormControl>

          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Button variant="contained" color="warning" onClick={handleUseAddress}>
              Save address
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default DeliveryAdd;
