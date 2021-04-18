import React from "react";
import Linkedin from "../images/linkedin-icon.png";
import Github from "../images/github-icon.png";
import Email from "../images/email-icon.png";

class Scroll4 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    
    };

  }
  
  render(props) {
    const images = this.props.images;
    return (

    <section className="section" id="section3">
        <p>Interested in a project? Get in touch.</p>
        <div class="contacts">
          <a href="https://www.linkedin.com/in/luis-rangel-55135812a/"><img class="contact-item" src={Linkedin}></img></a>
          <a href="https://github.com/luismr00"><img class="contact-item" src={Github}></img></a>
          <a href="mailto:luismrangel7@gmail.com"><img class="contact-item" src={Email}></img></a>
        </div>
        {/* <p>luismrangel7@gmail.com</p>
        <p>https://www.linkedin.com/in/luis-rangel-55135812a/</p> */}
    </section> 
      


    );
  }
}
export default Scroll4;