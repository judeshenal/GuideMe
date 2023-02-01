import React from 'react'
import './Header.css'
import logo from '../Assets/guidme.png'

export default function Header() {
  return (
    <div>
        <div class="topnav">
          <input type="text" placeholder="Search.."/>
          <a href="#contact">Login/SignUp</a>
          <a href="#contact">Blog</a>
          <a href="#contact">Jobs</a>
          <a href="#about">Consultants</a>
          <a class="active" href="#home">Home</a>
          <img classname="logo" src={logo} alt=""></img>
        </div>
    </div>
  )
}
