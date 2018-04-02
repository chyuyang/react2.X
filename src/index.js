import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link } from 'react-router';
import routerConfig from './static/router/router';
import './static/style/index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
React.render(<Router routes={routerConfig}/>,document.body)
registerServiceWorker();
