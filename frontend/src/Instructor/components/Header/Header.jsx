import React, { useState, useRef, useEffect  } from 'react'
import './Header.css'
import { MdNotifications } from "react-icons/md";

const Header = () => {
  const [showNotifications, setShowNotifications] = useState(false);
  const notificationRef = useRef(null);

  const handleNotificationClick = (event) => {
    event.preventDefault();
    setShowNotifications(!showNotifications);
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (notificationRef.current && !notificationRef.current.contains(event.target)) {
        setShowNotifications(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className='header'>
        <h3>Welcome back, Kirusanth</h3>
        <div className='header-right'>
            <a href='#' className='notification' onClick={handleNotificationClick} ref={notificationRef}>
              <MdNotifications className='bell'/>
              <div className='notification-count'>3</div>
            </a>
            {showNotifications && (
              <div className='notification-popup' ref={notificationRef}>
                <div className='notification-item'>
                  <div className='notification-item-title'>New Course Created</div>
                  <div className='notification-item-time'>2 hours ago</div>
                  <div className='notification-item-message'>A new course has been created by a student</div>
                </div>
                <div className='notification-item' id='read'>
                  <div className='notification-item-title'>New Course Created</div>
                  <div className='notification-item-time'>2 hours ago</div>
                  <div className='notification-item-message'>A new course has been created by a student</div>
                </div>
              </div>
            )}
            <a href='#' className='profile'>
                <img src='https://i0.wp.com/www.muscleandfitness.com/wp-content/uploads/2023/11/Bodybuilder-and-2023-Classic-Physique-Winner-Chris-Bumstead-posing-on-stage-at-the-2023-Olympia-Competition.jpg?quality=86&strip=all' />
                <div className='profile-name'>Kirusanth</div>
            </a>
        </div>
    </div>
  )
}

export default Header