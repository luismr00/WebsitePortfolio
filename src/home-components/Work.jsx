import React from "react";

class Scroll2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    
    };
    
  }
  
  render(props) {
    const images = this.props.images;
    return (

    <section className="section" id="section1">
        <div className="text_margin">
            <p>Each design within my work reflects a combination of both Graphic and Web Design skills. From designing posters to developing websites, my goal is to come up with the best possible designs that can show beauty and attraction to the human sight. </p>
        </div>    
        {/* <a href="projects.html"><p className="work-anchor"><b>View my work</b></p></a> */}
        <a href="projects.html"><button className="work-anchor">View work</button></a>
   </section> 
      


    );
  }
}
export default Scroll2;