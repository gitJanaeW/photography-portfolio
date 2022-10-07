import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from '../src/App';
import reportWebVitals from './reportWebVitals';

// ReactDOM library is rendering the App component at the root element in the HTML
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
reportWebVitals();