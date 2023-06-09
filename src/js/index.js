//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import reactDom from "react-dom";

const element = <FontAwesomeIcon icon={faClock} />



//render your react application
ReactDOM.render(<Home />, document.querySelector("#app"));

