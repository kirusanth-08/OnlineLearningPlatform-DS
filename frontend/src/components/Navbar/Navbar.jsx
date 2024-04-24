import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [user, setUser] = useState(null); // Replace this with your actual user state/context

  return (
    <div className='navbar'>
        <div className='navbar-main'>
            <div className='navbar-main__logo'>
                <a href="#">Alright</a>
            </div>
            <div className='navbar-main__search'>
                <input type="text" placeholder="Search for courses" />
                <button>Search</button>
            </div>
            <div className='navbar-main__links'>
                    <a href="#">Home</a>
                    <a href="#">About</a>
                    <a href="#">Services</a>
                    <a href="#">Contact</a>
            </div>
            <div className='navbar-main__cta'>
                {user ? (
                    <a href="#" className='btn'>Profile</a>
                ) : (
                    <a href="#" className='btn'>Get Started</a>
                )}
            </div>
        </div>
        <div className='navbar-user'>
                <div className='navbar-user__links'>
                    <a href="#">My Learnings</a>
                    <a href="#">Settings</a>
                    <a href="#">Logout</a>
                </div>
            
        </div>
    </div>
  )
}

export default Navbar;