import React, { useReducer } from 'react';
import P from 'prop-types';
import { reducer } from './reducer';
import { DATA } from './data';
import { PostsContext } from './context';

export const PostsProvider = ({ children }) => {
  const [postsState, postsDispatch] = useReducer(reducer, DATA);

  return (
    <PostsContext.Provider value={{ postsState, postsDispatch }}>{children}</PostsContext.Provider>
  );
};

PostsProvider.propTypes = {
  children: P.node.isRequired,
};
