import React from 'react'
import './Dashboard.css'

/*icons */
import { PiStudent } from "react-icons/pi";


const Dashboard = () => {
  return (
    <div className='instructor-dashboard'>
      <h1>Dashboard</h1>

      <div className='dashboard-header'>
        <div className='dashboard-stats'>
          <div className='stat'>
            <h3>Students</h3>
            <PiStudent className='stat-icon'/>
            <p>10</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard