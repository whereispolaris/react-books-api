import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import "./Jumbotron.css"

const Jumbotron = () => {
    return (
        <div className="jumbotron text-center">
            <Switch>
                <Route exact path="/" render={() => [<h1 className="display-2">React Google Books</h1>, <Link to="/saved" className="btn-dark jumbo-btn">View Saved Books</Link>, <p className="lead">Search for any book title, author, or topic!</p>]} />
                <Route exact path="/saved" render={() => [<h1 className="display-2">Saved Books</h1>, <Link to="/" className="btn-dark jumbo-btn"> Search again</Link>, <p className="lead">Manage Your Saved Books </p>]} />
            </Switch>
        </div>
    )
}

export default Jumbotron;