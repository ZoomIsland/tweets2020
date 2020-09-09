import React from 'react';
import './Register.css';

function Register() {
  return (
    <div className="regBtnDiv">
      <a href="https://www.vote.org/am-i-registered-to-vote/" target="_blank">
        <button className="registerBtn">
          Register to vote
        </button>
      </a>
    </div>
  )
}

export default Register;