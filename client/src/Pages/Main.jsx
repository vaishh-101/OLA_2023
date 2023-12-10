import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import { Link, Outlet } from 'react-router-dom';
import img1 from '../Assets/2.png';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Hidden from '@mui/material/Hidden';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Paper } from '@mui/material';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {List, ListItem, ListItemText } from '@mui/material';

import styled from 'styled-components';
import PawIcon from '@mui/icons-material/Pets';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import { Pets, DirectionsRun, LocalHospital } from '@mui/icons-material';




const dashboardStyle1 = {
  backgroundColor:"#6F00FF",
          
}

const cardData = [
  {
    rating: 5, 
    text: '“I am not in a position where I can go to a vet during the week so having this appointment was very helpful. Dr Martin was very professional and friend...”',
    author: 'Hannah',
    date: 'March 2023',
    avatar: 'H',
    
  },
  {
    rating: 5, 
    text: '“Very professional, kind, warm and knowledgeable doctor. Highly recommend Please, could you Send it via my email? Kind regards, Iry...”',
    author: 'Justyna',
    date: 'December 2022',
    avatar: 'J',
  },
  {
    rating: 5, 
    text: '“The doctor was very helpful and gave me some great advice. I’d be happy to use her again.Please, could you Send it via my email? Kind regards, Iry...”',
    author: 'Mimi',
    date: 'February 2023',
    avatar: 'M',
  },
  {
    rating: 5, 
    text: '“I lost the connection, but the appointment went well. Will be baiting for a medicine name. Please, could you Send it via my email? Kind regards, Iry...”',
    author: 'Iryna',
    date: 'January 2023',
    avatar: 'I',
  },
  {
    rating: 5, 
    text: '“Would highly recommend Joanna, she was very patient and listened and assessed our little French bulldog. Would definitely recommend for peace of min...”',
    author: 'Noreen',
    date: 'December 2023',
    avatar: 'N',
  },

];

const Slider = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;
  animation: scroll 50s linear infinite; 

  @keyframes scroll {
    0% {
      transform: translateX(0); /* Start at the beginning */
    }
    100% {
      transform: translateX(-100%); /* Move to the end */
    }
  }
`;

const CardWrapper = styled.div`
  flex: 0 0 auto;
  width: 300px;
  transition: transform 0.5s; /* Add sliding transition here if needed */
