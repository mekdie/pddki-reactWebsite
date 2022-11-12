import React, { Component } from "react";
import { Link } from "react-router-dom";

class NotFound extends Component {
  render() {
    return (
      <div>
        <h1>Oops! You seem to be lost.</h1>
        <p>Back to home:</p>
        <Link to="/">Home</Link>
      </div>
    );
  }
}

export default NotFound;
