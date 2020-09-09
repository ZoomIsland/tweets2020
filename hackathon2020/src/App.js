import React, { Component } from 'react';
import './App.css';
import Routes from './config/routes'

class App extends Component {
  state = {
    answers: [],
  }
  
  render() {

    return (
      <div className="mainPage">
        <h1>Twitter Blasters</h1>
        <Routes /> 
        {/* <h1>Main Page</h1> */}
      </div>
    );
  }
}

export default App;
