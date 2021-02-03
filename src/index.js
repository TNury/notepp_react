// LIBRARIES
import React from 'react';
import ReactDOM from 'react-dom';
// STYLES
import './styles/css/index.css';
// COMPONENTS
import {App} from './js/App.js';
// PERFORMANCE MEASURING
import reportWebVitals from './js/Tools/reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
