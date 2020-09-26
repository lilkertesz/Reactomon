import React, { useState, useEffect } from "react";
import PokemonImage from "./PokemonImage";
import { Link } from "react-router-dom";
import axios from "axios";

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
      <div className="card-container">
        {items.results.map((item) => (
          <div className="card bg-info pokelist" key={item.name}>
            <Link
              to={`/pokemons/${item.url.split("/").slice(-2).slice(0, -1)}`}
            >
              <div className="pokefont">{item.name}</div>
            </Link>
            <PokemonImage url={item.url}></PokemonImage>
          </div>
        ))}
      </div>
      <button
        className="btn btn-danger prev-page"
        onClick={() => setUrl(items.previous)}
      >
        Previous
      </button>
      <button
        className="btn btn-danger next-page"
        onClick={() => setUrl(items.next)}
      >
        Next
      </button>
    </div>
  );
};

export default PokemonList;
