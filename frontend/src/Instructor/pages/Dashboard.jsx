import React from 'react'
import InsNavbar from '../components/Navbar/InsNavbar'
import './Dashboard.css'

const Dashboard = () => {
  return (
    <div className='instructor-dashboard'>
      <div className='sidebar'>
        <div className='logo'>Alright</div>
        <div className='nav-links'>
          <a href='#'>Dashboard</a>
          <a href='#'>Courses</a>
          <a href='#'>Students</a>
          <a href='#'>Settings</a>
        </div>
      </div>
      <div className='main-content'>
        
      </div>
    </div>
  )
}

export default Dashboard