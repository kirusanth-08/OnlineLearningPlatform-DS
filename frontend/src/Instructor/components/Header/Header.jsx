import React, { useState, useRef, useEffect  } from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import { MdNotifications } from "react-icons/md";
import Swal from 'sweetalert2'
const Header = () => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfileOptions, setShowProfileOptions] = useState(false);
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

  

  const handleLogout = () => {
    Swal.fire({
      title: "Are you sure want to logout?",
      // text: "You have to login again!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes!"
    }).then((result) => {
      if (result.isConfirmed) {
        // Perform logout operation here
        console.log('User logged out');
        Swal.fire({
          title: "Logged out!",
          // text: "Your file has been deleted.",
          icon: "success"
        });
      }
    });
  };

  return (
    <div className='header'>
        <h3>Welcome back, Kirusanth</h3>
        <div className='header-right'>
            <div className='notification' onClick={handleNotificationClick} ref={notificationRef}>
              <MdNotifications className='bell'/>
              <div className='notification-count'>3</div>
            </div>
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
            <div className='profile' onMouseEnter={() => setShowProfileOptions(true)} onMouseLeave={() => setShowProfileOptions(false)}>
        <img src='https://i0.wp.com/www.muscleandfitness.com/wp-content/uploads/2023/11/Bodybuilder-and-2023-Classic-Physique-Winner-Chris-Bumstead-posing-on-stage-at-the-2023-Olympia-Competition.jpg?quality=86&strip=all' alt='kirusanth'/>
        <div className='profile-name'>Kirusanth</div>
          {showProfileOptions && (
            <ul className='profile-options'>
              <li><Link to='/profile' className='profile-option'>Profile</Link></li>
              <li><Link to='/students' className='profile-option'>Students</Link></li>
              <li><Link to='/courses' className='profile-option'>Courses</Link></li>
              <li><div className='profile-option' onClick={handleLogout} >Logout</div></li>
            </ul>
          )}
      </div>
        </div>
    </div>
  )
}

export default Header