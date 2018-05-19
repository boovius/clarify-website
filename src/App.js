import React, { Component } from 'react';
import LandingPage from './components/LandingPage/LandingPage';
import IdentifyingUser from './components/IdentifyingUser/IdentifyingUser';
import TheSolution from './components/TheSolution/TheSolution';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <LandingPage />
        <IdentifyingUser />
        <TheSolution />
      </div>
    );
  }
}

export default App;
