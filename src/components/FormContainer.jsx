import React from "react";
import GridRender from "./Grid.jsx";
import SiteRender from "./Sites.jsx";
import HomeMenu from "./Menu.jsx";
import Footer from "./Footer.jsx";
import Graphic1 from "../images/Gir.jpg";
import Graphic2 from "../images/MedicalFlyer.jpg";
import Graphic3 from "../images/Rangel_CourseProject.jpg";
import Graphic4 from "../images/Email blast.jpg";

class FormContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      page: 1,
      designs: [
        {
          id: 0,
          name: "Bulbasaur",
          image: Graphic1,
          description: "The following image shows a poster done in both illustrator and InDesign where it gives a number of descriptions showing the differences between vector and bitmap graphics. For this particular drawings, I used mainly the pen tool followed by geometric tools. The image was so simple to do to the point that the only thing I had to do is look at the image I printed on the side and try to use the pen tool by making sure I was following where I had to make a straight line and where I had to make a slight curve. The project itself did not took me that long though I noticed the final result came blurrier when I converted to a Jpeg image so it’s definitely something I have to change later. Overall, I am satisfied with the rest of the results considering that I learned how to more efficiently use the pen tool."
        },
        {
          id: 1,
          name: "Ivysaur",
          image: Graphic2,
          description: "Designing a poster as it was a movie flyer was something I tried to put the most effort to make it look as cool as possible. The idea for the poster came from a photo I was given some time ago where the girl in the poster wore traditional clothing for a cultural occasion. Due to the fact that she still holds gypsy-like traditions past through her background, making a poster as if the story was of a gypsy from ancient times sounded like a good idea. That being said, I made sure to select and cut the image to an appropriate size while also designing a background that reflects tones from the dessert. I will say that I would probably not make any changes on the poster. Yet, if there was something that perhaps I would change, I would probably get rid of the excessive blackening I applied on the far left corner while applying more sand tones into that area."
        },
        {
          id: 2,
          name: "Venusaur",
          image: Graphic3,
          description: "The next image was a flyer we had to do as if we were designing for a play called “Don Giovanny”. For this particular project, we had to utilize illustrator and come up with a sketch were we had to work and pass it into illustrator. By utilizing a combination of pencil and pen tool, I managed to come up with a vector drawing as close as what I drew for the flyer. Of course, using these tools wasn’t simple, so even though my work doesn’t look as of a professional illustrator, I believe it’s a good idea to include this artifact due to the fact that it can show how I managed in the beginning and how I improved towards a later project using Illustrator."
        },
        {
          id: 3,
          name: "Charmander",
          image: Graphic4,
          description: "For this project, it was required for class to design a promotional flier designed for emails. For this project, I used Photoshop and made sure to include details of a fictional medical center I was came up with to work for my course project. Before I got started, I made sure to look at many examples seen on emails or magazines and tried to come up with my own ideas of making my own. The flyer shows a good amount of text along with an image, but more importantly was that I made sure to include the logo I made for the medical center, which I made specifically using Illustrator. I believe that the final results came up well to the point that I do not see it necessary to make any changes."
        }
        // {
        //   id: 4,
        //   name: "Charmeleon",
        //   image: 'http://vignette2.wikia.nocookie.net/nintendo/images/f/fb/Charmeleon.png/revision/latest?cb=20141002083329&path-prefix=en',
        //   description: "Charmeleon is the evolved version of charmander"
        // },
        // {
        //   id: 5,
        //   name: "Charizard",
        //   image: 'http://vignette2.wikia.nocookie.net/nintendo/images/9/95/Charizard.png/revision/latest?cb=20141002083306&path-prefix=en',
        //   description: "Charizard is the evolved version of charmeleon"
        // },
      ]
    };
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange(event) {

    let p = event;
    // console.log('the current page is: ' + p)

    // if (p === 1) {
    //   p = 2;
    // } else {
    //   p = 1;
    // }

    //the line below just needs specification to change the new value of the page to render
    this.setState({page: p});
    // this.setState({ [event.target.id]: event.target.value });
  }
  
  render() {
    const designs = this.state.designs;

    if(this.state.page === 1) {
      return (
        <div id='page-container'>
        <div className="wrapper">
          <HomeMenu designs={designs} page = {this.state.page} handleChange = {this.handleChange} />
          <GridRender designs={designs} />
        </div>
        <Footer />
      </div>
      );
    } else {
      return (
      
        //PROCESS
  
        //Use conditional rendering to display your web design work in two rows and as many
        //as necessary. Don't worry about database. Put your content inside an array and render it.
        //if the user clicks on one of the graphic design div boxes, make the screen black
  
          // 1. Make your designs render in rows of two and as many columns necessary
          // 2. if the user clicks on one of the designs, make the website turn black and display
          //    a single design on the left with a description on the right 
          //       1. add a next and prev toggle icon that will display the next and prev design.
          //          Use Javascript to account the content inside the Array or object.
          //       2. make a closing icon to revert back to the row/column display
          // 3. Dont worry about CSS till the end
          <div id='page-container'>
            <div className="wrapper">
              <HomeMenu designs={designs} page = {this.state.page} handleChange = {this.handleChange} />
              <SiteRender designs={designs} />
            </div>
            <Footer />
          </div>
        
        
        // <form id="article-form">
        //   <Input
        //     text="SEO title"
        //     label="seo_title"
        //     type="text"
        //     id="seo_title"
        //     value={seo_title}
        //     handleChange={this.handleChange}
        //   />
        // </form>
      );
    }
  }
}
export default FormContainer;