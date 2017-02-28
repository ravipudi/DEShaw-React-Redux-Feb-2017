import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BugTracker from './Components/BugTracker'


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Bug Tracker</h2>
        </div>
        <BugTracker></BugTracker>
      </div>
    );
  }
}

export default App;
