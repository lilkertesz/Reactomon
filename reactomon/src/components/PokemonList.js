import React, { useState, useEffect } from "react";
import PokemonImage from "./PokemonImage";
import { Link } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import { useBlackTheme } from "../context/ThemeContext.js";
import { useCatchedContext } from "../context/CatchedContext";

const PokemonList = () => {
  const [items, setItems] = useState({
    next: null,
    previous: null,
    results: [],
  });
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon");

  const blackTheme = useBlackTheme();

  const [catched, setCatched] = useCatchedContext();

  const catchedPokemons = catched.map((item) => item.name);

  const cardStyles = {
    background: blackTheme
      ? "black"
      : "linear-gradient(to top, #67b26b, #4ca2cb)",
  };

  const btnStyles = {
    backgroundColor: blackTheme ? "black" : "#4ca2cb",
    color: "white",
    fontWeight: "600",
    display: "flex",
    marginTop: "30%",
    zIndex: "2",
    position: "relative",
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
              <FontStyle>{item.name}</FontStyle>
            </Link>
            {!catchedPokemons.includes(item.name) ? (
              <div>
                <PokemonImage url={item.url}></PokemonImage>
                <FontStyle
                  onClick={() =>
                    setCatched((prevCatched) => [
                      ...prevCatched,
                      { name: item.name, url: item.url },
                    ])
                  }
                >
                  Catch It!
                </FontStyle>
              </div>
            ) : (
              <div>
                <Link to={"/catched"}>
                  <CatchButton>O</CatchButton>
                </Link>
              </div>
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

const FontStyle = styled.div`
  color: white;
  font-weight: 600;
  cursor: pointer;
`;

const PrevButton = styled.button`
  float: left;
  margin-left: 3%;
`;

const NextButton = styled.button`
  float: right;
  margin-right: 3%;
`;

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
  width: 110px;
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
  border-radius: 50%;
  width: 50px;
  height: 50px;
  margin: 30px auto;
`;

export default PokemonList;
