import { Component } from "react";
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
              <label class="logo">AdNetworK</label>
                <ul>
                    <li><a class="active" href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">SignUp</a></li>
                    <li><a href="#">LogIn</a></li>
                </ul>
            </nav>
        )};
}

export default NavBar;