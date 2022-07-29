import React from 'react';
import './App.css';
import { AppContext } from './components/ExempleUseContext/Context';
import { Div } from './components/ExempleUseContext/Div';

export default function ExempleUseContext() {
  return (
    <AppContext>
      <Div />
    </AppContext>
  );
}
