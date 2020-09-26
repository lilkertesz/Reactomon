import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="card bg-warning">
        <Link to="/pokemons">POKEMONS</Link>
      </div>
      <Link to="/">
        <img src={require("../images/logo.JPG")} alt="pokelogo" width="100px" />
      </Link>
      <div className="card bg-warning">
        <Link to="/types">POKETYPES</Link>
      </div>
    </div>
  );
};

export default Navbar;
