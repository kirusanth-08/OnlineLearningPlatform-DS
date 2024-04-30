import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';
import Swal from 'sweetalert2'

import { MdDashboard } from "react-icons/md";
import { MdSchool } from "react-icons/md";
import { MdPeople } from "react-icons/md";
import { MdSettings } from "react-icons/md";
import { MdExitToApp } from "react-icons/md";

const Sidebar = () => {

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
    <div className='sidebar'>
      <div className='logo'>Alright</div>
      <div className='sidebar-elements'>
        <div className='nav-links'>
            <NavLink to='/dashboard' activeClassName='active-link' className='side_btn'><MdDashboard className='sidebar-icon' />Dashboard</NavLink>
            <NavLink to='/courses' activeClassName='active-link' className='side_btn'><MdSchool  className='sidebar-icon' />Courses</NavLink>
            <NavLink to='/students' activeClassName='active-link' className='side_btn'><MdPeople  className='sidebar-icon' />Students</NavLink>
        </div>

        <div className='nav-settings'>
            <NavLink to='/settings' activeClassName='active-link' className='side_btn'><MdSettings className='sidebar-icon' />Settings</NavLink>
            <div className='side_btn' onClick={handleLogout} ><MdExitToApp className='sidebar-icon' />Logout</div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar;