import React from 'react';
import { useMediaQuery } from './hook/useMediaQuery';

export const App = () => {
  const huge = useMediaQuery('(min-width: 980px)');
  const big = useMediaQuery('(max-width: 979px) and (min-width: 768px');
  const medium = useMediaQuery('(max-width: 767px) and (min-width: 493px');
  const small = useMediaQuery('(max-width: 492px)');

  const background = huge ? 'green' : big ? 'red' : medium ? 'yellow' : small ? 'orange' : null;
  return (
    <div style={{ background }}>
      <h1>a</h1>
    </div>
  );
};
