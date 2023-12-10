import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

function ordered() {
  const centerContentStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '90vh',
    backgroundColor: "black"
  };

  const cardStyle = {
    padding: 20,
    maxWidth: '500px',
    backgroundColor: "black"
  };

  const gifURL = "https://cdn.dribbble.com/users/28588/screenshots/3669080/holfuy_done_gifconvert.gif";

  const isMobileView = window.innerWidth < 768; 

  return (
    <div style={centerContentStyle}>
      <Card style={cardStyle} className={isMobileView ? 'mobile-card' : 'desktop-card'}>
        <CardContent style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img
            src={gifURL}
            alt="GIF"
            style={{ width: '100%', height: 'auto', maxWidth: '100%', maxHeight: isMobileView ? '70vh' : 'auto' }}
          />
        </CardContent>
      </Card>
    </div>
  );
}

export default ordered;
