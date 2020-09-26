import axios from "axios";
import React, { useState, useEffect } from "react";

const Ability = (props) => {
  const [items, setItems] = useState({
    id: null,
    description: [],
  });
  const [url] = useState(props.url);

  useEffect(() => {
    axios.get(url).then((response) => {
      setItems({
        id: response.data.id,
        description: response.data.effect_entries,
      });
    });
  }, [url]);

  return (
    <div>
      {items.description.map((descr) =>
        descr.language.name === "en" ? (
          <p key={descr.short_effect}>{descr.short_effect}</p>
        ) : (
          <div></div>
        )
      )}
    </div>
  );
};

export default Ability;
