import React, { Component } from 'react';
import './App.css';
import Question from './components/Question/Question'

class App extends Component {
  state = {
    answers: [],
    page: 'question1'
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
  
  // onAnswer = function that pushes the answer (true/false) into the answers array on the state

  // changePage = function that updates the state.page to be the current question or results page


  
  render() {
    let currentComp;
    switch(this.state.page) {
      case "question1":
        currentComp = <Question 
          question="The south just seceded what do you do?" 
          trueAnswer="go to war" 
          falseAnswer="give in to their wishes"
          onAnswer={this.onAnswer} />
        break;
      // case "results":
      //   currentComp = <Results />
    }



    return (
      <div className="App">
        <h1>Historical Decisions</h1>
  
        {currentComp}
        {/* Current Question with 2 answers (and info box) */}
        {/* Results page */}
  
      </div>
    );
  }
}

export default App;
