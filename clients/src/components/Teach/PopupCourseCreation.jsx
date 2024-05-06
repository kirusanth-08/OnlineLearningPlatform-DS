import React from 'react'
import './popupCourseCretion.css'
//import { AiFillCloseCircle } from "react-icons/ai";
const PopupCourseCreation = ({onClose}) => {
  return (
    <>
    <div className="formPopup">
      <button className="closeBtn" onClick={onClose}>x</button>
      <form action="">
        <div className="containerss">
          <h1>create your course</h1>

          <hr />

          <label for="email"><b>Title</b></label>
          <input type="text" placeholder="Enter course title" name="title" id="title" />

          <label for="psw"><b>price per month</b></label>
          <input type="number" placeholder="Enter price" name="psw" id="psw" />

          <label for="psw"><b>price per class</b></label>
          <input type="number" placeholder="Enter price" name="psw" id="psw" />

          <label for="psw"><b>duration</b></label>
          <input type="number" placeholder="Enter price" name="psw" id="psw" />

          <label for="psw-repeat"><b>description</b></label><br />
          <textarea rows="5" cols="130" placeholder='description'> </textarea>
          <hr />


          <button type="submit" class="registerbtn">Create</button>
        </div>


      </form>
    </div>
  </>
  )
}

export default PopupCourseCreation
