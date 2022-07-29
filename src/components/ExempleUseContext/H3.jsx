import React from 'react';
import { GlobalContext } from './Context';

// eslint-disable-next-line
export const H3 = ({ children }) => {
  const theContext = React.useContext(GlobalContext);
  const {
    contextState: { body },
    setContextState,
  } = theContext;
  return (
    <h3
      onClick={() =>
        setContextState((prevState) => ({
          ...prevState,
          counter: prevState.counter + 1,
        }))
      }
    >
      {body}
    </h3>
  );
};
