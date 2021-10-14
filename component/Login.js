import React from 'react';
import axios from "axios";
import '../css/login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Navbar';
import Footer from './Footer';

class Login extends React.Component{
    state = {
      input: {},
    };
  
    saveInputs = (event) => {
      var key = event.target.name;
      this.state.input[key] = event.target.value;
      this.setState({ [key]: event.target.value });
    };
  
    saveData = () => {
      console.log(this.state);
      var currentthis = this;
  
      console.log(this.state.input);
      var formData = new FormData();
      for (var data in this.state.input) {
        formData.set(data, this.state.input[data]);
      }
  
      axios
        .get("http://localhost:8080/person/login", formData, {
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
        })
        .then(function (response) {
          console.log(response);
        })
        .then(function (error) {
          console.log(error);
        })
        .then(function () {
          console.log("Always Running");
        });
    };
    render(){
        return(
          <>
          <NavBar/>
          <div class="login">
          <h2 class="active"> <span>sign in </span></h2>
           <form>
             <span>username</span>
            <input type="text" class="text" name="username" placeholder="Enter your Name." onChange={this.saveInputs} />
               <br/>
                <span>password</span>
            <input type="password" class="text" name="password" placeholder="Enter your password !" onChange={this.saveInputs} />
        
              <br/>
             <input type="checkbox" id="checkbox-1-1" class="custom-checkbox" />
            <label for="checkbox-1-1">Keep me Signed in</label>
        
            <button class="signin" id="login" type="button" onChange={this.saveInputs}>
              LogIn
            </button>
            <a href="#">Forgot Password?</a>
          </form>
        </div>
        <Footer/>
        </>
        );
    }
}

export default Login;