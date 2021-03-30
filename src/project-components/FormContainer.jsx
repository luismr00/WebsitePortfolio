import React from "react";
import GridRender from "./Grid.jsx";
import SiteRender from "./Sites.jsx";
import HomeMenu from "./Menu.jsx";
import Footer from "./Footer.jsx";
import Graphic1 from "../images/Financial-Literacy.jpg";
import Graphic2 from "../images/Time-Management.jpg";
import Graphic3 from "../images/STEMTransfer101.jpg";
import Graphic4 from "../images/Transfer101.jpg";
import Graphic5 from "../images/Resume-Workshop---Sample.jpg";
import Graphic6 from "../images/Interview-Sample.jpg";
import Graphic7 from "../images/Gir.jpg";
import Graphic8 from "../images/MedicalFlyer.jpg";
import Graphic9 from "../images/Rangel_CourseProject.jpg";
import Graphic10 from "../images/Email blast.jpg";


class FormContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      page: 1,
      designs: [
        {
          id: 0,
          name: "Financial Literacy",
          image: Graphic1,
          description: "Financial Literacy flyer was made for Los Angeles City College Veterans Resource Center to promote a workshop to help student veterans with tips to manage their finances while in school. Flyer was done solely on Adobe Photoshop."
        },
        {
          id: 1,
          name: "Time Management",
          image: Graphic2,
          description: "Time Management flyer was made for Los Angeles City College Veterans Resource Center to promote a workshop to help veterans with time management tips in order to balance school, work, and personal time. Flyer was created using Photoshop." 
        },
        {
          id: 2,
          name: "STEM Transfer 101",
          image: Graphic3,
          description: "This flyer was made for Los Angeles City College Veterans Resource Center to guide student veterans majoring in STEM with any general information on how to find and narrow down their required major and general education courses needed to transfer to a four-year university of their choice. Flyer was created using Photoshop." 
        },
        {
          id: 3,
          name: "Transfer 101",
          image: Graphic4,
          description: "Tranfer 101 flyer was made for Los Angeles City College Veterans Resource Center to guide student veterans with any general information on how to find and narrow down their required major and general education courses needed to transfer to a four-year university of their choice. Flyer was created using Photoshop."
        },
        {
          id: 4,
          name: "Resume Drafting",
          image: Graphic5,
          description: "Flyer was made for Los Angeles City College to promote a workshop to help student veterans write and polish a professional resume for job readiness. Flyer was created in Photoshop."
        },
        {
          id: 5,
          name: "Interview Workshop",
          image: Graphic6,
          description: "Flyer was made for Los Angeles City College to help student veterans practice mock interviews in order to better prepare them for actual job interviews. Flyer was created in Photoshop."
        },
        {
          id: 6,
          name: "Gir",
          image: Graphic7,
          description: "This is a graphic design poster of Gir from Invader Zim. The character was done an illustrator with the help of the pen tool and the project was perfect for getting used to this tool. By simply setting the opacity low from another image downloaded online, I was able to draw the character easily by having the lines of the image guide me while using the pen tool in Illustrator. This technique has served me when uploading a hand drawing image made on paper to my computer and converting the drawing to a vector image."
        },
        {
          id: 7,
          name: "Medical Visit",
          image: Graphic8,
          description: "This is a medical flyer for a web design project called ‘Tree of life’. The graphic design poster was done in both photoshop and illustrator. The logo was done by me with the use of the pen tool along with the curves that appear in green. These curves where used to separate the image on top with the text content below."
        },
        {
          id: 8,
          name: "Theatrical Poster",
          image: Graphic9,
          description: "This is a theatrical poster for an opera event called ‘Don Giovanni’. The vector graphics included in this poster was drawn by me in paper and then passed into illustrator. The rose was pretty difficult to make it look exactly to the drawing. Regardless, it was one of my first projects using Illustrator. Nowadays, if I want to create a more detailed drawing, I use Adobe Sketch to draw with a pencil tool instead. More projects will be shown later on using Adobe Sketch in the near future."
        },
        {
          id: 9,
          name: "Medical Email Flyer",
          image: Graphic10,
          description: "This is an email flyer intended to announce a grand opening of a new alternative medical facility in San Diego. All of this was done in photoshop and focused on typography and the background more than anything. The logo was also applied from one of the previous posters shown within this slider."
        }
      ]
    };
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange(event) {

    let p = event;
    this.setState({page: p});
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
      
          <div id='page-container'>
            <div className="wrapper">
              <HomeMenu designs={designs} page = {this.state.page} handleChange = {this.handleChange} />
              <SiteRender designs={designs} />
            </div>
            <Footer />
          </div>
        
      );
    }
  }
}
export default FormContainer;