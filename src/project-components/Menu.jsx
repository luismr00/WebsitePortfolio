// import React from 'react';
// import GridRender from "./Grid.jsx";

// class Description extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         showGrid: this.props.gridState,
//         designIndex: this.props.index
//       };

//       this.exit = this.exit.bind(this);
//       this.prevSlide = this.prevSlide.bind(this);
//       this.nextSlide = this.nextSlide.bind(this);
//     }
    
//     exit() {
//         console.log("The current state of show grid is: " + this.state.showGrid);
//       this.setState({
//         showGrid: true
//       });
//       alert('Why is showGrid state not showing!?');
//       console.log("The current state of show grid s: " + this.state.showGrid);
//     }

//     prevSlide() {

//         console.log("this should show on the console log"); 

//         let index = this.state.designIndex;
        
//         if (index === 0) {
//             // console.log('the index is NOT 5');
//             index = 5
//         } 
//         else {
//             index = index - 1
//         }

//         this.setState({
//             designIndex: index
//         });

//         alert('Previous slide\'s index is: ' + this.state.designIndex - 1)
//     }

//     nextSlide() {

//         let index = this.state.designIndex;
        
//         if (index === 5) {
//             // console.log('the index is NOT 5');
//             index = 0
//         } 
//         else {
//             index = index + 1
//         }

//         this.setState({
//             designIndex: index
//         });

//         alert('Next slide\'s index is: ' + this.state.designIndex + 1)
//     }
    
//     render(props) {

//         if(this.state.showGrid === false) {

//             console.log(this.state.showGrid);
//             const designs = this.props.designs;
//             return (
//                 <div>
//                     <div className="design-description">
//                         {/* <p>SHOW ME THE DESCRIPTION OF THE CLICKED IMAGE....?</p> */}
//                         <img src={designs[this.state.designIndex].image} className="DD-design"></img>
//                         <p className="DD-description">{designs[this.state.designIndex].description}</p>
//                     </div>
//                     <a className="close" onClick={this.exit}>&times;</a>
//                     <span className="prev" onClick={this.prevSlide}>&#10094;</span>
//                     <span className="next" onClick={this.nextSlide}>&#10095;</span>
//                 </div>
//             );
//         } else {
//             <GridRender designs={this.props.designs}/>
//         }
//     }   
//   }

//   export default Description;

import React from "react";
//import GridRender from "./Grid.jsx";
import Logo from '../images/logo.png';

class HomeMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    
    };
    
    //this.handleChange = this.handleChange.bind(this);
    this.changePage1 = this.changePage1.bind(this);
    this.changePage2 = this.changePage2.bind(this);
  }
  
  /*handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }*/
  
  //write a function for handling anchor tab clicks
  changePage1() {
      //console.log(page);
      this.props.handleChange(1);

      var footer = document.querySelector("footer");
      footer.style.bottom = "none";
      footer.style.position = "none";
  }

  changePage2() {
    //console.log(page);
    this.props.handleChange(2);

    var footer = document.querySelector("footer");
    footer.style.bottom = 0;
    footer.style.position = fixed;
}

  render(props) {
    const images = this.props.images;
    return (

      <ul id="menu">
        {/* <img src={Logo} className="logo" /> */}
        <div id="center_logo">
            <li data-menuanchor="page1"><a href="home.html"><img className="logo" src= {Logo}></img></a></li>
        </div>
        <div className="float_center">
        <li data-menuanchor="graphics" onClick={this.changePage1}><a href="#graphics">Graphics</a></li>
        <li data-menuanchor="websites" onClick={this.changePage2}><a href="#websites">Websites</a></li>
        {/* <li data-menuanchor="page4"><a href="#page4">Contact</a></li> */}
        </div>
      </ul>

      /*<div id = "hello">
        <p>Hello world!</p>
      </div>*/
      
    

      


    );
  }
}
export default HomeMenu;