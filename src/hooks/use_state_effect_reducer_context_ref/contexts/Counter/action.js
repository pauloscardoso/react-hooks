import * as types from './types';

export const incrementeCounter = (dispatch) => {
  dispatch({ type: types.INCREMENT_COUNT });
};
export const decrementCounter = (dispatch) => {
  dispatch({ type: types.DECREMENT_COUNT });
};
