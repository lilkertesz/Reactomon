import React, { useState, createContext, useContext } from "react";

export const CatchedContext = createContext();

export const useCatchedContext = () => {
  return useContext(CatchedContext);
};

export const CatchedProvider = (props) => {
  const [catched, setCatched] = useState([]);

  return (
    <CatchedContext.Provider value={[catched, setCatched]}>
      {props.children}
    </CatchedContext.Provider>
  );
};
