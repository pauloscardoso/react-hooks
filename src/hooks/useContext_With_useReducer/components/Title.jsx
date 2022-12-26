import React, { useContext, useRef } from 'react';
import { GlobalContext } from '../store/globalContext';

export const Title = () => {
  const context = useContext(GlobalContext);
  const inputRef = useRef();
  const { changeTitle } = context;

  return (
    <>
      <h1 onClick={() => changeTitle(inputRef.current.value)}>{context.state.title}</h1>
      <input type="text" ref={inputRef} />
    </>
  );
};
