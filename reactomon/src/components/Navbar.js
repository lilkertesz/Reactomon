import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  useBlackTheme,
  useThemeToggle,
  useThemeName,
} from "../context/ThemeContext.js";

const Navbar = () => {
  const blackTheme = useBlackTheme();
  const toggleTheme = useThemeToggle();
  const currentTheme = useThemeName();

  const themeStyles = {
    backgroundColor: blackTheme ? "yellow" : "black",
    color: blackTheme ? "black" : "white",
  };

  const navBtnStyles = {
    backgroundColor: blackTheme ? "black" : "gold",
    color: blackTheme ? "white" : "black",
    fontWeight: "700",
  };

  return (
    <NavContainer>
      <Navigation className="navbar">
        <Link to="/pokemons" className="btn" style={navBtnStyles}>
          POKEMONS
        </Link>
        <Link to="/">
          <PokeLogo src={require("../images/logo.JPG")} alt="pokelogo" />
        </Link>
        <Link to="/types" className="btn" style={navBtnStyles}>
          POKETYPES
        </Link>
        <Black className="btn" onClick={toggleTheme} style={themeStyles}>
          I ❤ {currentTheme}
        </Black>
      </Navigation>
    </NavContainer>
  );
};

const PokeLogo = styled.img`
  width: 100px;
  margin: 5px 25px;
`;

const NavContainer = styled.div`
  z-index: 2;
  background-color: white;
  position: relative;
`;

const Navigation = styled.div`
  margin-left: 35%;
`;

const Black = styled.button`
  width: 110px;
  font-weight: 600;
  margin: auto;
`;

export default Navbar;
