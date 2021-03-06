import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import Routes from './config/routes';

class App extends Component {
  state = {
    answers: [],
  }

  pageReset = () => {
    this.setState({answers: []})
  }

  onAnswer = (bool) => {
    const midAnswers = this.state.answers;
    let answer;
    if (bool === 'true') {
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
        <Link className="headerLink" to="/" onClick={this.pageReset}>
          <h1 className="header">tweet <span className="redHead">20</span><span className="blueHead">20</span></h1>
        </Link>
        <Routes onAnswer={this.onAnswer} answers={this.state.answers}/> 
      </div>
    );
  }
}

export default App;
