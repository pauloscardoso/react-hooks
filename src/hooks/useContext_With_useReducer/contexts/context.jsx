import React, { useReducer } from 'react';
import P from 'prop-types';
import { actions } from './actions';
import { reducer } from './reducer';
import { GlobalContext } from './globalContext';
import { initialState } from './initialState';

export const Context = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const changeTitle = (payload) => {
    dispatch({ type: actions.CHANGE_TITLE, payload });
  };
  return <GlobalContext.Provider value={{ state, changeTitle }}>{children}</GlobalContext.Provider>;
};

Context.propTypes = {
  children: P.node,
};
