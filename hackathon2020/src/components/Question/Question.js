import React from 'react';
import { Tweet } from 'react-twitter-widgets';
import questions from '../../Questions'
import './Question.css'

function Question(props) {
  const getImage = (name) => {
    switch(name) {
      case "Donald Trump":
        return <img className="answerImg" src="/Candidate_Trump.svg" alt="Donald Trump" />
        break;
      case "Joe Biden":
        return <img className="answerImg" src="/Candidate_Biden.svg" alt="Joe Biden" />
        break;
      case "Jo Jorgensen":
        return <img className="answerImg" src="/Candidate_Jorgensen.svg" alt="Jo Jorgensen" />
        break;
      case "Howie Hawkins":
        return <img className="answerImg" src="/Candidate_Hawkins.svg" alt="Howie Hawkins" />
        break;
    }
  }

  const tweet = questions[props.index]
  const buttons = tweet.answers.map(answer => {
    if(tweet.answer === answer){
      return (
      <div className="answerBtn">
        {getImage(answer)}
        <button className={props.trueBtn} key='0' disabled={props.buttonDisable} value="true" onClick={props.onAnswer}>
          {answer}
        </button>
      </div>
      ) 
    }else{
      return (
        <div className="answerBtn">
        {getImage(answer)}
        <button className={props.falseBtn} key='1' disabled={props.buttonDisable} value="false" onClick={props.onAnswer}>
          {answer}
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
            <Tweet tweetId={tweet.question} />
      </div>
      <div className="answerBtns">
        {buttons}
      </div>
    </div>
  )
}

export default Question;