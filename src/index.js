import React from 'react';
import ReactDOM from 'react-dom/client';

/*---------------------------
| App
---------------------------*/
import App from './App';

/*---------------------------
| Assets
---------------------------*/
import './assets/styles/normalize.css';
import './assets/styles/global.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);
