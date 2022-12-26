import React from 'react';
import '../../App.css';
import { Button } from './Button';

//useCallback geralmente é utilizado em otimizações
export default function ExampleUseCallback() {
  const [counter, setCounter] = React.useState(0);

  // const incrementCounter = React.useCallback(
  //   (num) => {
  //     setCounter(counter + num);
  //   },
  //   [counter],
  // );

  // useCallback "salva" a função e só irá recriar a função quando a dependência mudar.
  const incrementCounter = React.useCallback((num) => {
    //usando uma função de callback, recebendo o estado anterior de counter como parâmetro da função e retornando ele + o num. Isso nos permite retirar o counter do array de dependência do useCallback.
    setCounter((c) => c + num);
  }, []);
  console.log('Pai renderizou');

  return (
    <div className="App">
      <h1>Contador: {counter}</h1>
      <Button incrementButton={incrementCounter} />
    </div>
  );
}
