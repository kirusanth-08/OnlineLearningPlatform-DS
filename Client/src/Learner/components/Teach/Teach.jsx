import React, { useContext, useState } from 'react'
import './teach.css'
import Back from '../common/back/Back'
import B4 from '../../photos/boy.jpeg'
import PopupCourseCreation from './PopupCourseCreation'
import { AuthContext } from '../helpers/AuthContext'
import { useNavigate } from 'react-router-dom'

const Teach = () => {
    const {authState}  = useContext(AuthContext)
    const navigate = useNavigate();
    const [showCreateCourse, setShowCreateCourse] = useState(false);
    const toggleCreateCourse =()=>{
        
        setShowCreateCourse(!showCreateCourse)
        {!authState.status && navigate('/login') }
    }
    const closeForm = () => {
        setShowCreateCourse(false);
       
      };
    return (
        <>
            <Back title={'START TEACH'} />



            <section className={`aboutHomes ${showCreateCourse? 'popupActive' : ''}`}>
            {showCreateCourse && <PopupCourseCreation onClose={closeForm} />}
                <div className='containers flexSBs'>
                    <div className='left row'>
                        <img src={B4} alt='' />
                    </div>
                    <div className='right row'>

                        <div className='items'>


                            <div className='item flexSB'>
                                <div className='teach_container'>
                                    <div className='instructions'>
                                        <h4>1. Course Title and Description:</h4>
                                        <ul className='ulls'>
                                            <li>Provide a clear and descriptive title for your course.</li>
                                            <li>Write a detailed description that outlines what the course covers, its objectives, and who it's intended for.</li>
                                        </ul>

                                    </div>
                                    <div className='instructions'>
                                        <h4>2. Instructor Information:</h4>
                                        <ul className='ulls'>
                                            <li>
                                                Make sure your profile information is up-to-date, including your name, profile picture, and bio.
                                            </li>
                                        </ul>
                                    </div>
                                    <div className='instructions'>
                                        <h4>3. Course Content:</h4>
                                        <ul className='ulls'>
                                            <li>Plan your course content in advance, including lectures, assignments, quizzes, and any additional resources.</li>

                                        </ul>
                                    </div>
                                    <div className='instructions'>
                                        <h4>4. Video Lectures:</h4>
                                        <ul className='ulls'>
                                            <li>Record high-quality video lectures that are easy to follow and engaging for students.</li>
                                            <li>Consider breaking longer lectures into shorter segments for better retention.</li>
                                        </ul>
                                    </div>
                                    <div className='instructions'>
                                        <h4>5. Supplementary Materials:</h4>
                                        <ul className='ulls'>
                                            <li>Provide supplementary materials such as slides, PDFs, or additional reading resources to enhance the learning experience.</li>
                                        </ul>
                                    </div>
                                    <div className='instructions'>
                                        <h4>6. Course Pricing:</h4>
                                        <ul className='ulls'>
                                            <li>Set a fair and competitive price for your course based on its value and market demand.</li>
                                            <li>Consider offering discounts or promotions to attract more students.</li>
                                        </ul>
                                    </div>

                                </div>

                            </div>
                        </div>
                        <div className='btns'>

                        <button onClick={toggleCreateCourse}> create course</button>
                        </div>
                    </div>
                </div>
            </section>


            {/* <div className='container'>
                <div className='imgCon'>

                    <img src='https://findit-resources.s3.amazonaws.com/forums/1657021120252.jpg' alt='' />
                </div>
                <div className='teach_container'>
                    <div className='instructions'>
                        <h4>1. Course Title and Description:</h4>
                        <ul>
                            <li>Provide a clear and descriptive title for your course.</li>
                            <li>Write a detailed description that outlines what the course covers, its objectives, and who it's intended for.</li>
                        </ul>

                    </div>
                    <div className='instructions'>
                        <h4>2. Instructor Information:</h4>
                        <ul>
                            <li>
                                Make sure your profile information is up-to-date, including your name, profile picture, and bio.
                            </li>
                        </ul>
                    </div>
                    <div className='instructions'>
                        <h4>3. Course Content:</h4>
                        <ul>
                            <li>Plan your course content in advance, including lectures, assignments, quizzes, and any additional resources.</li>

                        </ul>
                    </div>
                    <div className='instructions'>
                        <h4>4. Video Lectures:</h4>
                        <ul>
                            <li>Record high-quality video lectures that are easy to follow and engaging for students.</li>
                            <li>Consider breaking longer lectures into shorter segments for better retention.</li>
                        </ul>
                    </div>
                    <div className='instructions'>
                        <h4>5. Supplementary Materials:</h4>
                        <ul>
                            <li>Provide supplementary materials such as slides, PDFs, or additional reading resources to enhance the learning experience.</li>
                        </ul>
                    </div>
                    <div className='instructions'>
                        <h4>6. Course Pricing:</h4>
                        <ul>
                            <li>Set a fair and competitive price for your course based on its value and market demand.</li>
                            <li>Consider offering discounts or promotions to attract more students.</li>
                        </ul>
                    </div>

                    <input type='checkbox' className='custom-control custom-checkbox' id='check' required />
                    <label htmlFor='check' className='custom-input-label ms-2'>
                        accept terms and conditions
                    </label>



                    <button>create course</button>
                </div>
            </div> */}
        </>
    )
}

export default Teach
