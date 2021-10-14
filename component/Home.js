import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Navbar';
import Slider from './Slider';
import Footer from './Footer';


class Home extends React.Component{
  render() {
    return (
        <div class="home">
            <NavBar></NavBar>
            <Slider></Slider>
            <Footer></Footer>
        </div>
    );
  }
}

export default Home;
