import React from 'react';
import './ProgressBar.css';

function ProgressBar(props) {
    const progress = ((props.answers.length/10)*100).toString()+ '%';
  return (
    <div className="bar">
      <div className="complete" style={{width: progress}}></div>
    </div>
  )
}

export default ProgressBar;