import { createContext, useReducer, useContext  } from "react";

export const useReducerWithLogger = (reducer: any, initialState: any) => {

  console.log({
    reducer,
    initialState
  });
  return useReducer(reducer, initialState);
};