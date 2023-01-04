import logo from '../../logo.svg';
import '../../App.css';
import React, { useState } from 'react';
import { useMemo } from 'react';

export function App() {
  const [counter, setCounter] = useState(0);
  const [reverse, setReverse] = useState(false);
  const reverseClass = reverse ? 'App-logo-reverse' : '';

  function handleIncrement() {
    setCounter((counter) => counter + 10);
  }

  function handleDecrement() {
    setCounter(counter - 10);
  }

  function handleReverse() {
    setReverse((reverse) => !reverse);
  }

  const ChangeTitle = useMemo(() => (reverse ? 'Inverse' : 'Reverse'), [reverse]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className={`App-logo ${reverseClass}`} alt="logo" />
        <h1>Contador: {counter}</h1>
        <p>
          <button type="button" onClick={handleIncrement}>
            Increment
          </button>
          <button type="button" onClick={handleDecrement}>
            Decrement
          </button>
        </p>
        <p>
          <button type="button" onClick={handleReverse}>
            {ChangeTitle}
          </button>
        </p>
      </header>
    </div>
  );
}
