import React from 'react';

function Question(props) {
  return (
    <div>
      <h2>{props.question}</h2>
      <button value="true" onClick={props.onAnswer}>{props.trueAnswer}</button>
      <button value="false" onClick={props.onAnswer}>{props.falseAnswer}</button>
    </div>
  )
}

export default Question;