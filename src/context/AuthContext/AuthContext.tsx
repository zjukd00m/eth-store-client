import { Tulpen_One } from "next/font/google";
import React, { createContext, useReducer } from "react";

const AuthContext = createContext({});

const authReducer = (
  state: React.ReducerState,
  action: React.ReducerAction
) => {
  const { type, payload } = action;

  switch (type) {
    case type === "SET_USER": {
      const { user } = payload;
      return {
        ...state,
        user,
      };
    }
    case type === "RESET_USER": {
      return {
        ...state,
        user: null,
      };
    }
    default: {
      return state;
    }
  }
};

export default function AuthContextProvider({ children }) {
  const [dispatch, state] = useReducer(authReducer, initialState);

  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
}
