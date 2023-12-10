import React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Rating from '@mui/material/Rating';
import { Avatar } from '@mui/material';

const petParentReviews = [
  {
    img: 'https://cdn.shopify.com/s/files/1/0565/8021/0861/files/Mask_group_11.png?v=1681826625',
    description: 'The Doctors are so very systematic and friendly, i believe as though i have a family vet for my young Bosco, someone i can reach out to anytime despite the distance.',
    rating: 4.5,
    parentName: 'Niketa Bakshi',
  },
  {
    img: 'https://cdn.shopify.com/s/files/1/0565/8021/0861/files/WhatsApp_Image_2022-02-10_at_6.21_2_2.png?v=1681826688',
    description: 'We and our little rescued bird are really grateful to you.She is much better since we consulted you.It would be a pleasure to recommend you to our other animal lover groups.Thankyou',
    rating: 3.7,
    parentName: 'TJ Mukhjee',
  },
  {
    img: 'https://cdn.shopify.com/s/files/1/0565/8021/0861/files/WhatsApp_Image_2022-02-10_at_6.21_2_3.png?v=1681826705',
    description: 'I found our best and Google found his perfect healer and curer in Dr. Archith Sridhar. We are utmost grateful and appreciative of his patience and the hope that he given us his treatment and theraphy.',
    rating: 5.0,
    parentName: 'Vidhi Arya',
  },
  {
    img: 'https://cdn.shopify.com/s/files/1/0565/8021/0861/files/Mask_group_63_1.png?v=1681826583',
    description: 'Yumi lost her birth mom when she was just 3 weeks old, and we were overwhelmed with how to properly car for her.Thanks to Dr.Nithya, with their constant support and Guidance,Yumi is now thriving and happier than ever',
    rating: 4.2,
    parentName: 'Arpita Dwivedi',
  },
];

const vetServices = [
  {
    name: 'General Checkup',
    imageUrl: 'https://cdn.shopify.com/s/files/1/0565/8021/0861/files/Group_1629.png?v=1681738011',
  },
  {
    name: 'Vaccinations',
    imageUrl: 'https://cdn.shopify.com/s/files/1/0565/8021/0861/files/Group_1630.png?v=1681738253',
  },
  {
    name: 'Skin Issues',
    imageUrl: 'https://cdn.shopify.com/s/files/1/0565/8021/0861/files/Group_1623.png?v=1681738253',
  },
  {
    name: 'Digestive issues',
    imageUrl: 'https://cdn.shopify.com/s/files/1/0565/8021/0861/files/Group_1626.png?v=1681738324',
  },
  {
    name: 'Paws & Limbs',
    imageUrl: 'https://cdn.shopify.com/s/files/1/0565/8021/0861/files/Group_1625.png?v=1681738253',
  },
  {
    name: 'Dental issues',
    imageUrl: 'https://cdn.shopify.com/s/files/1/0565/8021/0861/files/Group_1624_1.png?v=1681738253',
  },
  {
    name: 'Ears issues',
    imageUrl: 'https://cdn.shopify.com/s/files/1/0565/8021/0861/files/Group_1622.png?v=1681738253',
  },
  {
    name: 'Eyes Issues',
    imageUrl: 'https://cdn.shopify.com/s/files/1/0565/8021/0861/files/Group_1623.png?v=1681738253',
  },
  {
    name: 'Reproduction',
    imageUrl: 'https://cdn.shopify.com/s/files/1/0565/8021/0861/files/Group_1628.png?v=1681738462',
  },
  {
    name: 'Nutrition',
    imageUrl: 'https://cdn.shopify.com/s/files/1/0565/8021/0861/files/Group_1627.png?v=1681738495',
  },
  {
    name: 'Dental issues',
    imageUrl: 'https://cdn.shopify.com/s/files/1/0565/8021/0861/files/Group_1624_1.png?v=1681738253',
  },
  {
    name: 'Ears issues',
    imageUrl: 'https://cdn.shopify.com/s/files/1/0565/8021/0861/files/Group_1622.png?v=1681738253',
  },
  
];

