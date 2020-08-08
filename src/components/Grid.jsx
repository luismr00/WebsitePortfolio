import React from "react";
import Description from "./Menu.jsx"; //DELETE ME SINCE IM NO LONGER NEEDED :( (OR RECYCLE ME)

// var GridRender = (props) => {
    
//     //map your images

//     // props.designs.map((design) => {
//     //     //console.log(design);
//     //     return (
//     //         <div>Sup</div>
//     //         // <div class="design-container">
//     //         //     <div>{design.name}</div>
//     //         //     {/* <div class="design-container-image">{design.image}</div> */}
//     //         // </div>
//     //     );
//     // });


//     return (
//         <div className="grid-container">
//             {
//                 props.designs.map((design, index) => {
//                     //console.log(design);
//                     return (
//                         // <div>{index + 1} Sup</div>
//                         <div className="design-content">
//                             <p>{design.name}</p>
//                             <img src={design.image} className="design-image"></img>
//                         </div>
//                     );
//                 })
//             }
//         </div>
//     );
    
//     // return (
//     //     <div>
//     //         <div>SUP</div>
//     //         <div>{props.designs.name}</div>
//     //         <div>{props.designs.image}</div>
//     //     </div>
//     // );
// }

// export default GridRender;




class GridRender extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        showGrid: true,
        index: null
      };
      this.clickDesign = this.clickDesign.bind(this);

      //added designDescription methods here
      this.exit = this.exit.bind(this);
      this.prevSlide = this.prevSlide.bind(this);
      this.nextSlide = this.nextSlide.bind(this);

    }

    exit() {
        //console.log("The current state of show grid is: " + this.state.showGrid);
      this.setState({
        showGrid: true
      });
      alert('Going back to grid mode');
      //console.log("The current state of show grid s: " + this.state.showGrid);
      var hideMenu = document.getElementById('menu');
      hideMenu.style.display = "block";

      var footer = document.querySelector("footer");
      footer.style.display = "block";
    }

    //write a function for handling anchor tab clicks
    changePage() {
        this.props.handleChange(this.props.page);
    }

    prevSlide() {

        //console.log("this should show on the console log"); 

        let index = this.state.index;
        
        if (index === 0) {
            // console.log('the index is NOT 5');
            index = 3
        } 
        else {
            index = index - 1
        }

        this.setState({
            index: index
        });

        alert('Previous slide\'s index is: ' + index)
    }

    nextSlide() {

        let index = this.state.index;
        
        if (index === 3) {
            // console.log('the index is NOT 5');
            index = 0
        } 
        else {
            index = index + 1
        }

        this.setState({
            index: index
        });

        alert('Next slide\'s index is: ' + index)
    }
    
    clickDesign(event) {
      this.setState({ 
        showGrid: false,
        index: parseInt(event.currentTarget.dataset.id)
      });

      var hideMenu = document.getElementById('menu');
      hideMenu.style.display = "none";

      var footer = document.querySelector("footer");
      footer.style.display = "none";

      //tested currentTarget to select the proper index of the clicked image
      //dataset seems to convert index into a string. Thus, I am converting it back to an integer above when updating the index state.
      //more info can be found on: https://ozmoroz.com/2018/07/pass-value-to-onclick-react/
      
      //console.log(event.currentTarget.dataset.id);
      //console.log("Hello from Grid.js passing to DesignDescription.js")
    }
    
    render(props) {
        //console.log(this.state.showGrid);
        if(this.state.showGrid === true) {
            return (
                <div className="center">
                    <div className="grid-container">
                        {
                            this.props.designs.map((design, index) => {
                                return (
                                    <div className="design-content" key={index} data-id={index} onClick={this.clickDesign}>
                                        {/* <p>{design.name}</p> */}
                                        <img src={design.image} className="design-image"></img>
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
            );
        } else {

            //PASTED DESIGNDESCRIPTION RENDER VARS HERE
            //console.log(this.state.showGrid);
            const designs = this.props.designs;

            return (
                // <div>
                //     <p>SHOW ME THE DESCRIPTION OF THE CLICKED IMAGE</p>
                // </div>
                //<Description gridState={this.state.showGrid} index={this.state.index} designs={this.props.designs} />


                //PASTED DESIGNDESCRIPTION RENDER SECTION HERE
                <div className = "center-description">
                    <div className="design-description">
                        {/* <p>SHOW ME THE DESCRIPTION OF THE CLICKED IMAGE....?</p> */}
                        <div className="DD-design">
                            <img src={designs[this.state.index].image}></img>
                        </div>
                        <div className="DD-description">
                            <p>{designs[this.state.index].description}</p>
                        </div>
                    </div>
                    <a className="close" onClick={this.exit}>&times;</a>
                    <span className="prev" onClick={this.prevSlide}>&#10094;</span>
                    <span className="next" onClick={this.nextSlide}>&#10095;</span>
                </div>
            );
        }
    }
  }

  export default GridRender;