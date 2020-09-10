import React from 'react';
import { Tweet } from 'react-twitter-widgets';
import questions from '../../Questions'
import './Question.css'

function Question(props) {
  const answers = ['Joe Biden', 'Donald Trump'];

  const getImage = (name) => {
    switch(name) {
      case "Donald Trump":
        return <img className="answerImg" src="/Candidate_Trump.svg" alt="Donald Trump" />
        break;
      case "Joe Biden":
        return <img className="answerImg" src="/Candidate_Trump.svg" alt="Joe Biden" />
        break;
      case "Jo Jorgensen":
        return <img className="answerImg" src="/Candidate_Trump.svg" alt="Jo Jorgensen" />
        break;
      case "Howie Hawkins":
        return <img className="answerImg" src="/Candidate_Trump.svg" alt="Howie Hawkins" />
        break;
    }
    //run a switch/case on the name
    //return the image based on name
  }

  const tweet = questions[props.index]
  const buttons = answers.map(answer => {
    if(tweet.answer === answer){
      return (
      <div className="answerBtn">
        {getImage(answer)}
        {/* <img className="answerImg" src="https://www.orbistechnologies.com/wp-content/uploads/2018/12/profile-placeholder-image-gray-silhouette-no-vector-21542863.jpg" /> */}
        <button className={props.trueBtn} key='0' disabled={props.buttonDisable} value="true" onClick={props.onAnswer}>
          {answer}
        </button>
      </div>
      ) 
    }else{
      return (
        <div className="answerBtn">
        {getImage(answer)}
        {/* <img className="answerImg" src="https://www.orbistechnologies.com/wp-content/uploads/2018/12/profile-placeholder-image-gray-silhouette-no-vector-21542863.jpg" /> */}
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