import React, { Component } from 'react';
import Container from '../Container/Container';
import './LandingPage.css';
import backgroundImage from '../../images/sand-dunes-desert-night.jpg'

const sectionStyle = {backgroundImage: `url(${backgroundImage})` }

class LandingPage extends Component {
  render() {
    return (
      <div style={sectionStyle} className="LandingPage">
        <Container>
          <h2 className='LandingPage-title'>BEEM</h2>
          <div className='LandingPage-tagline'>
            <h3><span className='LandingPage-tagline--spotlight'>Create</span></h3>
            <h3>an intentional <span className='LandingPage-tagline--spotlight'>next-step</span></h3>
            <h3>towards a life of greater <span className='LandingPage-tagline--spotlight'>personal meaning</span></h3>
          </div>
          <div className='LandingPage-callToAction'>
            <div className='LandingPage-callToAction-button'>sign up</div>
          </div>
        </Container>
      </div>
    );
  }
}

export default LandingPage;
