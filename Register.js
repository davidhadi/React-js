import React from "react";
import axios from "axios";
import '../css/Register.css';
import 'bootstrap/dist/css/bootstrap.min.css';


class Register extends React.Component {
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
      .post("http://localhost:8080/person/save", formData, {
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

  render() {
    return (
      <React.Fragment>
         <div class="register">
  <h2 class="active"> Register Here </h2>
   <form>

    <span>Full Name</span>
     <input type="text" class="text" name="name" placeholder="Enter your Name." onChange={this.saveInputs}/>
       <br/>

    <span>E-mail</span>
    <input type="email" class="text" name="email" placeholder="Enter your mail !" onChange={this.saveInputs}/>
      <br/>

      <span>Mobile</span>
      <input type="number" class="text" name="mobile" placeholder="Enter your mobile !" onChange={this.saveInputs}/>
        <br/>

        <span>City</span>
        <input type="text" class="text" name="city" placeholder="Enter your city !" onChange={this.saveInputs}/>
          <br/>

          <span>Password</span>
        <input type="password" class="text" name="pass" placeholder="Enter password !" onChange={this.saveInputs}/>
          <br/>

     <input type="checkbox" id="checkbox-1-1" class="custom-checkbox" />
    <label for="checkbox-1-1" class="check-text">Keep me Signed in</label>

    <button class="signup" type="button"id="save_data" onClick={this.saveData} >
      Sign In
    </button>

    <a href="#">Already have account?</a>

  </form>
</div>
      </React.Fragment>
    );
  }
}

export default Register;