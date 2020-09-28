import React from "react";
import Navbar from "./components/Navbar";
import PokemonDetail from "./components/PokemonDetail";
import PokemonList from "./components/PokemonList";
import TypeList from "./components/TypeList";
import Background from "./images/pokemons.JPG";
import { Switch, Route } from "react-router-dom";
import styled from "styled-components";
import { ThemeProvider } from "./context/ThemeContext.js";

function App() {
  return (
    <ThemeProvider>
      <Navbar></Navbar>
      <Switch>
        <Route path="/" exact />
        <Route path="/pokemons" component={PokemonList} exact />
        <Route path="/pokemons/:id" component={PokemonDetail} exact />
        <Route path="/types" component={TypeList} exact />
      </Switch>
      <BackgroundImage
        src={Background}
        alt=""
        className="main-image"
      ></BackgroundImage>
    </ThemeProvider>
  );
}

const BackgroundImage = styled.img`
  margin-left: 5%;
  z-index: 1;
  position: fixed;
  opacity: 40%;
`;

export default App;
