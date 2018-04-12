import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link } from 'react-router';
import routerConfig from './static/router/router';

class navTab extends React.Component{
    render(){
        return (
          <Router>
              <Route path="/" componet={}>home</Route>
              <Route path="/index" componet={}>index</Route>
          </Router>
        );
    }
}

export default navTab;