import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import Container from '../Container/Container';
import TitleCard from './TitleCard/TitleCard';
import OneTwo from './OneTwo/OneTwo';
import OneThree from './OneThree/OneThree';
import OneFour from './OneFour/OneFour';
import OneFive from './OneFive/OneFive';
import OneSix from './OneSix/OneSix';
import './DayOne.css';


const DayOne = ({match}) => (
  <div id='day-1'>
    <Container>
      <Switch>
        <Route path={`${match.url}/1`} component={TitleCard} />
        <Route path={`${match.url}/2`} component={OneTwo} />
        <Route path={`${match.url}/3`} component={OneThree} />
        <Route path={`${match.url}/4`} component={OneFour} />
        <Route path={`${match.url}/5`} component={OneFive} />
        <Route path={`${match.url}/6`} component={OneSix} />
        <Redirect to={`${match.url}/1`} />
      </Switch>
    </Container>
  </div>
)

export default DayOne
