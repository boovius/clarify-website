import React, { Component } from 'react';
import Container from '../Container/Container';
import './TheSolution.css';
import * as SC from '../../assets/styles/StyleConstants'

const callOutText = {
  color: SC.colors.textCallOut,
}

const topPrompt = {
  textAlign: 'center'
}

class TheSolution extends Component {
  render() {
    return (
      <div className="TheSolution">
        <Container>
          <h4 style={topPrompt}>
            BEEM is a 10 day program that helps guide people from a sense
            of feeling stuck to creating a directed next step
            towards a life of greater personal meaning and fulfillment.
          </h4>
          <p>
            BEEM stands for:
            <ul>
              <li>Bold</li>
              <li>Empowered</li>
              <li>Exciting</li>
              <li>Meaningful</li>
            </ul>
          </p>
          <p>
            Beem is currently a work in progress.  And we are looking for interested parties.  If this seems like something that appeals to you or may appeal to someone you know please sign up and we'll reach out to you with more information.
          </p>
        </Container>
      </div>
    );
  }
}

export default TheSolution;
