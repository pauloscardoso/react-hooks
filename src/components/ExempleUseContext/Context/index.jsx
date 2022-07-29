import React from 'react';
import { initialState } from './data';

export const GlobalContext = React.createContext();

// eslint-disable-next-line
export const AppContext = ({ children }) => {
  const [contextState, setContextState] = React.useState(initialState);
  return (
    <GlobalContext.Provider value={{ contextState, setContextState }}>
      {children}
    </GlobalContext.Provider>
  );
};
