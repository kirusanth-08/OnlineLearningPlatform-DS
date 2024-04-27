import React, { useState } from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [user, setUser] = useState("f"); // Replace this with your actual user state/context

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
                    <a href="#">About</a>
                    <a href="#">Contact</a>
            </div>
            <div className='navbar-main__cta'>
                {user ? (
                    <div>
                        <a href="#" className='notifications'>
                            <FontAwesomeIcon icon={faBell} />
                        </a>
                        <a href="#" className='profile'>
                            Profile <FontAwesomeIcon icon={faCaretDown} />
                            </a>
                    </div>
                ) : (
                    <a href="#" className='btn'>Get Started</a>
                )}
            </div>
        </div>
            {user ? (
                <div className='navbar-user'>
                    <div className='navbar-user__links'>
                        <a href="#">Home</a>
                        <a href="#">My Learning</a>
                    </div>
                </div>
            ) : (
                <></>
            )}
    </div>
  )
}

export default Navbar;