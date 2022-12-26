/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { initialState } from './initialState';
import { GlobalContext } from './globalContext';

export const Context = ({ children }) => {
  const [contextState, setContextState] = useState(initialState);
  return (
    <GlobalContext.Provider value={{ contextState, setContextState }}>
      {children}
    </GlobalContext.Provider>
  );
};
