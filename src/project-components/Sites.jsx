import React from "react";

class SiteRender extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    
    };
    
  }
  
  render(props) {
    const images = this.props.images;
    return (

      <section className="site-container">
        <div className="center-site">
          <div className="site-description">
            <p>Page is currently under maintenance</p>
          </div>
        </div>
      </section>
    );
  }
}
export default SiteRender;