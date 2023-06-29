import React from 'react';
import ReactDOM from 'react-dom/client';
import './Css/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ContextProvider } from './Data/Context';
import { DataProvider } from './Data/Data';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ContextProvider>
    <DataProvider>
    <App />
    </DataProvider>
    </ContextProvider>
  </React.StrictMode>
);

reportWebVitals();
