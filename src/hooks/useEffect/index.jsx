import React from 'react';
import '../../App.css';

const eventFn = () => {
  console.log('h1 clicado');
};

export default function ExampleUseEffect() {
  const [counter, setCounter] = React.useState(0);
  const [counter2, setCounter2] = React.useState(0);

  // componentDidMount - executa uma única vez
  React.useEffect(() => {
    //Encadeamento Opcional (?). Verifica se a primeira expressão existe antes de executar a segunda expressão que fica depois do dot (.). Se tiver, ele executa, se não tiver ele executa a segunda expressão e não gera o erro.
    //Aqui, caso o h1 não existisse, o Encadeamento Opcional não executaria o addEventListener.
    document.querySelector('h1')?.addEventListener('click', eventFn);
    // componentWillUnmount - limpeza
    return () => {
      document.querySelector('h1')?.removeEventListener('click', eventFn);
    };
  }, []); //array de dependências

  // Com dependência - executa toda vez que a dependência mudar
  React.useEffect(() => {
    console.log('Contador mudou para', counter, counter2);
    // setCounter(10); //loop infinitely
  }, [counter, counter2]);

  return (
    <div className="App">
      <p>Teste 1</p>
      <h1>
        C1:{counter} C2:{counter2}
      </h1>
      <p>
        <button className="btn" onClick={() => setCounter(counter + 1)}>
          +C1
        </button>
        <button className="btn" onClick={() => setCounter2(counter2 + 1)}>
          +C2
        </button>
      </p>
    </div>
  );
}
