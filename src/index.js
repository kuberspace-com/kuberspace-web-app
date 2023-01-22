import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

// eslint-disable-next-line no-undef
const ROOT = ReactDOM.createRoot(document.getElementById('root'));
ROOT.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
