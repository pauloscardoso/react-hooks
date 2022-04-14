import { useState, useEffect } from 'react';
import './App.css';

const eventFn = () => {
  console.log('h1 clicado');
};

export default function AppEffect() {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);

  //LIFECICLE METHODS

  // componentDidUpdate - executa toda vez que o component atualiza
  /*   useEffect(() => {
    console.log('componentDidUpdate');
  }); */

  // componentDidMount - executa uma única vez
  useEffect(() => {
    document.querySelector('h1')?.addEventListener('click', eventFn);
    // componentWillUnmount - limpeza
    return () => {
      document.querySelector('h1')?.removeEventListener('click', eventFn);
    };
  }, []);

  // Com dependência - executa toda vez que a dependência mudar
  useEffect(() => {
    console.log('Contador mudou para', counter, counter2);
    setCounter(10);
  }, [counter, counter2]);

  return (
    <div className="App">
      <p>Teste 2</p>
      <h1>
        C1:{counter} C2:{counter2}{' '}
      </h1>
      <p>
        <button className="btn" onClick={() => setCounter(counter + 1)}>
          +C1
        </button>
        <button className="btn" onClick={() => setCounter2(counter2 + 1)}>
          +C2
        </button>
      </p>
      {/*       <p>
        <button className="btn" onClick={() => setCounter(counter - 1)}>
          -
        </button>
      </p> */}
    </div>
  );
}
