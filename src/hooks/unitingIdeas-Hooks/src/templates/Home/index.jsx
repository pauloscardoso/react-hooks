import React from 'react';
import { Button } from '../../components/Button';
import { Heading } from '../../components/Heading';
import { useCounterContext } from '../../contexts/CounterContext';

export const Home = () => {
  const [state, actions] = useCounterContext();

  function handleSuccess() {
    actions
      .asyncIncrease()
      .then((r) => console.log(r))
      .catch((err) => console.log(err.name));
  }

  function handleError() {
    actions
      .asyncError()
      .then((r) => console.log(r))
      .catch((err) => console.log(err.name, ':', err.message));
  }

  return (
    <div>
      <Heading />
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Button onButtonClick={actions.increase}>Increase</Button>
        <Button onButtonClick={actions.decrease}>Decrease</Button>
        <Button onButtonClick={() => actions.setCounter({ counter: 10 })}>Set 10</Button>
        <Button onButtonClick={() => actions.setCounter({ counter: 100 })}>Set 1000</Button>
        <Button onButtonClick={actions.reset}>Reset</Button>
        <Button disabled={state.loading} onButtonClick={handleSuccess}>
          Async Increase
        </Button>
        <Button disabled={state.loading} onButtonClick={handleError}>
          Async Decrease
        </Button>
      </div>
    </div>
  );
};
