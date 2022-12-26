/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from 'react';
import { useState } from 'react';
import { useInterval } from './hooks/useInterval';

export const App = () => {
  const [counter, setCounter] = useState(0);
  const [delay, setDelay] = useState(1000);
  const [incrementor, setIncrementor] = useState(100);
  const [isRunning, setIsRunning] = useState(true);

  useInterval(() => setCounter((c) => c + 1), isRunning ? delay : null);

  function handleIncrement() {
    setDelay((d) => d + incrementor);
  }
  function handleDecrement() {
    setDelay((d) => d + incrementor);
  }

  return (
    <div>
      <h1>Contador: {counter}</h1>
      <h1>Delay: {delay}</h1>
      <button onClick={handleIncrement}> + {incrementor}</button>
      <button onClick={handleDecrement}> - {incrementor}</button>
      <input
        type="number"
        value={incrementor}
        onChange={(e) => setIncrementor(Number(e.target.value))}
      />
    </div>
  );
};
