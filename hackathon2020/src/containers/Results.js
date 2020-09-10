import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import ProgressBar from '../components/ProgressBar/ProgressBar'
import ProgressProvider from "./ProgressProvider";
import './Results.css';

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

    let score = finalTally();
    
    const needDominantBaselineFix = true;
    
    return (
        <div className="mainPage">
            <ProgressBar answers={props.answers}/>
            <h1 className="green">Your Score</h1>

            <div className="results">
                <ProgressProvider valueStart={10} valueEnd={score}>
                    {score => (
                    <CircularProgressbar 
                    value={score}
                    text={<tspan dy={needDominantBaselineFix ? 4 : 0} className="score">{`${score}%`}</tspan>} 
                    strokeWidth={10}
                    styles={buildStyles({
                        textColor: "#10C8B2",
                        pathColor: "#10C8B2",
                        trailColor: "#E5E5E5",
                        textSize: "29px",
                      })}
                    />
                    )}
                </ProgressProvider>
            </div>
            <div className="shareTweet">
            <a className="share" href={`https://twitter.com/intent/tweet?text=I%20got%20${score}%25%20right%20on%20a%20Presidential%20Tweet%20test!%20Try%20it%20out%3A&url=http%3A%2F%2Ftweets2020.herokuapp.com`}>
                <div className="shareText">
                    Tweet My Score
                </div>
            </a>
            </div>
            <h3 className="endMsg">You should totally put this knowledge to good use...</h3>
            <a className="regLink" href="https://www.vote.org/am-i-registered-to-vote/" target="_blank"><button className="regVote regBtn">Register to vote</button></a>
        </div>
    )
}

export default Results;