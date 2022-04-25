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
        {/* <nav>
          <ul>
            <li>
             <h1 align = "right" font = "sans-serif"><Link to="/">Home</Link></h1>
            </li>
            <li>
             <h2 align = "right" font = "sans-serif"><Link to="/About">About</Link></h2> 
            </li>
            <li>
             <h2 align = "right" font = "sans-serif"><Link to="/Contact">Contact</Link></h2> 
            </li>
          </ul>
        </nav> */}

        {/* A <Routes> looks through its children <Route>s and
            renders the first one that matches the current URL. */}

           <span className="item_outer"> 
           <span className="item_text"><h1  align = "right" font = "arial"><a  href="/">home</a></h1> 
           </span>
           </span>
           <h1 align = "right" font = "arial"> <a align = "right" font = "sans-serif" href="/">who we are</a></h1> 
           <h1 align = "right" font = "arial"> <a align = "right" font = "sans-serif" href="/About">About</a></h1> 
           <h1 align = "right" font = "arial"><a className="center" font = "sans-serif" href="/Contact">Contact</a></h1> 
        <Routes>
        <Route path="/" exact element = {<Home/>}/>

        <Route path="/who we are" exact element = {<who we are/>}/>
  
          <Route  path="/About" element = {<About/>} />
   
          <Route path="/Contact" exact element = { <Contact/> }/>
     
     
        </Routes>
      </div>
    </Router>
  );
}

