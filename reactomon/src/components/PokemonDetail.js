import React, { useState, useEffect } from "react";
import axios from "axios";
import Ability from "./Ability";

const PokemonDetail = (props) => {
  const [items, setItems] = useState({
    experience: null,
    height: null,
    weight: null,
    abilities: [],
    name: null,
    sprites: {},
  });
  const [url] = useState(
    `https://pokeapi.co/api/v2/pokemon/${props.match.params.id}`
  );

  useEffect(() => {
    axios.get(url).then((response) =>
      setItems({
        experience: response.data.base_experience,
        height: response.data.height,
        weight: response.data.weight,
        abilities: response.data.abilities,
        name: response.data.name,
        sprites: response.data.sprites,
      })
    );
  }, [url]);

  return (
    <div className="pokemon-detail">
      <h3>{items.name}</h3>
      <div>
        <img src={items.sprites.front_default} alt=""></img>
        <img src={items.sprites.back_default} alt=""></img>
      </div>
      <div>Experience: {items.experience}</div>
      <div>Height: {items.height}</div>
      <div>Weight: {items.weight}</div>
      <p className="abilities">
        Abilities:
        {items.abilities.map((ability) => (
          <div>
            <ul>
              <li key={ability.ability.name}>{ability.ability.name}</li>
            </ul>
            <Ability url={ability.ability.url}></Ability>
          </div>
        ))}
      </p>
    </div>
  );
};

export default PokemonDetail;
