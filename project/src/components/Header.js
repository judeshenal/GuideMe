import React from 'react'
import './Header.css'
import logo from '../Assets/guidme.png'
import { Link } from 'react-router-dom';
import bell from '../Assets/bell.svg'

export default function Header() {
  return (
    <div>
        <div class="topnav">
          <Link to="/notification"><img src={bell} style={{height:'21px',width:'21px',marginTop:"3px",margineRight:"25px"}} ></img></Link>
          <input type="text" placeholder="Search.."/>
          <a href="#contact">Login/SignUp</a>
          <a href="#contact">Blog</a>
          <Link to="/job-post">Job</Link>
          <a href="#about">Consultants</a>
          <Link to="/">Home</Link>
          <img classname="logo" src={logo} alt=""></img>
        </div>
    </div>
  )
}
