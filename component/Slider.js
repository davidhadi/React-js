import React  from 'react';
import '../css/slider.css';
import img1 from '../images/desk.png';
import img2 from '../images/desk2.png';
import img3 from '../images/desk3.png';
import img4 from '../images/section1.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';

class Slider extends React.Component{
  render(){
      return(
        <React.Fragment>
    <div>
    <div id="slider">
    <figure>
        <img src={img1} />
        <img src={img2} />
        <img src={img1} />
        <img src={img3} />
        <img src={img1} />
    </figure>
    </div>
    <div class="text_on_scr"><h1> AdNetworK </h1>
    <h6> this is the description place of website </h6>
    </div>
    </div>
    <section class="description">
      <div class="box_description">
           hii
      </div>
      <div class="box_description">
        <img src={img4} />
      </div>
    </section>
    <section class="description_buttom">
   hii
    </section>
    </React.Fragment>
  )};
}	
export default Slider;