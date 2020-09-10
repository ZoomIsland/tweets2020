import React from 'react';

function Qheader(props) {
  return (
    <h2 className={props.headColor + " who"}>{props.header}</h2>
  )
}

export default Qheader;