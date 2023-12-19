import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './scss/null.scss';
import './styles.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //  basename="/"
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>,
);
