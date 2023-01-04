/* eslint-disable no-console */
import React, { lazy, Suspense, useState } from 'react';
// const LazyComponent = lazy('./Lazy');

const loadComponent = () => {
  console.log('Componente carregando');
  return import('./Lazy');
};

const LazyComponent = lazy(loadComponent);

export const App = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <button onMouseOver={loadComponent} onClick={() => setShow((s) => !s)}>
        {show ? 'OFF' : 'ON'}
      </button>
      <Suspense fallback={<p>Carregando...</p>}>{show && <LazyComponent />}</Suspense>
    </div>
  );
};
