import React from "react";
import './photoo.png';
import './babyImage.png';
import './App.css';
import Navbar from "./Navbar";


function App() {
  return (
  
    <div id = "root">
      
        <Navbar />   

    <div className="App">
    <img className="center" src= {require("./photoo.png")} height = "500" width = "500" alt="image1"/>
    <h1>Akhil</h1>
    <img className = "center" src = {require("./babyImage.png")} alt = "image2" />
    <h1>Make your special days more beautiful with us</h1>
    <img className = "center" src = {require("./babyImage.png")} alt = "image2"/>
    <h2> We give our best to make you happy</h2>
      </div>
    </div>
  );
}

export default App;