const vetInfo = [

  {
    img: 'https://cdn.shopify.com/s/files/1/0565/8021/0861/files/Mask-group-_10.png?v=1681826056',
    name: 'Dr. Shantanu Kalambi',
    description: 'Rescuing wildlife, saving sea turtles, releasing elephants into the wild and performing life saving operations on dogs and cats - It’s just a Tuesday for Dr. Shantanu Kalambi. A man who has dedicated his life to the welfare of animals, Dr. Shantanu has over two decades of experience in working with animals.',
  },
  {
    img: 'https://cdn.shopify.com/s/files/1/0565/8021/0861/files/Mask-group-_7.png?v=1681825623',
    name: 'Dr. Archit',
    description: 'Dr. Archith K. Sridhar is an experienced veterinarian skilled in treating various species and has expertise in wildlife photography and ecology. He holds a gold medal from Rajiv Gandhi Institute of Veterinary Education and Research, Pondicherry, and a Masters in Practical Entomology from the University of Sheffield, UK.',
  },
  {
    img: 'https://cdn.shopify.com/s/files/1/0565/8021/0861/files/Mask-group-_8.png?v=1681825623',
    name: 'Dr. Shameeka Rao',
    description: 'Dr. Shameeka Rao is a veterinarian and conservationist with a Masters in Global Wildlife Health and Conservation from the University of Bristol, UK. She has extensive experience in treating diverse species as an urban wildlife veterinarian and has worked with GIZ India in biodiversity conservation and policy implementation.',
  },
  {
    img: 'https://cdn.shopify.com/s/files/1/0565/8021/0861/files/Mask-group-_9.png?v=1681825816',
    name: 'Dr. Rohit Joseph',
    description: 'Dr. Rohit completed his veterinary degree from the prestigious Bombay Veterinary College. With over 5 years of practical experience in the field, he has honed his expertise in providing compassionate medical care and performing complex surgical procedures for companion animals.',
  },
  {
    img: 'https://cdn.shopify.com/s/files/1/0565/8021/0861/files/Mask-group-_12.png?v=1681896226',
    name: 'Dr. Zaiba Tarannum',
    description: 'Dr. Zaiba is a graduate of Hassan Veterinary College, Karnataka, with over one year of experience as a Veterinary Physician where she has developed a strong foundation in providing comprehensive medical care for animals. Her genuine love for animals since childhood has been her driving force in pursuing a career as a veterinarian, as she believes its her way of giving back to them.',
  },
  {
    img: 'https://cdn.shopify.com/s/files/1/0565/8021/0861/files/Mask-group-_13.png?v=1681896236',
    name: 'Dr. Neha',
    description: 'Dr. Neha Menon, an associate veterinarian, holds a degree in Veterinary Science and Animal Husbandry from Pondicherry Veterinary College. Her passion for animals and interest in alternative medicine drives her holistic approach to animal care.',
  },
];

function VetAppointment() {
  

  return (
    <>
   <div>
        <Typography variant="h4" align="center" style={{ margin: '20px' }}>
          Vet Appointment Services
        </Typography>
        <Grid container spacing={2}>
          {vetServices.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <Paper elevation={3} style={{ textAlign: 'center', padding: '16px' }}>
                <img src={service.imageUrl} alt={service.name} style={{ width: '80px', borderRadius: '50%' }} />
                <Typography variant="h6" style={{ margin: '10px 0' }}>
                  {service.name}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </div>
      <br/>
      <div>

      <Typography variant="h4" align="center" style={{ marginBottom:"20px", backgroundColor: 'lightblue', width: "100%" }}>
      Access our expert vets from anywhere
        </Typography>
      <Grid container spacing={1.5}>
        
  {vetInfo.map((card, index) => (
    <Grid item xs={12} sm={6} md={4} key={index}>
      <Card style={{ height: '100%' }}>
        <CardMedia
          component="img"
          alt={card.name}
          image={card.img}
        />
        <CardContent style={{ height: '100%' }}>
          <Typography variant="h5" component="div">
            {card.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {card.description}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  ))}
</Grid>

      <br />
      </div>
      <div>
      <Typography variant="h4" align="center" style={{ marginBottom: '20px', backgroundColor: 'lightblue', width: '100%' }}>
        What pet parents are saying about us...
      </Typography>
      <Grid container spacing={2}>
        {petParentReviews.map((review, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Paper style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%' }}>
              <Card style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%', justifyContent: 'space-between' }}>
                <CardMedia
                  component="img"
                  alt={review.parentName}
                  height="200"
                  image={review.img}
                />
                <CardContent style={{ flex: '1' }}>
                  <Typography variant="body2" color="text.secondary">
                    {review.description}
                  </Typography>
                </CardContent>
                <div className="rater" style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                  <div className="circle flex" style={{ width: 50, height: 50 }}>
                    <Avatar sx={{ bgcolor: 'blueviolet' }}>{review.parentName[0]}</Avatar>
                  </div>
                  <div className="raterDetail" style={{ marginLeft: 10 }}>
                    <Typography variant="h6" component="div">
                      {review.parentName}
                    </Typography>
                  </div>
                </div>
              </Card>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </div>
    </>
  );
}

export default VetAppointment;
