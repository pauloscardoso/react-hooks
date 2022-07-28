import P from 'prop-types';
import React from 'react';
import './App.css';

//O componente filho não precisa ser re-renderizado. Poderíamos usar o React.memo no próprio componente ou o React.useMemo na função que usa o component Button (filho)
//A função React.memo irá memorizar o componente. Aqui, o componente Button  só ira re-renderizado se o componente mudar. Se não mudar, ele permanecerá o mesmo.

const Button = React.memo(function Button({ incrementButton }) {
  console.log('Filho renderizou');
  return <button onClick={() => incrementButton(1)}>Aperte</button>;
});

/* const Button = ({ incrementButton }) => {
  console.log('Filho renderizou');
  return <button onClick={() => incrementButton(1)}>Aperte</button>;
}; */

Button.propTypes = {
  incrementButton: P.func,
};

//useCallback geralmente é utilizado em otimizações
export default function ExempleUseCallback() {
  const [counter, setCounter] = React.useState(0);

  /*  const incrementCounter = React.useCallback(
    (num) => {
      setCounter(counter + num);
    },
    [counter],
  ); */

  //useCallback "salva" a função e só irá recriar a função quando a dependência mudar.
  const incrementCounter = React.useCallback((num) => {
    //usando uma função de callback, recebendo o estado anterior de counter como parâmetro da função e retornando ele + o num. Isso nos permite retirar o counter do array de dependência do useCallback.
    setCounter((c) => c + num);
  }, []);
  console.log('Pai renderizou');

  return (
    <div className="App">
      <h1>Contador: {counter}</h1>
      <Button incrementButton={incrementCounter} />;
    </div>
  );
}
