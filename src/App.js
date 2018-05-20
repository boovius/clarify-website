import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import LandingPage from './components/LandingPage/LandingPage';
import DayOne from './components/DayOne/DayOne';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={LandingPage} />
          <Route path="/day-1" component={DayOne} />
        </div>
      </Router>
    );
  }
}

export default App;
