import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import PokemonDetail from "./components/PokemonDetail";
import Background from "./images/pokemons.JPG";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <Navbar></Navbar>
      <Router>
        <Route path="/pokemons/:id" component={PokemonDetail}></Route>
      </Router>
      <div>
        <img src={Background} alt="" className="main-image"></img>
      </div>
    </React.Fragment>
  );
}

export default App;
