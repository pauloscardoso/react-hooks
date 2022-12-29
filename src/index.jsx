import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './hooks/useDebugValue';

const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);
<StrictMode>{root.render(<App />)}</StrictMode>;
