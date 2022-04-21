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

export default function Navbar() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/About">About</Link>
            </li>
            <li>
              <Link to="/Contact">Contact</Link>
            </li>
          </ul>
        </nav>

        {/* A <Routes> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
       
        <Routes>
        <Route path="/" exact element = {<Home/>}/>
  
          <Route path="/About" exact element = {<About/>}/>
   
          <Route path="/Contact" exact element = { <Contact/> }/>
     
        </Routes>
      </div>
    </Router>
  );
}

