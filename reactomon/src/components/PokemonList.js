import React, { useState, useEffect } from "react";
import PokemonImage from "./PokemonImage";
import { Link } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import { useBlackTheme } from "../context/ThemeContext.js";

const PokemonList = () => {
  const [items, setItems] = useState({
    next: null,
    previous: null,
    results: [],
  });
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon");

  const blackTheme = useBlackTheme();

  const cardStyles = {
    backgroundColor: blackTheme ? "black" : "steelblue",
  };

  const btnStyles = {
    backgroundColor: blackTheme ? "black" : "crimson",
    color: blackTheme ? "dodgerblue" : "gold",
    position: "absolute",
    zIndex: "2",
    fontWeight: "600",
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
          </Card>
        ))}
      </CardContainer>
      <PrevButton
        className="btn"
        onClick={() => setUrl(items.previous)}
        style={btnStyles}
      >
        Previous
      </PrevButton>
      <NextButton
        className="btn"
        onClick={() => setUrl(items.next)}
        style={btnStyles}
      >
        Next
      </NextButton>
    </div>
  );
};

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  text-align: center;
  margin: 3% 5% 0% 5%;
  z-index: 2;
  position: fixed;
`;

const Card = styled.div`
  padding: 0.5%;
  margin: 0.5%;
  width: "110px";
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

export default PokemonList;
