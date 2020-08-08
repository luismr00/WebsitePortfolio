import React from "react";

class Footer extends React.Component {
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

        <footer>
            <p>Copyright © 2017 - 2020 Luis Rangel - All Rights Reserved.</p>    
        </footer>  
      
    );
  }
}
export default Footer;