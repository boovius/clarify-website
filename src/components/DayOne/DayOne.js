import React, { Component } from 'react';
import Container from '../Container/Container';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import './DayOne.css';

class DayOne extends Component {
  render() {
    return (
      <div id='day-1'>
        <Container>
          <p>Day 1</p>
          <h2>Begin with the End</h2>
          <FontAwesomeIcon className='down-arrow' icon="angle-double-down" />
        </Container>
      </div>
    )
  }
}

export default DayOne
