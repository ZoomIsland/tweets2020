import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../containers/Home'
import QuestionContainer from '../containers/QuestionContainer'
import Results from '../containers/Results'


function Routes(props) {
    const { onAnswer, answers } = props;

    return(
        <Switch>
            <Route exact path='/' component={Home} />
            <Route 
                exact path='/questions' 
                render={(props) => <QuestionContainer {...props} onAnswer={onAnswer} answers={answers} />} />
            <Route 
                exact path='/results' 
                render={(props) => <Results {...props} answers={answers} />} />
        </Switch>
    )
}

export default Routes;