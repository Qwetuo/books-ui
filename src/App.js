import React, { Component } from "react";
import "./App.css";
import Books from "./components/Books";
import Authors from "./components/Authors";

// const API_HOST = process.env.REACT_APP_BOOKS_API || "http://localhost:3000";

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <Books />
        <Authors />
      </div>
    );
  }
}

export default App;
