import React from "react";
import YoutubeEmbed from "./YoutubeEmbed.jsx";

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

            <h1>School Projects</h1>
            <YoutubeEmbed embedId="JBRuNSaUJE8" />
            <a href="https://github.com/luismr00" title="school projects" target="_blank">Check out my GitHub Repo to find all the projects shown in this video</a>

            <h1>Social Media Site</h1>
            <YoutubeEmbed embedId="487r3n4J9a8" />
            <a href="https://github.com/luismr00/C440-Project" title="social meida" target="_blank">Check out the GitHub Repo for social media site project</a>

            <h1>Snap Nourish</h1>
            <YoutubeEmbed embedId="i0sDY-NdTZY" />
            <a href="https://github.com/ssotoale/SnapNourish" title="snap nourish" target="_blank">Check out the GitHub Repo for Snap Nourish</a>
            
            <h1>Comment Hunter</h1>
            <YoutubeEmbed embedId="6uP6VD8ME-E"/>
            <a href="https://github.com/comment-hunter/comment-hunter" title="comment hunter" target="_blank">Check out the GitHub Repo for Comment Hunter</a>

          </div>
        </div>
      </section>
    );
  }
}
export default SiteRender;