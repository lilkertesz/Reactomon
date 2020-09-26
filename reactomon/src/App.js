import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import PokemonDetail from "./components/PokemonDetail";
import PokemonList from "./components/PokemonList";
import TypeList from "./components/TypeList";
import Background from "./images/pokemons.JPG";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <Navbar></Navbar>
      <Switch>
        <Route path="/" exact />
        <Route path="/pokemons" component={PokemonList} exact />
        <Route path="/pokemons/:id" component={PokemonDetail} exact />
        <Route path="/types" component={TypeList} exact />
      </Switch>
      <div>
        <img src={Background} alt="" className="main-image"></img>
      </div>
    </React.Fragment>
  );
}

export default App;
