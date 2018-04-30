import React from 'react';
import ReactDOM from 'react-dom';
import {Router,Route,browserHistory} from 'react-router';
import 'amazeui-touch/scss/amazeui.touch.scss';
import './static/style/index.css';
import registerServiceWorker from './registerServiceWorker';
import App from './App';
import Home from './views/home.jsx'
import Other from './views/other.jsx'
ReactDOM.render((
	    <Router history = {browserHistory}>
           <Route path="/" component={App}>
              <Route path="home" component={Home}>home</Route>
              <Route path="other" component={Other}>other</Route>
           </Route>
        </Router>
    ), document.getElementById('root'));
registerServiceWorker();
