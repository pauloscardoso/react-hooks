// import React, { StrictMode } from 'react';
// import ReactDOM from 'react-dom/client';
// import { App } from './others/Lazy-CodeSplitting';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// <StrictMode>{root.render(<App />)}</StrictMode>;

// uniting Ideas Hooks

import React from 'react';
import ReactDOM from 'react-dom';
import { CounterContextProvider } from './hooks/unitingIdeas-Hooks/src/contexts/CounterContext';
import './hooks/unitingIdeas-Hooks/src/styles/global-styles.css';

import { Home } from './hooks/unitingIdeas-Hooks/src/templates/Home';

ReactDOM.render(
  <React.StrictMode>
    <CounterContextProvider>
      <Home />
    </CounterContextProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
