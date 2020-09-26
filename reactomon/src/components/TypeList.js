import React, { useState, useEffect } from "react";
import axios from "axios";

const TypeList = (props) => {
  const [types, setTypes] = useState({
    results: [],
  });
  const [url] = useState("https://pokeapi.co/api/v2/type");

  useEffect(() => {
    axios
      .get(url)
      .then((response) => setTypes({ results: response.data.results }));
  }, [url]);

  return (
    <div className="types">
      {types.results.map((item) => (
        <div className="card bg-info pokefont" key={item.name}>
          {item.name}
        </div>
      ))}
    </div>
  );
};

export default TypeList;
