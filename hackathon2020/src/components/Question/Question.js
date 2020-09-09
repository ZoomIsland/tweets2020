import React from 'react';
import { Tweet } from 'react-twitter-widgets';
import questions from '../../Questions'
import './Question.css'

function Question(props) {
  const answers = ['Joe Biden', 'Donald Trump'];

  const tweet = questions[props.index]
  const buttons = answers.map(answer => {
    if(tweet.answer === answer){
      return (
      <div className="answerBtn">
        <img className="answerImg" src="https://www.orbistechnologies.com/wp-content/uploads/2018/12/profile-placeholder-image-gray-silhouette-no-vector-21542863.jpg" />
        <button className={props.answerBtnColor} key='0' disabled={props.buttonDisable} value="true" onClick={props.onAnswer}>
          {answer}
        </button>
      </div>
      ) 
    }else{
      return (
        <div className="answerBtn">
        <img className="answerImg" src="https://www.orbistechnologies.com/wp-content/uploads/2018/12/profile-placeholder-image-gray-silhouette-no-vector-21542863.jpg" />
          <button className={props.answerBtnColor} key='1' disabled={props.buttonDisable} value="false" onClick={props.onAnswer}>
            {answer}
          </button>
        </div>
        )
    }
  })
  return (

    <div className="questionContainer">
      <div className="tweetContainer">
            <div className={"censor " + props.censorHide}></div>
            <Tweet tweetId={tweet.question} />
      </div>
      <div className="answerBtns">
        {buttons}
      </div>
    </div>
  )
}

export default Question;