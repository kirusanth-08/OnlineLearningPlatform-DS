import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='navbar__main'>
            <div className='navbar__logo'>
                <a href="#">Alright</a>
            </div>
            <div className='navbar__links'>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
            <div className='navbar__cta'>
                <a href="#" className='btn'>Get Started</a>
            </div>
        </div>    
    </div>
  )
}

export default Navbar