import React from 'react';
import { Route, Switch } from 'react-router-dom';
import "./Jumbotron.css"

const Jumbotron = () => {
    return (
        <div className="jumbotron text-center">
            <Switch>
                <Route exact path="/" render={() => <h1 className="display-2">React Google Books</h1>} />
                <Route exact path="/saved" render={() => <h1 className="display-2">Saved Books</h1>} />
            </Switch>
            <p className="lead">Search for any book title, author, or topic!</p>
        </div>
    )
}

export default Jumbotron;