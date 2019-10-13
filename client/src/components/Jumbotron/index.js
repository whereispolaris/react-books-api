import React from 'react';
import { Route, Switch } from 'react-router-dom';

const Jumbotron = () => {
    return (
        <div className="jumbotron">
            <Switch>
                <Route exact path="/" render={() => <h1 className="display-4">React Google Books</h1>} />
                <Route exact path="/saved" render={() => <h1 className="display-4">Saved Books</h1>} />
            </Switch>
            <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
        </div>
    )
}

export default Jumbotron;