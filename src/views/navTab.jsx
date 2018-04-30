import React from 'react';
import { Link } from 'react-router';

class nav extends React.Component{
    render(){
        return (
        	<ul>
              <li><Link to="/home">Home</Link></li>
            </ul>
        );
    }
}

export default nav;