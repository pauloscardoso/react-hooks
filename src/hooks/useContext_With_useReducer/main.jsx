import React from 'react';
import { Context } from './store/context';
import { Title } from './components/Title';

export const ExampleUseContextWithUseReducer = () => {
  return (
    <Context>
      <Title>Olá</Title>
    </Context>
  );
};
