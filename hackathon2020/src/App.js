import React, { Component } from 'react';
import './App.css';
import Routes from './config/routes'

class App extends Component {
  state = {
    answers: [],
  }

  onAnswer = (event) => {
    const midAnswers = this.state.answers;
    let answer;
    if (event.target.value === 'true') {
      answer = true;
    } else {
      answer = false;
    }
    midAnswers.push(answer);
    this.setState({answers: midAnswers})
  }
  
  render() {

    return (
      <div className="mainPage">
        <h1 className="header">tweet <span className="redHead">20</span><span className="blueHead">20</span></h1>
        <Routes onAnswer={this.onAnswer} answers={this.state.answers}/> 
      </div>
    );
  }
}

export default App;
