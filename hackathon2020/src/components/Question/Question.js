import React from 'react';
import { Tweet } from 'react-twitter-widgets';
import questions from '../../Questions'
import './Question.css'

function Question(props) {
  const getImage = (name) => {
    switch(name) {
      case "Trump":
        return <img className="answerImg" src="/Candidate_Trump.svg" alt="Donald Trump" />
        break;
      case "Biden":
        return <img className="answerImg" src="/Candidate_Biden.svg" alt="Joe Biden" />
        break;
      case "Jorgensen":
        return <img className="answerImg" src="/Candidate_Jorgensen.svg" alt="Jo Jorgensen" />
        break;
      case "Hawkins":
        return <img className="answerImg" src="/Candidate_Hawkins.svg" alt="Howie Hawkins" />
        break;
    }
  }

  const tweet = questions[props.index]
  const buttons = tweet.answers.map(answer => {
    if(tweet.answer === answer){
      return (
      <div className="answerBtn" key='0' value="true" onClick={() => props.onAnswer("true")}>
        {getImage(answer)}
        <button className={"answerBtnActual " + props.trueBtn} disabled={props.buttonDisable}>
          {answer.toUpperCase()}
        </button>
      </div>
      ) 
    }else{
      return (
        <div className="answerBtn" key='1' value="false" onClick={() => props.onAnswer("false")}>
        {getImage(answer)}
        <button className={"answerBtnActual " + props.falseBtn} disabled={props.buttonDisable}>
          {answer.toUpperCase()}
        </button>
        </div>
        )
    }
  })
  return (

    <div className="questionContainer">
      <div className="tweetContainer">
            <div className={"censor " + props.censorHide}>
            <i class="fab fa-twitter"></i>
            </div>
            <div className="tweet-it">
              <Tweet tweetId={tweet.question} />
            </div>
      </div>
      <div className="answerBtns">
        {buttons}
      </div>
    </div>
  )
}

export default Question;