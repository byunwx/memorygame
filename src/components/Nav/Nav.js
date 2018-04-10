import React from "react";
import "./Nav.css";

const Nav = (props) => (
  <nav className="navbar navbar-inverse navbar-fixed-top">
    <div className="container-fluid">
      <div className="col-md-4 col-sm-4">
        <a href="/" className="navbar-brand">
          byunwx.github.io
        </a>
      </div>
      <div className="col-md-4 col-sm-4">
        <h2>Score: {props.score}</h2>
      </div>
      <div className="col-md-4 col-sm-4">
        <h2>Top Score: {props.topScore}</h2>
      </div>
    </div>
  </nav>
);

export default Nav;
