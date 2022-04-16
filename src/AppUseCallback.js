import P from 'prop-types';
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import './App.css';

const Button = ({ incrementButton }) => {
  console.log('Filho renderizou');
  return <button onClick={() => incrementButton(1)}>Aperte</button>;
};

Button.propTypes = {
  incrementButton: P.func,
};

export default function AppCallback() {
  const [counter, setCounter] = useState(0);

  const incrementCounter = useCallback((num) => {
    setCounter((c) => c + num);
  }, []);
  console.log('Pai renderizou');

  const btn = useMemo(() => {
    return <Button incrementButton={incrementCounter} />;
  }, [incrementCounter]);

  return (
    <div className="App">
      <h1>Contador: {counter}</h1>
      <p>{btn}</p>
    </div>
  );
}
