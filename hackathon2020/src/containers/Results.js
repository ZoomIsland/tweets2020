import React from 'react';
import { Share } from 'react-twitter-widgets'
import ProgressBar from '../components/ProgressBar/ProgressBar'

function Results (props) {
    const finalTally = () => {
    let totalRight = 0;
    for (let i=0; i < props.answers.length; i++) {
        if (props.answers[i] === true) {
            totalRight++;
        }
    }
    let percent = (totalRight / 20) * 100;
    return percent;
    }
    return (
        <div className="mainPage">
            <ProgressBar answers={props.answers}/>
            <h1>Complete!</h1>

            <div className="results">
                {finalTally()}
            </div>
            <div className="shareTweet">
                <Share options={{
                    text: "I got 88%! Find out how well you know your possible presidents' twitter habits!",
                }}
                url={
                    '/'
                }/> 
                <h4>Tweet your score!</h4>
            </div>
            <h3 className="endMsg">You should totally put this knowledge to good use...</h3>
            <a className="regLink" href="https://www.vote.org/am-i-registered-to-vote/"><button className="regVote">Register to vote</button></a>
        </div>
    )
}

export default Results;