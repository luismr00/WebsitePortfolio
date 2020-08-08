import React from "react";
//import GridRender from "./Grid.jsx";
//import Logo from './logo.png';

class Scroll3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    
    };
    
    //this.handleChange = this.handleChange.bind(this);
  }
  
  /*handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }*/
  
  render(props) {
    const images = this.props.images;
    return (

    <section className="section" id="section2">
        <div className="text_margin">
        <p>Hi, my name is Luis Rangel, and I am a Graphic and Web Designer. I am also recent graduate from DeVry University who is currently seeking job opportunities and project to work with. My skills at the moment are solely based upon HTML, CSS, JavaScripts, and several Creative Cloud Programs. I highly enjoy coding and design, which on my spare times I always try to learn new things in order to become a web developer. </p>
        </div>
   </section> 
      


    );
  }
}
export default Scroll3;