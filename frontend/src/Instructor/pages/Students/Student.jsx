import React from 'react'
import './Student.css'

const Student = () => {
  return (
    <div className='students'>
        <h1>Students</h1>

        <div className='students-container'>
            <table>
                <tr>
                    <th>Student Name</th>
                    <th>Email</th>
                    <th>Course</th>
                    <th>Progress</th>
                    <th>Enrolled Date</th>
                </tr>
                <tr>
                    <td>Kirusanth</td>
                    <td>kirusanth200110@gmail.com</td>
                    <td>Web Development</td>
                    <td>50%</td>
                    <td>2020-10-12</td>
                </tr>
            </table>
        </div>
    </div>
  )
}

export default Student