import React from 'react';
import './App.css';
import { initialState } from './components/ExempleUseContext/Context/data';

/* const initialState = {
  title: 'O título do contexto',
  body: 'O corpo do contexto',
  counter: 0,
}; */

//sempre retorna um estado novo.
// eslint-disable-next-line no-unused-vars
const reducer = (state, action) => {
  switch (action.type) {
    case 'muda': {
      console.log('Chamou muda com ', action.payload);
      return { ...state, title: action.payload };
    }
    case 'inverter': {
      console.log('Chamou inverter');
      const { title } = state;
      return { ...state, title: title.split('').reverse().join('') };
    }
  }
  console.log('nenhuma action encontrada');
  return { ...state };
};

export default function ExempleUseReducer() {
  //função que manipula o estado
  // eslint-disable-next-line no-unused-vars
  const [state, dispatch] = React.useReducer(reducer, initialState);
  // eslint-disable-next-line no-unused-vars
  const { counter, title, body } = state;

  return (
    <div>
      <h1>
        {title} {counter}
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
      <button onClick={() => dispatch({ type: 'qualquercoisa' })}>
        Sem action
      </button>
    </div>
  );
}
