import React from "react";
import Header from "./components/Header";
import Jumbotron from "./components/Jumbotron";
import Home from "./components/Home";
import Saved from "./components/Saved";
import NotFound from "./components/NotFound";
import { BrowserRouter, Route, Switch } from 'react-router-dom';


import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Jumbotron />
        <div className="container-fluid">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/saved" component={Saved} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>

  );
}

export default App;
