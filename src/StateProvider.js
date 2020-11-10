import React, { createContext, useContext, useReducer } from "react";

//Preparing The data Layer
export const StateContext = createContext();

//Higer order componernt to wrap the app provide
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

//we use the hook
export const useStateValue = () => useContext(StateContext);
