import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PokemonList from "./PokemonList";
import TypeList from "./TypeList";
import "./style.css";

class Navbar extends Component {
  render() {
    return (
      <Router>
        <div className="navbar">
          <div className="card bg-warning">
            <Link to="/pokemons">POKEMONS</Link>
          </div>
          <img
            src={require("./images/logo.JPG")}
            alt="pokelogo"
            width="100px"
          />
          <div className="card bg-warning">
            <Link to="/types">POKETYPES</Link>
          </div>
        </div>
        <Route path="/pokemons" exact component={PokemonList} />
        <Route path="/types" exact component={TypeList} />
      </Router>
    );
  }
}

export default Navbar;
