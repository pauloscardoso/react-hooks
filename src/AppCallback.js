import P from 'prop-types';
import React, { useState, useEffect, useCallback } from 'react';
import './App.css';

const Button = React.memo(function Button({ incrementButton }) {
  console.log('Filho renderizou');
  return <button onClick={() => incrementButton(1)}>Aperte</button>;
});

Button.propTypes = {
  incrementButton: P.func,
};

export default function AppCallback() {
  const [counter, setCounter] = useState(0);

  const incrementCounter = useCallback((num) => {
    setCounter((c) => c + num);
  }, []);
  console.log('Pai renderizou');

  return (
    <div className="App">
      <h1>Contador: {counter}</h1>
      <p>
        <Button incrementButton={incrementCounter} />
      </p>
    </div>
  );
}
