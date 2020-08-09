import React from "react";
import Logo from '../images/logo.png';

class HomeMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    
    };
    
    this.changePage1 = this.changePage1.bind(this);
    this.changePage2 = this.changePage2.bind(this);
  }
  
  changePage1() {
      this.props.handleChange(1);

      var footer = document.querySelector("footer");
      footer.style.bottom = "none";
      footer.style.position = "none";
  }

  changePage2() {
    this.props.handleChange(2);

    var footer = document.querySelector("footer");
    footer.style.bottom = 0;
    footer.style.position = fixed;
}

  render(props) {
    const images = this.props.images;
    return (

      <ul id="menu">
        <div id="center_logo">
            <li data-menuanchor="page1"><a href="home.html"><img className="logo" src= {Logo}></img></a></li>
        </div>
        <div className="float_center">
        <li data-menuanchor="graphics" onClick={this.changePage1}><a href="#graphics">Graphics</a></li>
        <li data-menuanchor="websites" onClick={this.changePage2}><a href="#websites">Websites</a></li>
        </div>
      </ul>

    );
  }
}
export default HomeMenu;