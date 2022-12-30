import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './others/React.lazy-CodeSplitting';

const root = ReactDOM.createRoot(document.getElementById('root'));
<StrictMode>{root.render(<App />)}</StrictMode>;
