import React from 'react';
import "../App.css";
import  '../babyImage.png';

function About() {
    return (
        <img className="center" display = "auto" src={require("../babyImage.png")} height="auto" width="auto" alt="image1" align="auto" />
        
    )
}

export default About;