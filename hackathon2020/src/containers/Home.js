import React from 'react';
import { Link } from 'react-router-dom';
import Register from '../components/Register/Register'
import './Home.css'


function Home () {
    return (
        <div className="mainPage">

            <div className="twit-circ">
                <i class="fab fa-twitter home-twit"></i>
            </div>
            
            <div className="blue-home">
                <div className="candidates">
                    <img className="jorg-fig" src="/Candidate_Jorgensen.svg"/>
                    <img className="trump-fig" src="/Candidate_Trump.svg"/>
                    <img className="bid-fig" src="/Candidate_Biden.svg"/>
                    <img className="hawk-fig" src="/Candidate_Hawkins.svg"/>
                </div>
           </div>

            <div className="red-home">
                <div className="red-content">
                    <h3 className="guess">Guess which presidential candidate tweeted what!</h3>
                    <Link to='/questions'>
                        <button className="startGame">PLAY NOW</button>
                    </Link>
                </div>
           </div>

           <br />
           <Register />
        </div>
    )
}

export default Home;