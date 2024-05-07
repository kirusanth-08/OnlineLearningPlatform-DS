import React from 'react'
import './popupCourseCretion.css'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom'

//import { AiFillCloseCircle } from "react-icons/ai";
const PopupCourseCreation = ({onClose}) => {
   const navigate = useNavigate();
  
  const schema = yup.object().shape({
    title : yup.string().required(),
    ppm : yup.number().required(),
    ppc : yup.number().required(),
    duration : yup.number().required(),
    description : yup.string().required()
    
  })
  const {register , handleSubmit , formState:{errors}} = useForm({
    resolver : yupResolver(schema)
  })
 const onSubmit=(data)=>{
      // console.log(data)  
    
    axios.get('http://localhost:8080/api/user/authenticate',{
      headers : {
        authtoken : localStorage.getItem('authtoken')
      },
    }).then((res)=>{
      if(res.data.error){
        console.log(res.data.error)
      }else{
        console.log(res.data.user)
        const insertCourse ={
          title : data.title,
          description: data.description,
          priceAll: data.ppm,
          pricePer: data.ppc,
          duration: data.duration,
          instructor_id: { id: res.data.user._id, username: res.data.user.username}
        }
        axios.post('http://localhost:8082/api/course/create',insertCourse).then((response)=>{
               console.log('Course created successfully:', response.data.course);
               Swal.fire({
                icon: 'success',
                title: 'Course Created',
                text: 'The Course has been successfully created!',
              }).then(()=>{
                axios.put(`http://localhost:8080/api/student/update/${res.data.user._id}`,{instructor:true}).then((res)=>{
                  if(res.data.error){
                    console.log(res.data.error)
                  }else{
                    console.log(res.data.message)
                  }
                }).catch((err)=>console.log(err))
              })
              navigate('/instructor')
        }).catch((error) => {
          console.error('Error creating course:', error);
          
        });
        
        console.log(insertCourse)
      }
    }).catch((err)=>{
      console.log(err)
    })
  }
  return (
    <>
    <div className="formPopup">
      <button className="closeBtn" onClick={onClose}>x</button>
      <form onSubmit={handleSubmit(onSubmit)} >
        <div className="containerss">
          <h1>create your course</h1>

          <hr />

          <label for="email"><b>Title</b></label>
          <input type="text" placeholder="Enter course title" name="title" id="title" {...register('title')}  />
          <small style={{color:'red'}}>{errors.title?.message}<br/></small>

          <label for="psw"><b>price per month</b></label>
          <input type="number" placeholder="Enter price" name="ppm" id="psw"  {...register('ppm')}  />
          <small style={{color:'red'}}>{errors.ppm?.message}<br/></small>

          <label for="psw"><b>price per class</b></label>
          <input type="number" placeholder="Enter price" name="ppc" id="psw" {...register('ppc')} />
          <small style={{color:'red'}}>{errors.ppc?.message}<br/></small>

          <label for="psw"><b>duration</b></label>
          <input type="number" placeholder="Enter price" name="duration" id="psw" {...register('duration')} />
          <small style={{color:'red'}}>{errors.duration?.message}<br/></small>

          <label htmlFor="description"><b>Description</b></label><br />
            <textarea rows="5" cols="130" placeholder='Description' name='description' id="description" {...register('description')} required></textarea>
            <small style={{ color: 'red' }}>{errors.description?.message}<br /></small>
          <hr />

          <button type="submit" class="registerbtn">Create</button>
        </div>


      </form>
    </div>
  </>
  )
}

export default PopupCourseCreation
