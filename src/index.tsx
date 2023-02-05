import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

// eslint-disable-next-line no-undef
const ELEMENT: HTMLElement | null = document.getElementById('root');
const ROOT = ReactDOM.createRoot(ELEMENT as Element);
ROOT.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
