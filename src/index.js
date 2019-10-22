import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

if(navigator.serviceWorker){
  navigator.serviceWorker.register('sw.js')
}

ReactDOM.render(<App />, document.getElementById('root'));
