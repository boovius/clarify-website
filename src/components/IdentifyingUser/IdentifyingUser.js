import React, { Component } from 'react';
import Container from '../Container/Container';
import './IdentifyingUser.css';
import onEdgeImage from '../../assets/images/on_the_edge.png'
import * as SC from '../../assets/styles/StyleConstants'


const imageStyles = {
  display: 'inline-block',
  verticalAlign: 'middle',
  marginBottom: 50
}

const middlePromptStyles = {
  display: 'inline-block',
  verticalAlign: 'text-top',
  width: '35%',
  marginLeft: 70,
  textAlign: 'center',
}

const callOutText = {
  color: SC.colors.textCallOut,
}

class IdentifyingUser extends Component {
  render() {
    return (
      <div className="IdentifyingUser">
        <Container>
          <h3><span style={callOutText}>Stuck?</span></h3>
          <img style={imageStyles} src={onEdgeImage} />
          <h3 style={middlePromptStyles}>Unsure of what your <span style={callOutText}>next step</span> should be?</h3>
          <h3>Like maybe you're really <span style={callOutText}>meant</span> for something <span style={callOutText}>more</span>?</h3>
        </Container>
      </div>
    );
  }
}

export default IdentifyingUser;
