import React, { useState, useEffect, useContext } from "react";
import PokemonImage from "./PokemonImage";
import { Link } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import { useBlackTheme } from "../context/ThemeContext.js";
import { CatchedContext } from "../context/CatchedContext";

const PokemonList = () => {
  const [items, setItems] = useState({
    next: null,
    previous: null,
    results: [],
  });
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon");

  const blackTheme = useBlackTheme();

  const [catched, setCatched] = useContext(CatchedContext);

  const catchedPokemons = catched.map((item) => item.name);

  const cardStyles = {
    background: blackTheme
      ? "linear-gradient(to bottom, black, darkgrey)"
      : "linear-gradient(to top, #67b26b, #4ca2cb)",
  };

  const btnStyles = {
    backgroundColor: blackTheme ? "darkgrey" : "#4ca2cb",
    color: blackTheme ? "black" : "white",
    position: "absolute",
    zIndex: "2",
    fontWeight: "600",
    padding: "0.5%",
  };

  useEffect(() => {
    axios.get(url).then((response) =>
      setItems({
        next: response.data.next,
        previous: response.data.previous,
        results: response.data.results,
      })
    );
  }, [url]);

  return (
    <div>
      <CardContainer>
        {items.results.map((item) => (
          <Card className="card" key={item.name} style={cardStyles}>
            <Link
              to={`/pokemons/${item.url.split("/").slice(-2).slice(0, -1)}`}
            >
              <div style={{ color: "white", fontWeight: "600" }}>
                {item.name}
              </div>
            </Link>
            <PokemonImage url={item.url}></PokemonImage>
            {!catchedPokemons.includes(item.name) ? (
              <CatchButton
                onClick={() =>
                  setCatched((prevCatched) => [
                    ...prevCatched,
                    { name: item.name, url: item.url },
                  ])
                }
              >
                O
              </CatchButton>
            ) : (
              <p style={{ fontWeight: "600" }}>catched!</p>
            )}
          </Card>
        ))}
      </CardContainer>
      <PrevButton
        className="btn"
        onClick={() => setUrl(items.previous)}
        style={btnStyles}
      >
        🡸
      </PrevButton>
      <NextButton
        className="btn"
        onClick={() => setUrl(items.next)}
        style={btnStyles}
      >
        🡺
      </NextButton>
    </div>
  );
};

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  text-align: center;
  margin: 2% 5% 0% 5%;
  z-index: 2;
  position: fixed;
`;

const Card = styled.div`
  padding: 0.5%;
  margin: 0.5%;
  :hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.8);
  }
`;

const NextButton = styled.button`
  margin: 30% 40% 0% 0%;
  right: 0;
`;

const PrevButton = styled.button`
  margin: 30% 0% 0% 40%;
  left: 0;
`;

const CatchButton = styled.button`
  background: linear-gradient(
    to bottom,
    #ff0038 0%,
    #ff0038 50%,
    #ddd 50%,
    #ddd 100%
  );
  font-weight: 600;
  border-radius: 50px;
  width: 30px;
  margin: auto;
`;

export default PokemonList;
