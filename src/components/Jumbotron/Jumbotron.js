import React from "react";
import "./Jumbotron.css";

// Jumbotron component
const Jumbotron = props => (
  <div className="jumbotron jumbotron-fluid bg-cover text-white text-center">
    <h1 className="display-4 font-weight-bold">Welcome to the Wakanda Clicky Game!</h1>
    <p className="lead font-weight-bold">Click on an image to earn points, but don't click the same image twice!</p>
  </div>
);
export default Jumbotron;