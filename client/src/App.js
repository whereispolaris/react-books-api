import React, { Component } from "react";
import Header from "./components/Header";
import Jumbotron from "./components/Jumbotron";
import BookSearch from "./components/BookSearch";
import BookResults from "./components/BookResults";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Header />
        <Jumbotron />
        <BookSearch />
        <hr />
        <BookResults />
      </div>
    );
  }
}

export default App;
