import React from 'react';
import ReactDOM from "react-dom";
import './styles/home.css';
import './styles/jquery.fullPage.css';
import HomeContainer from "./home-components/HomeContainer.jsx";
//import HomeScroll from "./home-components/Home.jsx";

// const wrapper = document.getElementById("create-article-form");
// wrapper ? ReactDOM.render(<FormContainer />, wrapper) : false;


// const template = React.createElement('h1', null, 'This is coming from the new home page!');
// ReactDOM.render(template, document.getElementById('home'));

ReactDOM.render(<HomeContainer />, document.getElementById("home"));
//ReactDOM.render(<HomeScroll />, document.getElementById("home"));