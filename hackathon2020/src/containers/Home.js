import React from 'react';
import { Link } from 'react-router-dom';

import Register from '../components/Register/Register'


function Home () {
    return (
        <div className="mainPage">

           <div className="img-placeholder">

           </div>

           <h3 className="guess">Guess which presedential candidate tweeted what!</h3>
           <br />
           <h2>Ready to Play?</h2>
           <Link to='/questions'>
               <button className="startGame">Start Game</button>
            </Link>
           <Register />
        </div>
    )
}

export default Home;