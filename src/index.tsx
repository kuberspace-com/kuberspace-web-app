import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import GeneralContextProvider from './context/GeneralContextProvider';

// eslint-disable-next-line no-undef
const ELEMENT: HTMLElement | null = document.getElementById('root');
const ROOT = ReactDOM.createRoot(ELEMENT as Element);
ROOT.render(
  <BrowserRouter>
    <GeneralContextProvider>

      <App />
    </GeneralContextProvider>

  </BrowserRouter>
);
