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
            Therefore, Clarify is built with a past->future-> present model, beginning with creating empowering meaning from your past, followed by clarifying a vision of your future, and finishing with introducing tools that begin building momentum in your present.
          </p>
        </Container>
      </div>
    );
  }
}

export default TheSolution;
