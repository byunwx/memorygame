import React from "react";
import "./Jumbotron.css";

const Jumbotron = ({ children }) => (
  <div className="jumbotron text-center">
    <h1>React Memory Game</h1>
    <p>
      Click an image to earn points, but don't click anything more than once!
    </p>
    <h2>{children}</h2>
  </div>
);

export default Jumbotron;
