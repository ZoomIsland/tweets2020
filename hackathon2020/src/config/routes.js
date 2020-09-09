import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../containers/Home'
import QuestionContainer from '../containers/QuestionContainer'
import Results from '../containers/Results'


function Routes() {

    return(
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/questions' component={QuestionContainer} />
            <Route exact path='/results' component={Results} />
        </Switch>
    )
}

export default Routes;