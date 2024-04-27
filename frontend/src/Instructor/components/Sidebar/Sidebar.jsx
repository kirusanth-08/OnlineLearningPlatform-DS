import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='logo'>Alright</div>
      <div className='sidebar-elements'>
        <div className='nav-links'>
            <div className='nav-links__header'>Overview</div>
            <Link to='/dashboard'>Dashboard</Link>
            <Link to='/courses'>Courses</Link>
            <Link to='/students'>Students</Link>
        </div>

        <div className='nav-settings'>
            <div className='nav-settings__header'>Settings</div>
            <Link to='/settings'>Settings</Link>
            <Link to='/logout'>Logout</Link>
        </div>
      </div>
    </div>
  )
}

export default Sidebar;