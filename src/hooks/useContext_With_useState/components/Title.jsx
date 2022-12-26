import React, { useContext } from 'react';
import { GlobalContext } from '../store/globalContext';

export const Title = () => {
  const context = useContext(GlobalContext);

  const {
    contextState: { title, counter },
  } = context;
  return (
    <h1>
      {title} - Counter: {counter}
    </h1>
  );
};
