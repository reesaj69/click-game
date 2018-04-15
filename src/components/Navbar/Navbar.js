import React from "react";
import "./Navbar.css";

// Navbar component
const Navbar = props => (
  <nav className="navbar fixed-top navbar-dark navbar-custom p-3">
    <span className="navbar-brand">Black Panther Pictures</span>
    <span className="navbar-text text-white">{props.message}</span>
    <span className="navbar-text text-white">Score: {props.score}, Top Score: {props.topScore}</span>
  </nav>
);

export default Navbar;
