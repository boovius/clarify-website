import React, { Component } from 'react';
import { Route, Link } from "react-router-dom";
import Container from '../Container/Container';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import OneTwo from './OneTwo/OneTwo';
import './DayOne.css';

const DayOne = ({match}) => (
  <div id='day-1'>
    <Container>
      <p>Day 1</p>
      <h2>Begin with the End</h2>
      <Link to={match.url + '/1-2'}>
        <FontAwesomeIcon className='down-arrow' icon="angle-double-down" />
      </Link>
      <Route path={match.url + '/1-2'} component={OneTwo} />
    </Container>
  </div>
)

export default DayOne
