import React from 'react';
import { Share } from 'react-twitter-widgets'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import ProgressBar from '../components/ProgressBar/ProgressBar'
import ChangingProgressProvider from "./ChangingProgressProvider";
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
    return (
        <div className="mainPage">
            <ProgressBar answers={props.answers}/>
            <h1 className="green">Complete!</h1>

            <div className="results">
                <ChangingProgressProvider values={[0, score]}>
                    {score => (
                    <CircularProgressbar 
                    value={score}
                    text={`${score}%`} 
                    counterClockwise={true}
                    strokeWidth={10}
                    styles={buildStyles({
                        textColor: "#10C8B2",
                        pathColor: "#10C8B2",
                        trailColor: "white",
                        textSize: "35px",
                      })}
                    />
                    )}
                </ChangingProgressProvider>
            </div>

            {/* <div className="results">
                <CircularProgressbar 
                    value={finalTally()} 
                    text={`${finalTally()}%`}
                    counterClockwise={true}
                    strokeWidth={10}
                    styles={buildStyles({
                        textColor: "#10C8B2",
                        pathColor: "#10C8B2",
                        trailColor: "white",
                        textSize: "35px",
                      })}
                />
            </div> */}
            <div className="shareTweet">
            <a className="share" href="https://twitter.com/intent/tweet?text=Hello%20world">
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