import React from "react";
// import { Link, Route, Switch } from "react-router-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import PokemonList from "./components/PokemonList";
import TypeList from "./components/TypeList";
// import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <div>
        <nav className="navbar navbar-light">
          <ul className="nav navbar-nav">
            <li>
              <Link to="/pokemons">pokemons</Link>
            </li>
            <li>
              <Link to="/types">types</Link>
            </li>
          </ul>
        </nav>
        <Route path="/pokemons" component={PokemonList} />
        <Route path="/types" component={TypeList} />
      </div>
    </Router>
  );
}

export default App;
