import React, { useState } from 'react'
import './mylearning.css'
import Back from '../common/back/Back'
 

const MyLearning = () => {
    
 

    return (

        <>
            <Back title={'MY LEARNINGS'} />
            <div className={`learningContainer `}>
                <ul className="accordion">
                    <li className='accordianLi'>
                        <input type="radio" name="accordion" id='first' />
                        <label htmlFor="first" className='labelss'>course 1</label>
                        <div className="content">
                            
                            <div className='secondLearningContainer'>
                                <ul className='secondAcordion'>
                                    <li className='liTag'>
                                        <input type="radio" name='secondAcordion' id='1' />
                                        <label htmlFor="1" className='secondlabel'>video</label>
                                        <div className="secondContent">
                                            
                                            <a href="#">Open Video</a>
                                             
                                            
                                        </div>
                                    </li>

                                    <li className='liTag'>
                                        <input type="radio" name='secondAcordion' id='2' />
                                        <label htmlFor="2" className='secondlabel'>lectures</label>
                                        <div className="secondContent">
                                            <p>
                                                kfjkgkdjfkgjkfdjgkfdjklgjkfdjgkjdklsjfkgsjdkf
                                            </p>
                                        </div>
                                    </li>

                                    <li className='liTag'>
                                        <input type="radio" name='secondAcordion' id='3' />
                                        <label htmlFor="3" className='secondlabel'>Assignment</label>
                                        <div className="secondContent">
                                            <p>
                                                kfjkgkdjfkgjkfdjgkfdjklgjkfdjgkjdklsjfkgsjdkf
                                            </p>
                                        </div>
                                    </li>

                                </ul>
                            </div>
                        <button className='unEnrollBtn'>UnEnroll</button>
                        </div>
                    </li>
                    
                     
                    <li className='accordianLi'>
                        <input type="radio" name="accordion" id='fourth' />
                        <label htmlFor="fourth" className='labelss'>course 4</label>
                        <div className="content">
                            {/* <p>The Introduction to Software Engineering course serves as a foundational exploration of the principles, concepts, and practices of software engineering.
                                It is designed to provide students with a comprehensive understanding of software development processes, methodologies, and tools.
                                Throughout the course, students will learn about the software development life cycle, requirements engineering, software design, implementation, testing, and maintenance.
                                Additionally, they will explore topics such as software project management, quality assurance, and software architecture.
                                The course aims to equip students with the essential knowledge and skills needed to pursue a career in software engineering or related fields.
                            </p> */}
                            <ul className='secondAcordion'>
                                <li className='liTag'>
                                    <input type="radio" name='secondAcordion' id='111' />
                                    <label htmlFor="111" className='secondlabel'>video</label>
                                    <div className="secondContent">
                                        <p>
                                            The Introduction to Software Engineering course serves as a foundational exploration of the principles, concepts, and practices of software engineering.
                                            It is designed to provide students with a comprehensive understanding of software development processes, methodologies, and tools.
                                            Throughout the course, students will learn about the software development life cycle, requirements engineering, software design, implementation, testing, and maintenance.
                                        </p>
                                    </div>
                                </li>

                                <li className='liTag'>
                                    <input type="radio" name='secondAcordion' id='21' />
                                    <label htmlFor="21" className='secondlabel'>lectures</label>
                                    <div className="secondContent">
                                        <p>
                                            kfjkgkdjfkgjkfdjgkfdjklgjkfdjgkjdklsjfkgsjdkf
                                        </p>
                                    </div>
                                </li>

                                <li className='liTag'>
                                    <input type="radio" name='secondAcordion' id='31' />
                                    <label htmlFor="31" className='secondlabel'>Assignment</label>
                                    <div className="secondContent">
                                        <p>
                                            kfjkgkdjfkgjkfdjgkfdjklgjkfdjgkjdklsjfkgsjdkf
                                        </p>
                                    </div>
                                </li>

                            </ul>
                        </div>
                        <button className='unEnrollBtn'>UnEnroll</button>
                    </li>
                </ul>
            </div>
        </>

    )
}

export default MyLearning
