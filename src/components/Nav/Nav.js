import React from "react";
import "./Nav.css";

const Nav = (props) => (
  <nav className="navbar navbar-inverse navbar-fixed-top">
    <div className="container-fluid">
      <div className="navbar-header">
        <a href="/" className="navbar-brand">
          React Memory Game
        </a>
      </div>
      <div className="col-md-4">
        <h2>Score: {props.score}</h2>
      </div>
      <div className="col-md-4">
        <h2>Top Score: {props.topScore}</h2>
      </div>
    </div>
  </nav>
);

export default Nav;
