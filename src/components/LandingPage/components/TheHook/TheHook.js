import React from 'react';
import Container from '../../../Container';
import './TheHook.css';
import backgroundImage from '../../../../assets/images/sand-dunes-desert-night.jpg'

const sectionStyle = {backgroundImage: `url(${backgroundImage})` }

const TheHook = () => (
  <div style={sectionStyle} className="LandingPage">
    <Container>
      <h2 className='LandingPage-title'>BEEM</h2>
      <div className='LandingPage-tagline'>
        <h3>Find your <span className='LandingPage-tagline--spotlight'>way</span>. Find your <span className='LandingPage-tagline--spotlight'>beem</span>.</h3>
      </div>
      <div className='LandingPage-callToAction'>
        <div className='LandingPage-callToAction-button'>Learn more</div>
      </div>
    </Container>
  </div>
);

export default TheHook;
