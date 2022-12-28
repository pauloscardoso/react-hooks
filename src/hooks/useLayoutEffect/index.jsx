import React, { useLayoutEffect, useRef, useState } from 'react';

export const App = () => {
  const [counted, setCounted] = useState([0, 1, 2, 3, 4]);
  const divRef = useRef();

  useLayoutEffect(() => {
    const now = Date.now();
    while (Date.now() < now + 3000) divRef.current.scrollTop = divRef.current.scrollHeight;
  });

  function handleClick() {
    setCounted((c) => [...c, Number(c.slice(-1)) + 1]);
  }

  return (
    <>
      <button onClick={handleClick}>Count: {counted.slice(-1)}</button>
      <div ref={divRef} style={{ height: '100px', width: '100px', overflowY: 'scroll' }}>
        {counted.map((count) => (
          <p key={`Count-${count}`}>{count}</p>
        ))}
      </div>
    </>
  );
};
