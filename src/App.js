// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

// export default App;

import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      books: []
    };
  }
  render() {
    return (
      <div>
        {this.state.books.map(book => {
          return <li key={book._id}>{book.title}</li>;
        })}
      </div>
    );
  }
  async componentDidMount() {
    const response = await fetch(
      process.env.REACT_APP_BOOKS_API || "http://localhost:3000/books"
    );
    console.log("response", response);
    const books = await response.json();
    console.log("books", books);
    this.setState({
      books: books
    });
  }
}

export default App;
