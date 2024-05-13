import React, { useEffect, useState } from 'react';
import './mylearning.css';
import Back from '../common/back/Back';
import PlayVideo from './PlayVideo';
import axios from 'axios';

const MyLearning = () => {
    const [enrolledCourses, setEnrolledCourses] = useState([]);
        const [openModal, setOpenModal] = useState(false)

    useEffect(() => {
        fetchEnrolledCourses();
    }, []);

    const fetchEnrolledCourses = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/user/authenticate', {
                headers: {
                    authtoken: localStorage.getItem('authtoken')
                }
            });
            const userId = response.data.user._id;
            const enrollmentsResponse = await axios.post(`http://localhost:8085/api/enrollments/myCourses/${userId}`);
            const courseIds = enrollmentsResponse.data.message;
            const coursesData = await Promise.all(courseIds.map(async courseId => {
                const [courseContentResponse, courseTitleResponse] = await Promise.all([
                    axios.get(`http://localhost:8082/api/courseContent/view/${courseId}`),
                    axios.get(`http://localhost:8082/api/course/${courseId}`)
                ]);
                return {
                    content: courseContentResponse.data.course,
                    title: courseTitleResponse.data.course.title,
                    courseId: courseId // Add courseId for unenrollment
                };
            }));
            setEnrolledCourses(coursesData);
        } catch (error) {
            console.error('Error fetching enrolled courses:', error);
        }
    };

    const unenroll = async (courseId) => {
        try {
            const userId = localStorage.getItem('id');
            await axios.delete('http://localhost:8085/api/enrollments/unEnroll', {
                data: { user_id: userId, course_id: courseId }
            });
            // Assuming successful unenrollment, update UI to reflect changes
            setEnrolledCourses(prevCourses => prevCourses.filter(course => course.courseId !== courseId));
        } catch (error) {
            console.error('Error unenrolling:', error);
        }
    };

    return (
        <>
            <Back title={'MY LEARNINGS'} />
            {enrolledCourses.map((courseData, index) => (
                <div className='learningContainer' key={index}>
                    <div className='cont'>
                    <div className='unEnrollDiv'> {/* Place unenroll button here */}
                    <h1 style={{backgroundColor:'white'}}>{courseData.title}</h1>
                        <button className='unEnrollBtn' onClick={() => unenroll(courseData.courseId)}>Unenroll</button>
                    </div>
                    <div className="accordion">
                        {courseData.content.map((course, index) => (
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
                            </li>
                        ))}
                    </div>
                    </div>
                    
                </div>
            ))}
        </>
    );
};

export default MyLearning;




// import React, { useEffect, useState } from 'react'
// import './mylearning.css'
// import Back from '../common/back/Back'
// import PlayVideo from './PlayVideo'
// import axios from 'axios'


// const MyLearning = () => {
//     const [openModal, setOpenModal] = useState(false)
//     const [content, setContent] = useState([])

//     useEffect(() => {
//         axios.get('http://localhost:8080/api/user/authenticate', {
//             headers: {
//                 authtoken: localStorage.getItem('authtoken')
//             }
//         }).then((res) => {
//             if (res.data.error) {
//                 console.log(res.data.error)
//             } else {
//                 console.log(res.data.user)
//                 axios.get('http://localhost:8082/api/courseContent/').then((res) => {
//                     if (res.data.error) {
//                         console.log(res.data.error)
//                     } else {
//                         console.log(res.data.content[1])
//                         setContent(res.data.content)
//                     }
//                 })
//             }
//         })
//     }, [])

//     return (

//         <>
//             <Back title={'MY LEARNINGS'} />
//             <div className='learningContainer'>
//                 <ul className="accordion">
//                     {content.map((course, index) => (
//                         <li key={index} className='accordianLi'>




//                             <input type="radio" name="accordion" id={`${course._id}`} />
//                             <label htmlFor={`${course._id}`} className='labelss'>{course.topic}</label>
//                             <div className="content">
                                
//                                 <h4>{course.topic}</h4>
                                // <a href='#' onClick={() => {
                                //     setOpenModal(true)
                                // }}>Open Video</a>
                                // {openModal &&
                                //     <PlayVideo closeVideo={setOpenModal} video={course.video} />
                                // }
//                                 <hr />

//                                 {course.lecture && (
//                                     <>
//                                         <h5>Lecture:</h5>
//                                         <a href={course.lecture.path} download rel="noopener noreferrer">{course.lecture.filename}</a>
//                                     </>
//                                 )}
//                                 <hr />
//                                 {course.assignment && (
//                                     <>
//                                         <h5>Assignment:</h5>
//                                         <a href={course.assignment.path} download rel="noopener noreferrer">{course.assignment.filename}</a>
//                                     </>
//                                 )}
//                                 <hr />
//                             </div>
//                             <div className='unEnrollDiv'>

//                                 <button className='unEnrollBtn'>UnEnroll</button>
//                             </div>


//                         </li>
//                     ))}


                    
//                 </ul>
//             </div>
//         </>

//     )
// }

// export default MyLearning
