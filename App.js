import React from 'react';
import './App.css';
import './css/login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './component/Home';
import Login from './component/Login';
import About from './component/About';
import Service from './component/Service';
import Contact from './component/Contact';
import Register from './component/Register';
import { Route, Switch } from 'react-router-dom';


class App extends React.Component{
  render() {
    return (
        <div className="App">
          <Switch>
            <Route  exact path="/" component={Home}/>
            <Route path="/login" component={Login}/>
            <Route path="/signup" component={Register}/>
            <Route path="/about" component={About}/>
            <Route path="/service" component={Service}/>
            <Route path="/contact-us" component={Contact}/>
          </Switch>
        </div>
    );
  }
}

export default App;
