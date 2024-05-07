import React, { useContext, useEffect, useState } from 'react'
import "./courses.css"
//import { coursesCard } from "../../dummydata"
import {  useNavigate } from 'react-router-dom'
import { AuthContext } from '../helpers/AuthContext'
import axios from 'axios'
import CoursePopup from '../course/CoursePopup'

 /////////////////////////////////////////////////////////
 const CourseCard = () => {
  const navigate = useNavigate();
  const { authState } = useContext(AuthContext);
  const [courseModals, setCourseModals] = useState({});
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = () => {
      axios.get('http://localhost:8082/api/course/viewAll')
        .then((res) => {
          setCourses(res.data.course);
          // Initialize course modals state with all modals closed
          const initialCourseModalsState = {};
          res.data.course.forEach(course => {
            initialCourseModalsState[course._id] = false;
          });
          setCourseModals(initialCourseModalsState);
        })
        .catch((err) => {
          console.error('Error fetching courses:', err);
        });
    };
    fetchCourses();
  }, []);

  const openModal = (courseID) => {
    {!localStorage.getItem('authtoken') && navigate('/login')}
    setCourseModals({ ...courseModals, [courseID]: true });
  };

  const closeModal = (courseID) => {
    setCourseModals({ ...courseModals, [courseID]: false });
  };

  return (
    <section className='coursesCard'>
      <div className='container grid2'>
        {courses.map((val) => (
          <div className='items' key={val._id}>
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
                  <div className='box'>
                    <div className='dimg'>
                      <img src='https://www.khalqfoundation.org/assets/images/default.png' alt='' />
                    </div>
                    <div className='para'>
                      <h4>{val.instructor_id.username}</h4>
                    </div>
                  </div>
                  <span>{val.duration} hours course</span>
                </div>
              </div>
            </div>
            <div className='price'>
              <h3>${val.priceAll} / ${val.pricePer}</h3>
            </div>
            <button className='outline-btn' onClick={() => openModal(val._id)}>
              ENROLL NOW ! 
            </button>
            {courseModals[val._id] && (
              <CoursePopup
                closeModel={() => closeModal(val._id)}
                price={val.priceAll}
                title={val.title}
                description={val.description}
                courseID={val._id}
              />
            )}
          </div>
        ))}
      </div>
    </section>
  );
};


export default CourseCard
