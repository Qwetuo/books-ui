import React, { Component } from "react";

const API_HOST = process.env.REACT_APP_BOOKS_API || "http://localhost:3000";

class Authors extends Component {
  constructor() {
    super();
    this.state = {
      authors: []
    };
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
    await this.getAuthors();
  }

  render() {
    return (
      <div>
        <h1>AUTHORS</h1>
        {this.state.authors.map(author => {
          return <li key={author._id}>{author.name}</li>;
        })}
      </div>
    );
  }
}

export default Authors;
