import React from 'react';
import './Home.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import delivaryBoy from './Images/delivary-boy.png';
import service from './Images/quick-service.png';
import pricing from './Images/pricing.png';
import staff from './Images/supportive_staff.png';
import trust from './Images/trust.png';

function Home() {
  return (
    <div>
      <Navbar />
      <div className='row'>
        <div className='col-md-6'>
          <div className='header-img-container'><img className='header-image' src={delivaryBoy} /></div>
        </div>
        <div className='col-md-6'>
          <div className='tagline-container'>
          <h1 className='tagline'>We make life of elderly people super easy by providing various services</h1> 
          </div>
        </div>
        
        <h3 className='feature-title' >Why You Should Choose Us</h3>
        <div className='feature-container'>
        <div className='feature-card'>
              <img src={service} className="img-feature" alt="quick-service" />
              <h4 className='title'>Quick Service</h4>
            </div>

            <div className='feature-card'>
              <img src={pricing} className="img-feature" alt="low-pricing" />
              <h4 className='title'>Low Pricing</h4>
            </div>

            <div className='feature-card'>
              <img src={staff} className="img-feature" alt="supportive-staff" />
              <h4 className='title'>Supportive Staff</h4>
            </div>

            <div className='feature-card'>
              <img src={trust} className="img-feature" alt="trust-worthy" />
              <h4 className='title'>Trustworthy</h4>
            </div>
      
        </div>
            
      </div>
      <Footer />
      </div>
  )
}

export default Home