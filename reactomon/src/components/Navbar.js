import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Navbar = () => {
  return (
    <Navigation className="navbar">
      <Card className="card bg-warning">
        <Link to="/pokemons" style={{ textDecoration: "none" }}>
          POKEMONS
        </Link>
      </Card>
      <Link to="/">
        <img src={require("../images/logo.JPG")} alt="pokelogo" width="100px" />
      </Link>
      <Card className="card bg-warning">
        <Link to="/types" style={{ textDecoration: "none" }}>
          POKETYPES
        </Link>
      </Card>
    </Navigation>
  );
};

const Card = styled.div`
  padding: 1% 2%;
  text-decoration: none;
  font-weight: 700;
  color: #dc3545;
`;

const Navigation = styled.div`
  margin-left: 30%;
  margin-right: 30%;
`;

export default Navbar;
