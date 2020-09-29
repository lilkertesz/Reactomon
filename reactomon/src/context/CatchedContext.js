import React, { useState, createContext } from "react";

export const CatchedContext = createContext();

export const CatchedProvider = (props) => {
  const [catched, setCatched] = useState([]);

  return (
    <CatchedContext.Provider value={[catched, setCatched]}>
      {props.children}
    </CatchedContext.Provider>
  );
};
