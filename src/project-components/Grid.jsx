import React from "react";

class GridRender extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        showGrid: true,
        index: null
      };
      this.clickDesign = this.clickDesign.bind(this);

      this.exit = this.exit.bind(this);
      this.prevSlide = this.prevSlide.bind(this);
      this.nextSlide = this.nextSlide.bind(this);

    }

    exit() {
      this.setState({
        showGrid: true
      });

      var hideMenu = document.getElementById('menu');
      hideMenu.style.display = "block";

      var footer = document.querySelector("footer");
      footer.style.display = "block";
    }

    changePage() {
        this.props.handleChange(this.props.page);
    }

    prevSlide() {

        let index = this.state.index;
        
        if (index === 0) {
            index = 9
        } 
        else {
            index = index - 1
        }

        this.setState({
            index: index
        });

    }

    nextSlide() {

        let index = this.state.index;
        
        if (index === 9) {
            index = 0
        } 
        else {
            index = index + 1
        }

        this.setState({
            index: index
        });

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

    }
    
    render(props) {
        if(this.state.showGrid === true) {
            return (
                <div className="center">
                    <div className="grid-container">
                        {
                            this.props.designs.map((design, index) => {
                                return (
                                    <div className="design-content" key={index} data-id={index} onClick={this.clickDesign}>
                                        <img src={design.image} className="design-image"></img>
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
            );
        } else {

            const designs = this.props.designs;

            return (
                <div className = "center-description">
                    <div className="design-description">
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