import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { useBlackTheme } from "../context/ThemeContext.js";

const TypeList = (props) => {
  const [types, setTypes] = useState({
    results: [],
  });
  const [url] = useState("https://pokeapi.co/api/v2/type");

  const blackTheme = useBlackTheme();

  const cardStyles = {
    backgroundColor: blackTheme ? "black" : "steelblue",
  };

  useEffect(() => {
    axios
      .get(url)
      .then((response) => setTypes({ results: response.data.results }));
  }, [url]);

  return (
    <Types>
      {types.results.map((item) => (
        <Card className="card" key={item.name} style={cardStyles}>
          {item.name}
        </Card>
      ))}
    </Types>
  );
};

const Types = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  text-align: center;
  margin: 3% 35% 0% 35%;
  z-index: 2;
  position: fixed;
`;

const Card = styled.div`
  padding: 1%;
  margin: 0.5%;
  font-weight: 600;
  color: white;
  :hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.8);
  }
`;

export default TypeList;
