import React from 'react';
import { Share } from 'react-twitter-widgets'
import ProgressBar from '../components/ProgressBar/ProgressBar'

function Results () {
    return (
        <div className="mainPage">
            <ProgressBar answers={[1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2]}/>
            <h1>Complete!</h1>

            <div className="results">

            </div>
            {/* <button>Tweet your score!</button> */}
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