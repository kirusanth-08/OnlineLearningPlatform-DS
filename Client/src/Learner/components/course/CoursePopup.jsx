import React, { useState } from 'react'
import './coursepopup.css'
import PayPal from '../PayPal/PayPal'
import axios from 'axios'

function CoursePopup({ closeModel, price, title, description,courseID }) {
   
    const [checkout, setCheckOut] = useState(false)
    const makeEnroll=()=>{
        // console.log('course =>>'+courseID)
        const enrolldata={
            user_id : localStorage.getItem('id'),
            course_id:courseID,

        }
        axios.post('http://localhost:8085/api/enrollments/enroll',enrolldata).then((res)=>{
            console.log(res.data)
           
        }).catch((err)=>{
            console.log(err)
        })
    }
    return (
        <>
            <div className="modelBackground">
                <div className='modelContainer'>
                    <div className="titleCloseBtn">
                        <button onClick={() => closeModel(false)}> x </button>
                    </div>
                    <div className='titles'>
                        <h1>{title}</h1>
                    </div>
                    <div className='descriptionContainer'>
                        <div className='imgDiv'>

                            <img src="https://images.pexels.com/photos/5553080/pexels-photo-5553080.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="" />
                        </div>
                        <div className='introDiv'>
                            <h3>What you'll learn</h3>
                            <p>
                                {description}
                            </p>

                        </div>

                    </div>
                    {checkout ? (
                        <PayPal price={price} title={title} userID = { localStorage.getItem('id')} courseID={courseID}/>
                    ) : (
                        <button className='startBtn' onClick={
                            () => {

                                setCheckOut(true)
                                makeEnroll();
                            }
                        }>Enroll Now</button>
                    )}

                </div>
            </div >
        </>
    )
}

export default CoursePopup
