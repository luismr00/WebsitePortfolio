import React from "react";
//import GridRender from "./Grid.jsx";
//import Logo from './logo.png';

class Scroll4 extends React.Component {
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

    <section className="section" id="section3">
        <p>Interested in a project? Get in touch.</p>
        <p>luismrangel7@gmail.com</p>
    </section> 
      


    );
  }
}
export default Scroll4;