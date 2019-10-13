import React, { Component } from "react";
import Header from './components/Header';
import Jumbotron from "./components/Jumbotron";
import BookSearch from "./components/BookSearch";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Jumbotron />
        <BookSearch />
      </div>
    );
  }
}

export default App;
