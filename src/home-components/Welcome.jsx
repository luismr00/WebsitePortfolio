import React from "react";
//import GridRender from "./Grid.jsx";
//import Logo from './logo.png';

class Scroll1 extends React.Component {
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

    <section className="section" id="section0">
        <p>Welcome to my site</p> 
        <h1>Luis Rangel</h1>
    </section> 
      


    );
  }
}
export default Scroll1;