import React from 'react';
import { Share } from 'react-twitter-widgets'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import ProgressBar from '../components/ProgressBar/ProgressBar'

function Results (props) {
    const finalTally = () => {
    let totalRight = 0;
    for (let i=0; i < props.answers.length; i++) {
        if (props.answers[i] === true) {
            totalRight++;
        }
    }
    let percent = Math.floor((totalRight / 10) * 100);
    return percent;
    }
    return (
        <div className="mainPage">
            <ProgressBar answers={props.answers}/>
            <h1>Complete!</h1>

            <div className="results">
                <CircularProgressbar 
                    value={finalTally()} 
                    text={`${finalTally()}%`}
                    counterClockwise={true}
                />
            </div>
            <div className="shareTweet">
                <Share options={{
                    text: `I got ${finalTally()}%! Find out how well you know your possible presidents' twitter habits!`,
                }}
                url={
                    '/'
                }/> 
                <h4>Tweet your score!</h4>
            </div>
            <h3 className="endMsg">You should totally put this knowledge to good use...</h3>
            <a className="regLink" href="https://www.vote.org/am-i-registered-to-vote/" target="_blank"><button className="regVote">Register to vote</button></a>
        </div>
    )
}

export default Results;