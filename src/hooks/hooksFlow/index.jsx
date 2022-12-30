/* eslint-disable no-unused-vars */
/* eslint-disable no-console */

import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';

//FLUXO DE EXECUÇÃO DOS HOOKS

export const HooksFlow = () => {
  console.log('%cCHILD RENDER STARTING...', 'color: green');

  // Lazy Initializer #1
  const [state1, setState1] = useState(() => {
    const state = new Date().toLocaleDateString();
    console.log('%c State Lazy initializer - (useState + InitialValue) = ' + state, 'color: green');
    return state;
  });

  const renders = useRef(0);

  useEffect(() => {
    console.log('%c useEffect (UPDATE state1) ' + state1, 'color: #dbc70f');
  }, [state1]);

  useEffect(() => {
    console.log('%c useEffect -> No Dependencies', 'color: #dbc70f');
    renders.current += 1;

    return () => {
      console.log('%c useEffect (Cleanup) -> No Dependencies', 'color: #dbc70f');
    };
  });

  useEffect(() => {
    const listener = () => console.log('Listener...');
    console.log('%c useEffect -> Empty dependencies', 'color: #dbc70f');

    return () => {
      console.log('%c useEffect (Cleanup) -> Empty dependencies', 'color: #dbc70f');
    };
  }, []);

  useLayoutEffect(() => {
    console.log('%c useLayoutEffect', 'color: #e61a4d');

    return () => {
      console.log('%c useLayoutEffect (Cleanup)', 'color: #e61a4d');
    };
  });

  console.log('%cCHILD RENDER ' + renders.current + ' ENDING...', 'color: green');
  return (
    <div onClick={() => setState1(new Date().toLocaleString('pt-br'))} style={{ fontSize: '30px' }}>
      State: {state1}
    </div>
  );
};

export const Home = () => {
  const renders = useRef(0);

  useEffect(() => {
    renders.current += 1;
  });

  console.log(`%cPARENT RENDER ${renders.current} STARTING...`, 'color: green');
  const [show, setShow] = useState(false);
  console.log('%cState Initializer - (useState + InitialValue) = ' + show, 'color: green');
  console.log(`%cPARENT RENDER ${renders.current} ENDING...`, 'color: green');

  return (
    <div>
      <p style={{ fontSize: '60px' }} onClick={() => setShow((s) => !s)}>
        Show hooks
      </p>
      {show && <HooksFlow />}
    </div>
  );
};
