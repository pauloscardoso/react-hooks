/* eslint-disable no-unused-vars */
import React from 'react';
import '../../App.css';
import { reducer } from './store/reducer';
import { initialState } from './store/initialState';

export function ExempleUseReducer() {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const { counter, title, body } = state;

  return (
    <div>
      <h1>
        {title} - Counter {counter}
      </h1>
      <button
        onClick={() =>
          dispatch({
            type: 'muda',
            payload: new Date().toLocaleString('pt-BR'),
          })
        }
      >
        Click
      </button>
      <button onClick={() => dispatch({ type: 'inverter' })}>Inverte</button>
      <button onClick={() => dispatch({ type: '' })}>Sem Action</button>
      <button onClick={() => dispatch({ type: 'aumenta', payload: counter + 1 })}>Aumenta 1</button>
    </div>
  );
}
