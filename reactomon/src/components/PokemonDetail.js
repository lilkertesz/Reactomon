import React, { useState, useEffect } from "react";
import axios from "axios";
import Ability from "./Ability";
import styled from "styled-components";

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
    <Details>
      <h3>{items.name}</h3>
      <div>
        <img src={items.sprites.front_default} alt=""></img>
        <img src={items.sprites.back_default} alt=""></img>
      </div>
      <div>Experience: {items.experience}</div>
      <div>Height: {items.height}</div>
      <div>Weight: {items.weight}</div>
      <Abilities>
        Abilities:
        {items.abilities.map((ability) => (
          <div key={ability.ability.name}>
            <ul style={{ listStyle: "circle" }}>
              <li>{ability.ability.name}</li>
            </ul>
            <Ability url={ability.ability.url}></Ability>
          </div>
        ))}
      </Abilities>
    </Details>
  );
};

const Details = styled.div`
  padding: 1%;
  width: 30%;
  background-color: white;
  opacity: 90%;
  border-radius: 5%;
  margin-left: 35%;
  z-index: 2;
  position: absolute;
  text-align: center;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.8);
`;

const Abilities = styled.div`
  text-align: left;
`;

export default PokemonDetail;
