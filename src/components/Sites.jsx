import React from "react";
//import GridRender from "./Grid.jsx";
import Logo from '../images/logo.png';

class SiteRender extends React.Component {
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

        <div className="site-container">
            <p>Page is currently under maintenance</p>
        </div>

    );
  }
}
export default SiteRender;