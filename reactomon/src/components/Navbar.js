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
    color: blackTheme ? "black" : "dodgerblue",
  };

  const navStyles = {
    backgroundColor: blackTheme ? "black" : "gold",
    color: blackTheme ? "white" : "black",
  };
  return (
    <Navigation className="navbar">
      <Card className="card" style={navStyles}>
        <Link to="/pokemons" style={{ textDecoration: "none" }}>
          POKEMONS
        </Link>
      </Card>
      <Link to="/">
        <img src={require("../images/logo.JPG")} alt="pokelogo" width="100px" />
      </Link>
      <Card className="card" style={navStyles}>
        <Link to="/types" style={{ textDecoration: "none" }}>
          POKETYPES
        </Link>
      </Card>
      <Black className="btn" onClick={toggleTheme} style={themeStyles}>
        I ❤ {currentTheme}
      </Black>
    </Navigation>
  );
};

const Card = styled.div`
  padding: 1% 2%;
  text-decoration: none;
  font-weight: 700;
`;

const Navigation = styled.div`
  margin-left: 35%;
  margin-right: 5%;
`;

const Black = styled.button`
  width: 110px;
  margin-left: 35%;
  font-weight: 600;
`;

export default Navbar;
