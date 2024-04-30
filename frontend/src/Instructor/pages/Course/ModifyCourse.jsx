import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ModifyCourse.css';

const ModifyCourse = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <div className="ModifyCourse">
      <button onClick={handleBackClick} className="back-button">Go Back</button>
      <h1>Modify Course</h1>
      <form>
        <label htmlFor="courseName">Course Name</label>
        <input id="courseName" type="text" placeholder="Enter course name" />

        <label htmlFor="courseDescription">Course Description</label>
        <textarea id="courseDescription" placeholder="Enter course description" />

        <label htmlFor="courseDuration">Course Duration</label>
        <input id="courseDuration" type="text" placeholder="Enter course duration" />

        <label htmlFor="coursePrice">Course Price</label>
        <input id="coursePrice" type="text" placeholder="Enter course price" />

        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default ModifyCourse;