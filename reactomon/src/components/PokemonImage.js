import axios from "axios";
import React, { useState, useEffect } from "react";

const PokemonDetail = (props) => {
  const [id, setId] = useState();
  const [url] = useState(props.url);

  useEffect(() => {
    axios.get(url).then((response) => {
      setId(response.data.id);
    });
  }, [url]);

  return (
    <div>
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
        alt="pokemon"
      ></img>
    </div>
  );
};

export default PokemonDetail;
