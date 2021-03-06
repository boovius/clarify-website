import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import LandingPage from './components/LandingPage/LandingPage';
import DayOne from './components/DayOne/DayOne';
import fontawesome from '@fortawesome/fontawesome'
import faAngleDoubleDown from '@fortawesome/fontawesome-free-solid/faAngleDoubleDown'
import faArrowCircleRight from '@fortawesome/fontawesome-free-solid/faArrowCircleRight'

fontawesome.library.add(faAngleDoubleDown)
fontawesome.library.add(faArrowCircleRight)

const App = () => (
  <Router>
    <div className="App">
      <Route exact path="/" component={LandingPage} />
      <Route path="/day-1" component={DayOne} />
    </div>
  </Router>
);

export default App;
