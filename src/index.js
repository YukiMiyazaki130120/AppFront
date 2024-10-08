import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

import RemittanceDest from './RemittanceDest';
import Top from './Top';
import Step4 from './Step4';
import Step5_complete from './Step5_complete';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

reportWebVitals();
