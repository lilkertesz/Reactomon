import React from "react";
import { useCatchedContext } from "../context/CatchedContext";
import styled from "styled-components";
import PokemonImage from "./PokemonImage";
import { useBlackTheme } from "../context/ThemeContext.js";
import { Link } from "react-router-dom";

const CatchedList = () => {
  const [catched] = useCatchedContext();

  const blackTheme = useBlackTheme();

  const cardStyles = {
    backgroundColor: blackTheme ? "black" : "steelblue",
  };

  return (
    <div>
      <CatchedHeader>Catched Pokemons:</CatchedHeader>
      <CardContainer>
        {catched.map((item) => (
          <Card className="card" key={item.name} style={cardStyles}>
            <Link
              to={`/pokemons/${item.url.split("/").slice(-2).slice(0, -1)}`}
            >
              <FontStyle>{item.name}</FontStyle>
            </Link>
            <PokemonImage url={item.url}></PokemonImage>
          </Card>
        ))}
      </CardContainer>
    </div>
  );
};

const FontStyle = styled.div`
  color: white;
  font-weight: 600;
  cursor: pointer;
`;

const CardContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  text-align: center;
  margin: 2% 5% 0% 5%;
  z-index: 2;
  position: relative;
`;

const Card = styled.div`
  padding: 0.5%;
  margin: 0.5%;
  :hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.8);
  }
  width: 110px;
`;

const CatchedHeader = styled.h3`
  margin-left: 5%;
  position: relative;
  z-index: 2;
`;

export default CatchedList;
