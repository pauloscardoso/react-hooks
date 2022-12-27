import React from 'react';
import { Posts } from '../components/Posts';
import { CounterProvider } from '../contexts/Counter';
import { PostsProvider } from '../contexts/Posts';

export const App = () => {
  return (
    <CounterProvider>
      <PostsProvider>
        <Posts />
      </PostsProvider>
    </CounterProvider>
  );
};
