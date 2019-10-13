import React, { Component } from "react";
import Header from './components/Header';
import Jumbotron from "./components/Jumbotron";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Jumbotron />
      </div>
    );
  }
}

export default App;
