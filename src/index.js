import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js';
import registerServiceWorker from './registerServiceWorker';
import CarsApp from './App.js';

ReactDOM.render(<CarsApp />, document.getElementById('root'));
registerServiceWorker();
