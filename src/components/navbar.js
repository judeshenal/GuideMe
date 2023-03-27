/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import "./navbar.css";
import * as RiIcons from "react-icons/ri";
import { Link } from 'react-router-dom';
import bell from '../Assets/bell.svg'

const Navbar = () => {
  const [showInput, setShowInput] = useState(false);

  const unSetMouse = () => {
    setShowInput(false);
  };

  const setMouse = () => {
    setShowInput(true);
  };
  return (
    <nav className="navbar navbar-light nav navbar-expand-sm">
      <img
        className="logo mx-2"
        id="logo"
        src="/images/logo/guidme_logo.png"
        width="95"
        height="35"
        alt="menu"
      />
      <button
        className="navbar-toggler"
        data-bs-toggle="collapse"
        data-bs-target="#nav"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-end" id="nav">
        <ul className="navbar-nav">
          <li className="nav-item px-3">
            <a href="/" className="nav-link" style={{color:"black"}}>
              Home
            </a>
          </li>
          <li className="nav-item px-3">
            <a href="#" className="nav-link" style={{color:"black"}}>
              Consultants
            </a>
          </li>
          <li className="nav-item px-3">
            <a href="/job-post" className="nav-link" style={{color:"black"}}>
              Jobs
            </a>
            
          </li>
          <li className="nav-item px-3">
            <a href="" className="nav-link" style={{color:"black"}}>
              Blog
            </a>
          </li>
          <li className="nav-item px-3">
            <a href="#" className="nav-link" style={{color:"black"}}>
              Login/Signup
            </a>
          </li>
          <li className="nav-item px-3">
            <a href="/ContactUs" className="nav-link" style={{color:"black"}}>
              Contact Us
            </a>
          </li>

          {showInput ? (
            <li className="nav-item search px-3 pt-2">
              | &nbsp;
              <input
                placeholder="Search..."
                onMouseLeave={unSetMouse}
                onMouseEnter={setMouse}
              />
            </li>
          ) : (
            <li className="nav-item pt-2 px-3">
              | &nbsp;
              <RiIcons.RiSearchLine
                size={20}
                onMouseLeave={unSetMouse}
                onMouseEnter={setMouse}
              />
            </li>
          )}


<li className="nav-item px-3">
            <a href="#" className="nav-link" style={{color:"black"}}>
            <Link to="/notification"><img src={bell} style={{height:'21px',width:'21px',marginTop:"3px",margineRight:"25px"}} ></img></Link>
            </a>
          </li>

        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
// // import React from 'react'
// import './Header.css'
// import logo from '../Assets/guidme.png'
// import { Link } from 'react-router-dom';
// import bell from '../Assets/bell.svg'

// export default function Header() {
//   return (
//     <div>
//         <div class="topnav">
//           <Link to="/notification"><img src={bell} style={{height:'21px',width:'21px',marginTop:"3px",margineRight:"25px"}} ></img></Link>
//           <input type="text" placeholder="Search.."/>
//           <a href="#contact">Login/SignUp</a>
//           <a href="#contact">Blog</a>
//           <Link to="/job-post">Job</Link>
//           <a href="#about">Consultants</a>
//           <Link to="/">Home</Link>
//           <img classname="logo" src={logo} alt=""></img>
//         </div>
//     </div>
//   )
// }
