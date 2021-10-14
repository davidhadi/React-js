import { Component } from "react";
import {Link, NavLink, Router} from "react-router-dom";
import '../css/navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class NavBar extends Component{
    render(){
        return(
            <nav>
            <input type="checkbox" id="check"/>
              <label for="check" class="checkbtn">
               <i class="fas fa-bars">m</i>
             </label>
              <label class="logo"><Link class="adnetwork" to="/">AdNetwork</Link></label>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="service">Services</NavLink></li>
                    <li><NavLink to="contact-us">Contact</NavLink></li>
                    <li><NavLink to="/Signup">SignUp</NavLink></li>
                    <li><NavLink to="/Login">Login</NavLink></li>
                </ul>
            </nav>
        )};
}

export default NavBar;