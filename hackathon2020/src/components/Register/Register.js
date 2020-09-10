import React from 'react';
import './Register.css';

function Register() {
  return (
    <div className="regBtnDiv">
      <a href="https://www.vote.org/am-i-registered-to-vote/" target="_blank">
        <button className="registerBtn">
          <h3 className="reg-text">Register to vote</h3>
          <h3 className="reg-hov">Vote.org</h3>
        </button>
        <div>
        </div>
      </a>
    </div>
  )
}

export default Register;