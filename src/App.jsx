import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';
import './static/style/App.css';
class Nav extends React.Component{
    render(){
        return (
        	<ul class="nav">
              <li><Link to="/home">Home</Link></li>
              <li><Link to="/other">other</Link></li>
          </ul>
        );
    }
}

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <Nav/>
        {this.props.children}
      </div>
    );
  }
}
export default App;

