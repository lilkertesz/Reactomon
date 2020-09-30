import React, { useContext } from "react";
import { CatchedContext } from "../context/CatchedContext";
import styled from "styled-components";
import PokemonImage from "./PokemonImage";
import { useBlackTheme } from "../context/ThemeContext.js";
import { Link } from "react-router-dom";

const CatchedList = () => {
  const [catched] = useContext(CatchedContext);

  const blackTheme = useBlackTheme();

  const cardStyles = {
    backgroundColor: blackTheme ? "black" : "steelblue",
  };

  return (
    <CardContainer>
      {catched.map((item) => (
        <Card className="card" key={item.name} style={cardStyles}>
          <Link to={`/pokemons/${item.url.split("/").slice(-2).slice(0, -1)}`}>
            <div style={{ color: "white", fontWeight: "600" }}>{item.name}</div>
          </Link>
          <PokemonImage url={item.url}></PokemonImage>
        </Card>
      ))}
    </CardContainer>
  );
};

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  text-align: center;
  margin: 2% 5% 0% 5%;
  z-index: 2;
  position: absolute;
`;

const Card = styled.div`
  padding: 0.5%;
  margin: 0.5%;
  :hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.8);
  }
`;

export default CatchedList;
