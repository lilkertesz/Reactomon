import React, { useState, useEffect } from "react";
import PokemonImage from "./PokemonImage";
import { Link } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

const PokemonList = (props) => {
  const [items, setItems] = useState({
    next: null,
    previous: null,
    results: [],
  });
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon");

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
          <Card
            className="card bg-info"
            key={item.name}
            style={{ width: "110px" }}
          >
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
        className="btn btn-danger"
        onClick={() => setUrl(items.previous)}
      >
        Previous
      </PrevButton>
      <NextButton className="btn btn-danger" onClick={() => setUrl(items.next)}>
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
  :hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.8);
  }
`;

const NextButton = styled.button`
  margin: 30% 40% 0% 0%;
  position: absolute;
  right: 0;
  z-index: 2;
`;

const PrevButton = styled.button`
  margin: 30% 0% 0% 40%;
  position: absolute;
  left: 0;
  z-index: 2;
`;

export default PokemonList;
