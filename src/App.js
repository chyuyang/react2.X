import React, { Component } from 'react';
import './static/style/App.css';
import navTab from './views/navTab';

class App extends Component {
  render() {
    return (
      <div className="App">
        <navTab/>
      </div>
    );
  }
}

export default App;
