import React, { useContext } from 'react';
import { GlobalContext } from '../store/globalContext';

export const Body = () => {
  const context = useContext(GlobalContext);
  const {
    contextState: { body },
    setContextState,
  } = context;
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
