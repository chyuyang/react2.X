import React from 'react';
import ReactDOM from 'react-dom';
import 'amazeui-touch/scss/amazeui.touch.scss';
import './static/style/index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
