import React from 'react'
import './Courses.css'

const Courses = () => {
  return (
    <div className='courses'>
        <h1>Your Courses</h1>

        <div className='courses-container'>
            <div className='course'>
              <p className='course-status'>In Progress</p>
                {/* <img src='https://www.codingninjas.com/assets-landing/images/CNLOGO.svg' /> */}
                <div className='course-details'>
                    <h3>Web Development</h3>
                    <p>Learn Web Development from scratch</p>
                    <button className='view-course'>View Course</button>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Courses