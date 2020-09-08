import React from 'react';

function Question(props) {
  return (
    <div>
      <h2>{props.question}</h2>
      <button value="true" onClick={props.onAnswer} disabled={props.buttonDisable}>{props.trueAnswer}</button>
      <button value="false" onClick={props.onAnswer} disabled={props.buttonDisable}>{props.falseAnswer}</button>
      <p className={props.infoHide}>{props.info}</p>
    </div>
  )
}

export default Question;