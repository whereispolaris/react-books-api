import React, { Component } from "react";
import Header from "./components/Header";
import Jumbotron from "./components/Jumbotron";
import BookSearch from "./components/BookSearch";
import BookResults from "./components/BookResults";
import Saved from "./components/Saved";
import NotFound from "./components/NotFound";
import { BrowserRouter, Route, Switch } from 'react-router-dom';


import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <div className="container-fluid">
          <Switch>
            <Route exact path="/" component={Jumbotron, BookSearch, BookResults} />
            <Route exact path="/saved" component={Saved} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>

  );
}

export default App;
