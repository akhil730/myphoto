// import React from "react";
// import {  Link } from "react-router-dom";
// import Home  from "./components/Home";

// function Navbar () {
//     return (
//         <nav className="navbar  bg-primary">
//         <ul>
//             <li>
//             <Link to = '/Home'>
//             Home
//     </Link>
//             </li>
//         </ul>
//         </nav>
//     )
// }

import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import './App.css'

export default function Navbar() {
  return (
    <Router>
      <div>

           <div className="item_outer"> 
           
           <text align = "right" font = "arial"><a align = "right" font = "sans-serif" href="/">home</a></text>
          
           
           <text align = "right" font = "arial"> <a  font = "sans-serif" href="/">who we are</a></text> 
        
           <text align = "right" font = "arial"> <a font = "sans-serif" href="/About">About</a></text> 
           <text align = "right" font = "arial"><a font = "sans-serif" href="/Contact">Contact</a></text> 
           </div>
           </div>
        <Routes>
        <Route path="/" exact element = {<Home/>}/>

        <Route path="/who we are" exact element = {<who we are/>}/>
  
          <Route  path="/About" element = {<About/>} />
   
          <Route path="/Contact" exact element = { <Contact/> }/>
     
     
        </Routes>
     
    </Router>
  );
}

