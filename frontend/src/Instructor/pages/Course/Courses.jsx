import React from 'react'
import { Link } from 'react-router-dom';
import './Courses.css'

const Courses = () => {
  return (
    <div className='courses'>
        <h1>Your Courses</h1>

        <div className='courses-container'>
            <div className='course'>
              <p className='course-status'>In Progress</p>
                <div className='course-details'>
                    <h3>Web Development</h3>
                    <p>Learn Web Development from scratch</p>
                    <button className='view-course'>View Course</button>
                    <Link to="/courses/modify" className='edit-course'>Edit Course</Link>
                </div>
            </div>
            <div className='course'>
              <p className='course-status'>In Progress</p>
                <div className='course-details'>
                    <h3>Web Development</h3>
                    <p>Learn Web Development from scratch</p>
                    <button className='view-course'>View Course</button>
                    <Link to="/courses/modify" className='edit-course'>Edit Course</Link>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Courses