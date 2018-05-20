import React, { Component } from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import Container from '../Container/Container';
import TitleCard from './TitleCard/TitleCard';
import OneTwo from './OneTwo/OneTwo';
import './DayOne.css';

const DayOne = ({match}) => (
  <div id='day-1'>
    <Container>
      <Switch>
        <Route path={`${match.url}/1`} component={TitleCard} />
        <Route path={`${match.url}/2`} component={OneTwo} />
        <Redirect to={`${match.url}/1`} />
      </Switch>
    </Container>
  </div>
)

export default DayOne
