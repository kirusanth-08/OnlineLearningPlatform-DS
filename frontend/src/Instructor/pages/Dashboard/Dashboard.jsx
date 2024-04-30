import React from 'react'
import './Dashboard.css'

/*icons */
import { MdSchool } from "react-icons/md";
import { FaChalkboardTeacher } from "react-icons/fa";


const Dashboard = () => {
  return (
    <div className='instructor-dashboard'>
      <h1>Dashboard</h1>

      <div className='dashboard-header'>
        <div className='dashboard-stats'>
          <div className='stat'>
            <h3>Students</h3>
            <MdSchool className='stat-icon'/>
            <p>10</p>
          </div>
          <div className='stat'>
            <h3>Your courses</h3>
            <FaChalkboardTeacher className='stat-icon'/>
            <p>10</p>
          </div>
          <div className='stat'>
            <h3>Today Enrolled Stdents</h3>
            <MdSchool className='stat-icon'/>
            <p>10</p>
          </div>
          <div className='stat'>
            <h3>Students</h3>
            <MdSchool className='stat-icon'/>
            <p>10</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard