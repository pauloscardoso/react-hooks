import * as types from './types';

export const reducer = (state, action) => {
  switch (action.type) {
    case types.POSTS_LOADING: {
      console.log('POSTS LOADING');
      return { ...state, loading: true };
    }
    case types.POSTS_SUCCESS: {
      console.log('POSTS SUCCESS');
      return { ...state, posts: action.payload, loading: false };
    }
  }
  console.log('Não encontrei a action', action.type);
  return { ...state };
};
