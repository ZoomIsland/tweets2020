import React, { Component } from 'react';
import { TwitterTweetEmbed } from 'react-twitter-embed';
import './App.css';
import Question from './components/Question/Question';
import ProgressBar from './components/ProgressBar/ProgressBar';

class App extends Component {
  state = {
    answers: [1, 2, 3],
    page: 'question1',
    infoHide: 'hidden',
    buttonDisable: false
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
    this.setState({infoHide: ""})
    this.setState({buttonDisable: true})
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
          info="Abraham Lincoln faced this decision in..."
          onAnswer={this.onAnswer}
          infoHide={this.state.infoHide}
          buttonDisable={this.state.buttonDisable} />
        break;
      // case "results":
      //   currentComp = <Results />
    }



    return (
      <div className="App">
        <h1>Twitter Blasters</h1>
  
        <ProgressBar answers={this.state.answers}/>

        <div id="test">
          <div class="censor"></div>
          <TwitterTweetEmbed 
            tweetId={'933354946111705097'}
          />
        </div>

        {/* buttons */}

        {/* Register to vote */}

        {/* Current Question with 2 answers (and info box) */}
        {/* Results page */}
  
      </div>
    );
  }
}

export default App;
