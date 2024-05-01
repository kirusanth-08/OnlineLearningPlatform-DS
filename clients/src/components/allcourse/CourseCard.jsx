import React, { useContext, useEffect, useState } from 'react'
import "./courses.css"
//import { coursesCard } from "../../dummydata"
import {  useNavigate } from 'react-router-dom'
import { AuthContext } from '../helpers/AuthContext'
import axios from 'axios'

 /////////////////////////////////////////////////////////
const CourseCard = () => {
  const navigate = useNavigate()
  const {authState} = useContext(AuthContext)
  const [courses , setCourses] = useState([])
  const click = ()=>{
    //{!authState == '' ? navigate('/about') : navigate('/login')  }
    {authState.status ? navigate('/about') : navigate('/login')  }
    
  }
 
  useEffect(()=>{
    const fetchCourses = ()=>{
         
          axios.get('http://localhost:8082/api/course/viewAll')
          .then((res)=>{
              setCourses(res.data.course)
               
          }).catch((err)=>{
            console.error('Error fetching courses:', err);
          })
           
    }
    fetchCourses();
  },[]);
  
  return (
    <>
      <section className='coursesCard'>
        <div className='container grid2'>
          {courses.map((val) => (
            <div className='items'key={val._id}>
              <div className='content flex'>
                <div className='left'>
                  <div className='img'>
                    <img src="../images/courses/c2.png" alt='' />
                  </div>
                </div>
                <div className='text'>
                  <h1>{val.title}</h1>
                  <div className='rate'>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <label htmlFor=''>(5.0)</label>
                  </div>
                  <div className='details'>
                     
                      <>
                        <div className='box'>
                          <div className='dimg'>
                            <img src={val.instructor_id.profile_picture} alt='' />
                          </div>
                          <div className='para'>
                            <h4>{val.instructor_id.username}</h4>
                          </div>
                        </div>
                        <span>{val.duration} hours course</span>
                      </>
                     
                  </div>
                </div>
              </div>
              <div className='price'>
                <h3>
                  ${val.priceAll} / ${val.pricePer}
                </h3>
              </div>
              <button className='outline-btn' onClick={click}>
                 ENROLL NOW ! 
                </button>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default CourseCard
