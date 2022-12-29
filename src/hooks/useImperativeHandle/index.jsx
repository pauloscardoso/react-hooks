import React, { useLayoutEffect, useRef, useState } from 'react';
import { DisplayCounted } from './DisplayCounted';

export const App = () => {
  const [counted, setCounted] = useState([0, 1, 2, 3, 4]);
  const divRef = useRef();

  useLayoutEffect(() => {
    const now = Date.now();
    while (Date.now() < now + 200)
      divRef.current.divRef.scrollTop = divRef.current.divRef.scrollHeight;
  });

  function handleClick() {
    setCounted((c) => [...c, +c.slice(-1) + 1]);
  }
  return (
    <>
      <button onClick={handleClick}>Count: {counted.slice(-1)}</button>
      <DisplayCounted counted={counted} ref={divRef} />
    </>
  );
};
