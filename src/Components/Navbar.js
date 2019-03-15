import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <div className="navbar-button">
          <Link to="/">Home</Link>
        </div>
        <div className="navbar-button">
          <Link to="/about-me">About Me</Link>
        </div>
        <div className="navbar-button">
          <Link to="/portfolio">Portfolio</Link>
        </div>
      </div>
    );
  }
}

export default Navbar;
