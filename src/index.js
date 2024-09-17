import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import RemittanceDest from './RemittanceDest';
import Top from './Top';


import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
      <Top />
    </React.StrictMode>
);

reportWebVitals();
