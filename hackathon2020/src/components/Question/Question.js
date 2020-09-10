import React from 'react';
import fullTweets from '../../fullTweets'
import './Question.css'

function Question(props) {
  const getImage = (name) => {
    switch(name) {
      case "Trump":
        return <img className="answerImg" src="/Candidate_Trump.svg" alt="Donald Trump" />
      case "Biden":
        return <img className="answerImg" src="/Candidate_Biden.svg" alt="Joe Biden" />
      case "Jorgensen":
        return <img className="answerImg" src="/Candidate_Jorgensen.svg" alt="Jo Jorgensen" />
      case "Hawkins":
        return <img className="answerImg" src="/Candidate_Hawkins.svg" alt="Howie Hawkins" />
    }
  }

  // const tweet = questions[props.index]
  const tweet = fullTweets[props.index]
  const tweetTime = Date.parse(tweet.tweet.created_at);
  const tweetDate = new Date(tweetTime)
  const parsedDate = tweetDate.toLocaleDateString(undefined, {year: 'numeric', month: 'long', day: 'numeric'})
  const buttons = tweet.answers.map(answer => {
    if(tweet.answer === answer){
      return (
      <div className="answerBtn" key='0' onClick={() => props.onAnswer("true")}>
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
              <i className="fab fa-twitter"></i>
            </div>
            <div className="tweetHead">
              <img className="tweetImg" src={tweet.tweet.profile_image_url} />
              <div className="headNames">
                <h4 className="realName">{tweet.tweet.name}</h4>
                <h5 className="username">{"@" + tweet.tweet.username}</h5>
              </div>
            </div>
            <p className="tweetText">{tweet.tweet.text}</p>
            <p className="tweetDate">{parsedDate}</p>
            {/* <div className="tweet-it">
              <Tweet tweetId={tweet.question} />
            </div> */}
      </div>
      <div className="answerBtns">
        {buttons}
      </div>
    </div>
  )
}

export default Question;