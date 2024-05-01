import React from 'react'
import './coursepopup.css'
function CoursePopup({ closeModel }) {
    return (
        <>
            <div className="modelBackground">
                <div className='modelContainer'>
                    <div className="titleCloseBtn">
                        <button onClick={() => closeModel(false)}> x </button>
                    </div>
                    <div className='titles'>
                        <h1>course title </h1>
                    </div>
                    <div className='descriptionContainer'>
                        <div className='imgDiv'>

                        <img src="https://images.pexels.com/photos/5553080/pexels-photo-5553080.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="" />
                        </div>
                        <div className='introDiv'>
                            <h3>What you'll learn</h3>
                        <p>The Introduction to Software Engineering course serves as a foundational exploration of the principles, concepts, and practices of software engineering.  
                       The Introduction to Software Engineering course serves as a foundational exploration of the principles, concepts, and practices of software engineering. 
                       The Introduction to Software Engineering course serves as a foundational exploration of the principles, concepts, and practices of software engineering. 
                        
                       </p>
                       
                        </div>
                      
                    </div>
                    <button className='startBtn'>Enroll Now</button>
                </div>
            </div>
        </>
    )
}

export default CoursePopup
