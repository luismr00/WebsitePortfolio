//INITIAL SET UP

/*import React from 'react';
import reactDOM from 'react-dom';
import './styles/style.css'

//const template = <h1>Hello world!</h1>

const App = () => {
    return <h1>Hello, how are you?</h1>
}

//reactDOM.render(template, document.getElementById('root'));
reactDOM.render(<App />, document.getElementById('root'));
*/

//PASTING NEW SET UP AND CONVERTING INDEX.JS TO JSX

import React from 'react';
import ReactDOM from "react-dom";
import './styles/projects.css';
//import './styles/home.css';
import FormContainer from "./components/FormContainer.jsx";
//import HomeScroll from "./home-components/Home.jsx";

// const wrapper = document.getElementById("create-article-form");
// wrapper ? ReactDOM.render(<FormContainer />, wrapper) : false;

ReactDOM.render(<FormContainer />, document.getElementById("root"));
//ReactDOM.render(<HomeScroll />, document.getElementById("home"));