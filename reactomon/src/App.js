import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import PokemonDetail from "./components/PokemonDetail";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <Navbar></Navbar>
      <Router>
        <Route path="/pokemons/:id" component={PokemonDetail}></Route>
      </Router>
    </React.Fragment>
  );
}

export default App;
