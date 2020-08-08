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

      <section className="site-container">
        <div className="center-site">
          <div className="site-description">
            <p>Page is currently under maintenance</p>
          </div>
        </div>
      </section>
    );
  }
}
export default SiteRender;