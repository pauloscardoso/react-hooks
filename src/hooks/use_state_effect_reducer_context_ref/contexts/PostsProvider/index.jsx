import React, { useReducer } from 'react';
import P from 'prop-types';
import { Context } from './context';
import { reducer } from './reducer';
import { DATA } from './data';

export const PostsProvider = ({ children }) => {
  const [postState, postDispatch] = useReducer(reducer, DATA);

  return <Context.Provider>{children}</Context.Provider>;
};

PostsProvider.propTypes = {
  children: P.node.isRequired,
};
