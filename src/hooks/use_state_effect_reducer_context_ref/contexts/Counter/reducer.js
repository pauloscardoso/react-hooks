import * as types from './types';

export const reducer = (state, action) => {
  switch (action.type) {
    case types.INCREMENT_COUNT: {
      return { ...state, counter: state.counter + 1 };
    }
    case types.DECREMENT_COUNT: {
      return { ...state, counter: state.counter - 1 };
    }
  }
  return { ...state };
};
