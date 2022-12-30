import React, { Component, useEffect, useState } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Atualiza o state para que a próxima renderização mostre a UI alternativa.
    console.log(error);
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Você também pode registrar o erro em um serviço de relatórios de erro
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Você pode renderizar qualquer UI alternativa
      return <h1>Algo deu errado.</h1>;
    }

    // eslint-disable-next-line react/prop-types
    return this.props.children;
  }
}

const ItWillThrowError = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log(counter);
    if (counter > 3) throw new Error('adsads');
  }, [counter]);

  return <button onClick={() => setCounter((s) => s + 1)}>Click to increase - {counter}</button>;
};

export const ErrorBoundaries = () => {
  return (
    <div>
      <ErrorBoundary>
        <ItWillThrowError />
      </ErrorBoundary>
    </div>
  );
};
