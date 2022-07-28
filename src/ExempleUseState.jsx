import logo from './logo.svg';
import './App.css';
import React from 'react';

export default function ExempleUseState() {
  const [counter, setCounter] = React.useState(0);
  const [reverse, setReverse] = React.useState(false);
  const reverseClass = reverse ? 'App-logo-reverse' : '';

  const handleIncrement = () => {
    //usando funções de callback sem utilizar diretamente o valor original de counter
    setCounter((counter) => counter + 10);
    /* setCounter((prevCounter) => prevCounter + 10); */
  };

  const handleDecrement = () => {
    //usando o valor atual de counter
    setCounter(counter - 10);
  };

  const handleReverse = () => {
    //usando funções de callback sem utilizar diretamente o valor original de reverse
    setReverse((reverse) => !reverse);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className={`App-logo ${reverseClass}`} alt="logo" />
        <h1>Contador: {counter}</h1>
        <p>
          <button type="button" onClick={handleIncrement}>
            Increment {setCounter}
          </button>
          <button type="button" onClick={handleDecrement}>
            Decrement {setCounter}
          </button>
        </p>
        <p>
          <button type="button" onClick={handleReverse}>
            Reverse {reverseClass}
          </button>
        </p>
      </header>
    </div>
  );
}
