import React from "react";
import Navbar from "./components/Navbar";
import PokemonDetail from "./components/PokemonDetail";
import PokemonList from "./components/PokemonList";
import TypeList from "./components/TypeList";
import CatchedList from "./components/CatchedList";
import Background from "./images/pokemons.JPG";
import { Switch, Route } from "react-router-dom";
import styled from "styled-components";
import { ThemeProvider } from "./context/ThemeContext.js";
import { CatchedProvider } from "./context/CatchedContext.js";

function App() {
  return (
    <ThemeProvider>
      <CatchedProvider>
        <Navbar></Navbar>
        <Switch>
          <Route path="/" exact />
          <Route path="/pokemons" component={PokemonList} exact />
          <Route path="/pokemons/:id" component={PokemonDetail} exact />
          <Route path="/types" component={TypeList} exact />
          <Route path="/catched" component={CatchedList} exact />
        </Switch>
        <BackgroundImage
          src={Background}
          alt=""
          className="main-image"
        ></BackgroundImage>
      </CatchedProvider>
    </ThemeProvider>
  );
}

const BackgroundImage = styled.img`
  z-index: 1;
  opacity: 40%;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -35%);
`;

export default App;