`;

  const cardsData = [
    {
      img: 'https://images.vetster.com/grey_cat_being_petted_fb599118c3.jpg',
      category: 'WELLNESS',
      title: 'Preventative wellness tips for your Cat',
      description: 'Schedule routine veterinary check-ups for vaccinations and health evaluations.Offer a nutritionally balanced diet appropriate for your cats age and health.Encourage regular exercise through interactive play and exploration.Maintain a safe indoor environment, free from potential hazards and toxins.',
    },
    {
      img: 'https://images.vetster.com/puppy_eating_from_bowl_0db6a6081d.jpg',
      category: 'BLOG',
      title: 'Preventative wellness tips for your Dog',
      description: 'Ensure regular veterinary check-ups for vaccinations and health assessments.Provide a balanced diet tailored to your dogs age, size, and breed.Engage in daily exercise to maintain physical and mental well-being Keep your dogs environment clean and safe, addressing any potential hazards.',
    },
    {
      img: 'https://images.vetster.com/General_Advice_and_Guidance_in_Virtual_Care_USA_CAN_3a5476d52e.jpg',
      category: 'WELLNESS',
      title: 'Preventative wellness tips for your pets',
      description: 'Schedule regular veterinary check-ups to monitor overall health and address potential issues.Provide a well-balanced diet tailored to your pets species, age, and specific needs.Foster mental and physical well-being through interactive play and exercise, minimizing potential hazards for your pet.' },
  ];

  const animalitem = [
    { text: 'General information' },
    { text: 'About the shelter' },
    { text: 'Statistic data' },
    { text: 'Job' },
    { text: 'Tenders' },
    { text: 'Contact' },
  ];

  const vetitem = [
    { text: 'When your pet is missing' },
    { text: 'Recently found' },
    { text: 'How to adopt' },
    { text: 'Pets for adoption' },
    { text: 'Material Gifts' },
    { text: 'Help with Walks' },
    { text: 'Volunteer Activities' },

  ]

function Main() {
  return (
    <div style={{marginTop: "20px"}}>
    <Grid container spacing={1.5}>
        {cardsData.map((card, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardMedia
                component="img"
                alt={card.category}
                image={card.img}
              />
              <CardContent>
                <Typography variant="h6" component="div">
                  {card.category}
                </Typography>
                <Typography variant="h5" component="div">
                  {card.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {card.description}
                </Typography>
                <a href="https://www.petcarerx.com/">Learn more →</a>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <br />
      <Grid
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        height="30vh" 
      >
        <Typography variant="h2" component="h2">
          Pet parents love what we do!
        </Typography>
        <Typography variant="body1">
          Using Vetcare is simple and enjoyable! Here is what some of our satisfied pet parents have to say…
        </Typography>
      </Grid>
      <Grid container marginBottom= "30px">
        <Slider>
          {cardData.map((data, index) => (
            <CardWrapper key={index}>
              <Card style={{ flex: '0 0 auto', width: 300 }}>
                <CardContent>
                  <Rating
                    name="read-only"
                    value={data.rating}
                    readOnly
                    size="large"
                    style={{ marginBottom: 10 }}
                  /><br/><br/>
                  <Typography variant="body2" color="textSecondary" component="p">
                    {data.text}
                  </Typography><br/>
                  <br/>
                  <div className="rater">
                    <Grid container alignItems="center">
                      <Grid item>
                        <div className="circle flex" style={{ width: 50, height: 50 }}>
                          <Avatar sx={{ bgcolor: 'blueviolet' }}>{data.avatar}</Avatar>
                        </div>
                      </Grid>
                      <Grid item>
                        <div className="raterDetail">
                          <Typography variant="h6" component="div">
                            {data.author}
                          </Typography>
                          <Typography variant="body2" color="textSecondary">
                            {data.date}
                          </Typography>
                        </div>
                      </Grid>
                    </Grid>
                  </div>
                </CardContent>
              </Card>
            </CardWrapper>
          ))}
        </Slider>
      </Grid>
  
      <div style={dashboardStyle1}>
      <Grid container spacing={2} marginLeft={3}>
      <Grid item xs={12} sm={6} md={3}>
        <Paper
            style={{
              backgroundColor: 'white',
              borderRadius: '50%',
              width: '200px',
              height: '200px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <img
              src="https://mdbootstrap.com/img/Photos/new-templates/animal-shelter/logo.png"
              height="100"
              alt=""
              loading="lazy"
            />
          </Paper>
          <Typography variant="h6" style={{ marginTop: '10px' }}>
            Homeless Animal Shelter The budgetary unit of the Capital City of Ahmednagar
          </Typography>
            <IconButton>
              <Pets />
            </IconButton>
            <IconButton>
              <DirectionsRun />
            </IconButton>
            <IconButton>
              <LocalHospital />
            </IconButton>
            
        </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <h5 style={{color: 'white'}}> VetCare</h5>
              <List dense>
    {vetitem.map((item, index) => (
      <ListItem key={index}>
        <IconButton color="primary">
          <PawIcon fontSize="24px" style={{ color: 'white' }} />
        </IconButton>
        <ListItemText>
          <Typography variant="body2" color="white">
            {item.text}
          </Typography>
        </ListItemText>
      </ListItem>
    ))}
  </List>
  
            </Grid>
            <Grid item xs={12} sm={6} md={3} style={{ color: "white" }}>
    <h5>Animals</h5>
              <List dense>
    {animalitem.map((item, index) => (
      <ListItem key={index}>
        <IconButton color="primary">
          <PawIcon fontSize="24px" style={{ color: 'white' }} />
        </IconButton>
        <ListItemText>
          <Typography variant="body2" color="white">
            {item.text}
          </Typography>
        </ListItemText>
      </ListItem>
    ))}
  </List>
  
            </Grid>
            <Grid item xs={12} sm={6} md={3} style={{ color: "white" }}>
    <h5>Contact</h5>
    <Typography variant="body2" style={{ margin: '40px 0' }}>
      <LocationOnIcon fontSize="small" style={{ verticalAlign: 'middle' }} />
      Savedi, Ahmednagar
    </Typography>
    <Typography variant="body2" style={{ margin: '40px 0' }}>
      <PhoneIcon fontSize="small" style={{ verticalAlign: 'middle' }} />
      +91 960xxxxxxx
    </Typography>
    <Typography variant="body2" style={{ margin: '8px 0' }}>
      <EmailIcon fontSize="small" style={{ verticalAlign: 'middle' }} />
      vaishnavichoudhary200@gmail.com
    </Typography>
  </Grid>
  
          </Grid>
          <Paper
        style={{
          backgroundColor: '#512888', 
          padding: '10px', 
          textAlign: 'center',
          whiteSpace: 'nowrap',
          overflow: 'hidden', 
        }}
      >
        <Typography variant="body1" style={{ fontWeight: 'bold', color: 'white' }}>
          &copy;2023 Copyright: Vaishnavi Choudhary
        </Typography>
      </Paper>
      
      </div>
      </div>
  )
}

export default Main