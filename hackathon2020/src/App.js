import React, { Component } from 'react';
import './App.css';
import ProgressBar from './components/ProgressBar/ProgressBar';
import Qheader from './components/Qheader/Qheader'
import Question from './components/Question/Question';
import Register from './components/Register/Register';

class App extends Component {
  state = {
    answers: [],
    index: 0,
    qHeader: "Who tweeted this?",
    trueBtn: "",
    falseBtn: "",
    infoHide: 'hidden',
    censorHide: '',
    buttonDisable: false
  }

  onAnswer = (event) => {
    const midAnswers = this.state.answers;
    let answer;
    if (event.target.value === 'true') {
      answer = true;
      this.setState({qHeader: "Correct!"})
      this.setState({trueBtn: "correct"})
    } else {
      answer = false;
      this.setState({qHeader: "Wrong!"})
      this.setState({falseBtn: "wrong"})
    }
    midAnswers.push(answer);
    this.setState({answers: midAnswers})
    this.setState({infoHide: ""})
    this.setState({censorHide: "hidden"})
    this.setState({buttonDisable: true})
  }
  
  onNext = () => {
    this.setState({index: this.state.index + 1});
    this.setState({qHeader: "Who tweeted this?"})
    this.setState({infoHide: "hidden"});
    this.setState({censorHide: ""});
    this.setState({buttonDisable: false});
    this.setState({trueBtn: ""});
    this.setState({falseBtn: ""});
  }

  // onAnswer = function that pushes the answer (true/false) into the answers array on the state

  // changePage = function that updates the state.page to be the current question or results page


  
  render() {

    return (
      <div className="mainPage">
        <h1>Twitter Blasters</h1>
  
        <ProgressBar answers={this.state.answers}/>

        <Qheader header={this.state.qHeader} />
        
        <Question 
          index={this.state.index}
          onAnswer={this.onAnswer} 
          onNext={this.onNext} 
          infoHide={this.state.infoHide}
          censorHide={this.state.censorHide} 
          buttonDisable={this.state.buttonDisable}
          trueBtn={this.state.trueBtn}
          falseBtn={this.state.falseBtn} />

        <button className={this.state.infoHide + " nextBtn"} onClick={this.onNext}>Next Tweet</button>

        <Register />

        {/* Results page */}
  
      </div>
    );
  }
}

export default App;
