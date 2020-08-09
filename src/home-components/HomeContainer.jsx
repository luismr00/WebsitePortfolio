import React from "react";
import HomeMenu from "./Menu.jsx";
import Footer from "./Footer.jsx";
import Scroll1 from "./Welcome.jsx";
import Scroll2 from "./Work.jsx";
import Scroll3 from "./About.jsx";
import Scroll4 from "./Contact.jsx";

class HomeContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      images: [
        {
          id: 0,
          name: "Logo",
          image: 'images/White_Logo.png',
          description: "This is bulbasaur, a grass type pokemon"
        },
      ]
    };
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }
  
  render() {
    const images = this.state.images;
    return (


      <div>
        <HomeMenu images={images} />
        <Scroll1 images={images}/>
        <Scroll2 images={images}/>
        <Scroll3 images={images}/>
        <Scroll4 images={images}/>
        <Footer />
      </div>
      
      
      

    );
  }
}
export default HomeContainer;