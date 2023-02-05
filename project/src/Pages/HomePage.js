import React from 'react'
import homepage from '../Assets/homepage.png'
import './HomePage.css'
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <div >
      <img  src={homepage} className="HomePage" />
      <div className='footer'>
      <Footer/>
      </div>
    </div>
  )
}
