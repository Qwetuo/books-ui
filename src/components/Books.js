import React, { Component } from "react";

const API_HOST = process.env.REACT_APP_BOOKS_API || "http://localhost:3000";

class Books extends Component {
  constructor() {
    super();
    this.state = {
      books: []
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

  async componentDidMount() {
    await this.getBooks();
  }

  render() {
    return (
      <div>
        <h1>BOOKS</h1>
        {this.state.books.map(book => {
          return <li key={book._id}>{book.title}</li>;
        })}
      </div>
    );
  }
}

export default Books;
