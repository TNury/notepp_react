// LIBRARIES
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

// REDUX STORE
import { store } from './scripts/Redux/store/store.js';

// COMPONENTS
import Notepp from './scripts/Notepp.script.jsx';

// PERFORMANCE MEASURING
// import { reportWebVitals } from './scripts/Tools/reportWebVitals';

ReactDOM.render(
  <Provider store={ store }>
    <BrowserRouter>
      <Notepp />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
