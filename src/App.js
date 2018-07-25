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

// import React, { Component } from "react";
// import "./App.css";

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       books: []
//     };
//   }
//   render() {
//     return (
//       <div>
//         {this.state.books.map(book => {
//           return <li key={book._id}>{book.title}</li>;
//         })}
//       </div>
//     );
//   }
//   async componentDidMount() {
//     const response = await fetch(
//       process.env.REACT_APP_BOOKS_API || "http://localhost:3000/books"
//     );
//     console.log("response", response);
//     const books = await response.json();
//     console.log("books", books);
//     this.setState({
//       books: books
//     });
//   }
// }

// export default App;

import React, { Component } from "react";
import "./App.css";

const API_HOST = process.env.REACT_APP_BOOKS_API || "http://localhost:3000";

class App extends Component {
  constructor() {
    super();
    this.state = {
      books: [],
      authors: []
    };
  }

  async getBooks() {
    const url = `${API_HOST}/books`;
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      this.setState({
        books: data
      });
    }
  }

  async getAuthors() {
    const url = `${API_HOST}/authors`;
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      this.setState({
        authors: data
      });
    }
  }

  async componentDidMount() {
    await this.getBooks();
    await this.getAuthors();
  }

  render() {
    return (
      <div>
        <h1>BOOKS</h1>
        {this.state.books.map(book => {
          return <li key={book._id}>{book.title}</li>;
        })}
        <h1>AUTHORS</h1>
        {this.state.authors.map(authors => {
          return <li key={authors._id}>{authors.name}</li>;
        })}
      </div>
    );
  }
}

export default App;
