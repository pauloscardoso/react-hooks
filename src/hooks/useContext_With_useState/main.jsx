import React from 'react';
import '../../App.css';
import { Context } from './store/Context';
import { Div } from './components/Div';

export default function ExampleUseContext() {
  return (
    <Context>
      <Div />
    </Context>
  );
}
