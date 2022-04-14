import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

export default function AppState() {
  const [counter, setCounter] = useState(0);
  const [reverse, setReverse] = useState(false);
  const reverseClass = reverse ? 'reverse' : '';

  const handleIncrement = () => {
    setCounter((counter) => counter + 10);
  };

  const handleDecrement = () => {
    setCounter(counter - 10);
  };

  const handleReverse = () => {
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
