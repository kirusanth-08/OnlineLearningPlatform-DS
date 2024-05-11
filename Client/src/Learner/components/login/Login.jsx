import React, { useContext } from 'react'
import './login.css'
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom'
import Back from '../common/back/Back'
import {useForm}  from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../helpers/AuthContext'
///////////////////////////////////////////////////////////////////
const Login = () => {

    const {setAuthstate} = useContext(AuthContext)

    const navigate = useNavigate()

    const schema = yup.object().shape({
      
        email : yup.string().email().required(),
        password : yup.string().required(),
        checked: yup.boolean().oneOf([true], 'Please accept the terms and conditions').required()

    })
    const {register , handleSubmit ,formState : {errors}} = useForm({
        resolver : yupResolver(schema)
    })

    const Login=(data)=>{
        const login_data = {
            email : data.email,
            password : data.password
        }
       axios.post('http://localhost:8080/api/user/login',login_data).then((res)=>{
        if(res.data.error){
            //alert(res.data.error)
            Swal.fire({
              icon: 'error',
              title: res.data.error,
              text: 'The provided email/password was not found. Please check and try again.',
            });

        }else{
          console.log(res.data)
            localStorage.setItem('authtoken', res.data.token)
            localStorage.setItem('id',res.data.id)
            localStorage.setItem('name',res.data.username)
            setAuthstate({
              username :res.data.username,
              id :res.data.id,
              instructor:res.data.instructor,
              status : true
            })
            localStorage.setItem('instructor',res.data.instructor)
            if(res.data.role == 'admin'){
              navigate('/admin')
            }
            else{

              navigate('/courses')
            }
        }
       })
    }
  return (
     <>
      <Back title='Sign In' />
       <div className='login template d-flex justify-content-center align-item-center  '>
      <div className='form_container'>
        <form action='' onSubmit={handleSubmit(Login)}>
          <h3 className='text-center'> </h3>
          <div className='mb-4'>
            <label htmlFor='email'>Email</label>
            <input type='email' placeholder='Enter Email' className='form-control' {...register('email')} />
            <span style={{color : 'red',fontSize: '0.9rem'}}>{errors.email?.message}</span>
          </div>
          <div className='mb-4'>
            <label htmlFor='password'>Password</label>
            <input type='password' placeholder='Enter password' className='form-control' {...register('password')} />
            <span style={{color : 'red',fontSize: '0.9rem'}}>{errors.password?.message}</span>
          </div>
          <div className='mb-2'>
            <input type='checkbox' className='custom-control custom-checkbox' id='check' {...register('checked')}  />
            <label htmlFor='check' className='custom-input-label ms-2'>
             accept terms and conditions
            </label>
          </div>
          <span style={{color : 'red',fontSize: '0.9rem'}}>{errors.checked?.message}</span> 
          <div className='d-grid'>
            <button className='btn btn-primary'>Sign In</button>
          </div>
          <p className='text-end mt-2'>
            Forgot <Link to=''>password?</Link>
            <Link to='/signup' className='ms-2'>Sign up</Link>
          </p>
        </form>
      </div>

      

      
    </div>
     </>
  )
}

export default Login
