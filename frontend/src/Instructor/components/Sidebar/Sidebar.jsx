import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

import { MdDashboard } from "react-icons/md";
import { MdSchool } from "react-icons/md";
import { MdPeople } from "react-icons/md";
import { MdSettings } from "react-icons/md";
import { MdExitToApp } from "react-icons/md";

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='logo'>Alright</div>
      <div className='sidebar-elements'>
        <div className='nav-links'>
            <NavLink to='/dashboard' activeClassName='active-link'><MdDashboard className='sidebar-icon' />Dashboard</NavLink>
            <NavLink to='/courses' activeClassName='active-link'><MdSchool  className='sidebar-icon' />Courses</NavLink>
            <NavLink to='/students' activeClassName='active-link'><MdPeople  className='sidebar-icon' />Students</NavLink>
        </div>

        <div className='nav-settings'>
            <NavLink to='/settings' activeClassName='active-link'><MdSettings className='sidebar-icon' />Settings</NavLink>
            <NavLink to='/logout' activeClassName='active-link'><MdExitToApp className='sidebar-icon' />Logout</NavLink>
        </div>
      </div>
    </div>
  )
}

export default Sidebar;