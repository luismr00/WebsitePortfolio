import React from "react";
//import GridRender from "./Grid.jsx";
import Logo from '../images/logo.png';

class HomeMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    
    };
    
  }
  
  render(props) {
    const images = this.props.images;
    return (

      <ul id="menu">
        <div id="center_logo">
            <li data-menuanchor="page1"><a href="#page1"><img className="logo" src= {Logo}></img></a></li>
        </div>
        <div className="float_center">
        <li data-menuanchor="page2"><a href="#page2">Work</a></li>
        <li data-menuanchor="page3"><a href="#page3">About Me</a></li>
        <li data-menuanchor="page4"><a href="#page4">Contact</a></li>
        </div>
      </ul>

    );
  }
}
export default HomeMenu;