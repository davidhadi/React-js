import React from 'react';
import '../css/service.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Navbar';

class Service extends React.Component{
  render() {
    return (
        <div className="service">
            <NavBar/>
           <h3>Service Section</h3>
        </div>
    );
  }
}

export default Service;