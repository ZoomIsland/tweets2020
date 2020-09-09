import React from 'react';
import { Tweet } from 'react-twitter-widgets';
import questions from '../../Questions'

function Question(props) {
  const answers = ['Joe Biden', 'Donald Trump', 'Jo Jorgensen', 'Howie Hawkins'];

  const buttons = answers.map(answer => {
    if(props.questionInfo.answer === answer){
      return <button disabled={props.buttonDisable} value="true" onClick={props.onAnswer}>{answer}</button>  
    }else{
      return <button disabled={props.buttonDisable} value="false" onClick={props.onAnswer}>{answer}</button>
    }
  })

  console.log(props.questionInfo.question);
  const tweetId = questions[props.index].question;
  return (

    <div>
      <div id="test">
            <div className={"censor " + props.censorHide}></div>
            <Tweet tweetId={tweetId} />
      </div>
      <div>

        {buttons}
        <br></br>
        <button className={props.infoHide} onClick={props.onNext}>Next Tweet</button>
      </div>
    </div>
  )
}

export default Question;