import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import ProgressBar from '../components/ProgressBar/ProgressBar';
import Qheader from '../components/Qheader/Qheader'
import Question from '../components/Question/Question';
import Register from '../components/Register/Register';

class QuestionContainer extends Component {
  state = {
    index: 0,
    qHeader: "Who tweeted this?",
    headColor: "",
    trueBtn: "",
    falseBtn: "",
    opaque: "",
    trueOpacity: "",
    falseOpacity: "",
    infoHide: 'hidden',
    censorHide: '',
    buttonDisable: false
  }

  onAnswer = (bool) => {
    if (this.state.buttonDisable === false) {
      this.props.onAnswer(bool)
      if (bool === 'true') {
        this.PlayAudio('./Audio/Hackathon - Correct Answer.wav')
        this.setState({qHeader: "CORRECT!"})
        this.setState({headColor: "headCorrect"})
        this.setState({trueBtn: "correct"})
        this.setState({opaque: "opaque"})
        this.setState({trueOpacity: "visible"})
      } else {
        this.PlayAudio('./Audio/Hackathon - Incorrect Answer.wav')
        this.setState({qHeader: "SO CLOSE!"})
        this.setState({headColor: "headWrong"})
        this.setState({falseBtn: "wrong"})
        this.setState({opaque: "opaque"})
        this.setState({falseOpacity: "visible"})
      }
      this.setState({infoHide: ""})
      this.setState({censorHide: "hidden"})
      this.setState({buttonDisable: true})
    }
  }
  
  onNext = () => {
    this.setState({index: this.state.index + 1});
    this.setState({qHeader: "Who tweeted this?"})
    this.setState({headColor: ""})
    this.setState({infoHide: "hidden"});
    this.setState({censorHide: ""});
    this.setState({buttonDisable: false});
    this.setState({trueBtn: ""});
    this.setState({falseBtn: ""});
    this.setState({opaque: ""})
    this.setState({trueOpacity: ""});
    this.setState({falseOpacity: ""});
  }

  nextBtn = () => {
     if (this.props.answers.length === 10) {
         return (
             <Link className="resultsLink" to='/results'>
                <button className={this.state.infoHide + " nextBtn"}>
                  SEE MY SCORE 
                  <img className="arrow" src="/arrow-forward.svg" />
                </button>
             </Link>
         )
     } else {
        return (
        <button className={this.state.infoHide + " nextBtn"} onClick={this.onNext}>
          NEXT
          <img className="arrow" src="/arrow-forward.svg" />
        </button>
        )
     }
  }

  PlayAudio = (clipName) => {
    const snd = new Audio(clipName);
    snd.volume = 0.2;
    snd.play();
  }
  
  render() {

    return (
      <div className="questionPage">

        <ProgressBar answers={this.props.answers}/>

        <Qheader header={this.state.qHeader} headColor={this.state.headColor} />
        
        <Question 
          index={this.state.index}
          onAnswer={this.onAnswer} 
          onNext={this.onNext} 
          infoHide={this.state.infoHide}
          censorHide={this.state.censorHide} 
          buttonDisable={this.state.buttonDisable}
          trueBtn={this.state.trueBtn}
          falseBtn={this.state.falseBtn}
          opaque={this.state.opaque}
          trueOpacity={this.state.trueOpacity}
          falseOpacity={this.state.falseOpacity}
          unselected={this.state.unselected} />
        
        <div className="nextBtnContainer">
          {this.nextBtn()}
        </div>

        <Register />
  
      </div>
    );
  }
}

export default QuestionContainer;
