import React from "react";

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    
    };
  
  }
  
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