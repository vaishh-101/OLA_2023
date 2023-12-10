import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function Home() {
 

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '80vh',
        color: 'white',
        backgroundColor: 'Black'
      }}
    >
    
      <Typography variant="h4" sx={{ mb: 4 }}>
        Welcome to the Admin Dashboard
      </Typography>
      
    </Box>
  );
}

export default Home;
