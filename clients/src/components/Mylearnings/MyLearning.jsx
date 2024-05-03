import React, { useEffect, useState } from 'react'
import './mylearning.css'
import Back from '../common/back/Back'
import PlayVideo from './PlayVideo'
import axios from 'axios'


const MyLearning = () => {
    const [openModal, setOpenModal] = useState(false)
    const [content, setContent] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8080/api/user/authenticate', {
            headers: {
                authtoken: localStorage.getItem('authtoken')
            }
        }).then((res) => {
            if (res.data.error) {
                console.log(res.data.error)
            } else {
                console.log(res.data.user)
                axios.get('http://localhost:8082/api/courseContent/').then((res) => {
                    if (res.data.error) {
                        console.log(res.data.error)
                    } else {
                        console.log(res.data.content[1])
                        setContent(res.data.content)
                    }
                })
            }
        })
    }, [])

    return (

        <>
            <Back title={'MY LEARNINGS'} />
            <div className='learningContainer'>
                <ul className="accordion">
                    {content.map((course, index) => (
                        <li key={index} className='accordianLi'>




                            <input type="radio" name="accordion" id={`${course._id}`} />
                            <label htmlFor={`${course._id}`} className='labelss'>{course.topic}</label>
                            <div className="content">
                                
                                <h4>{course.topic}</h4>
                                <a href='#' onClick={() => {
                                    setOpenModal(true)
                                }}>Open Video</a>
                                {openModal &&
                                    <PlayVideo closeVideo={setOpenModal} video={course.video} />
                                }
                                <hr />

                                {course.lecture && (
                                    <>
                                        <h5>Lecture:</h5>
                                        <a href={course.lecture.path} download rel="noopener noreferrer">{course.lecture.filename}</a>
                                    </>
                                )}
                                <hr />
                                {course.assignment && (
                                    <>
                                        <h5>Assignment:</h5>
                                        <a href={course.assignment.path} download rel="noopener noreferrer">{course.assignment.filename}</a>
                                    </>
                                )}
                                <hr />
                            </div>
                            <div className='unEnrollDiv'>

                                <button className='unEnrollBtn'>UnEnroll</button>
                            </div>


                        </li>
                    ))}


                    
                </ul>
            </div>
        </>

    )
}

export default MyLearning
