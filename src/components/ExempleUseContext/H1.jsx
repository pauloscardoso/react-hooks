import React from 'react';
import { GlobalContext } from './Context';

// eslint-disable-next-line
export const H1 = ({ children }) => {
  const theContext = React.useContext(GlobalContext);
  const {
    contextState: { title, counter },
  } = theContext;
  return (
    <h1>
      {title} - Counter: {counter}
    </h1>
  );
};
