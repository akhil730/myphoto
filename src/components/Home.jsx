import React from 'react';
import "../babyImage.png";
import "../photo.png";
import "../App.css"

function Home() {
    return (
  
         <div className="App">
           <div>
             
           <text class = "caps"  font-style={"italian"} font-family={"Dosis"}> Aravind</text>
          
    <img src= {require("../babyImage.png")} height = "500" width = "500" alt="image1" align= "right"/>
    {/* <img className = "center" src = {require("../babyImage.png")} alt = "image2" /> */}



      <h1 className='caps'  text-align='left' data-line-height="50" data-font-size="40" letter-spacing = "12"> Birthday <br/>photography</h1>
    <p class = "para" text-align="left" font-weight = "400"> <i>Wedding parties
    Any parties can be made more beautiful with us. <br/>
    Your memories can be even more beautiful.<br/>
    Make your special days more beautiful with us<br/>
    We give our best to make you happy.
    </i>
     </p>

     <img className="center" src= {require("../babyImage.png")} height = "500" width = "500" alt="image1" align= "right"/>
     <p class = "para" text-align="left" font-weight = "400"> <i>Wedding parties
    Any parties can be made more beautiful with us. <br/>
    Your memories can be even more beautiful.<br/>
    Make your special days more beautiful with us<br/>
    We give our best to make you happy.
    </i>
     </p>
      </div> 
      </div>
    )
}

export default Home;