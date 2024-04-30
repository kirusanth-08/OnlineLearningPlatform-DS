import React from 'react'
import './login.css'
import Back from '../common/back/Back'
import {useForm}  from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
    const navigate = useNavigate()
    
    const schema = yup.object().shape({
        username : yup.string().min(5).trim().matches(/^\S.*\S$/, 'Name cannot consist of only spaces').required(),
        email : yup.string().email().required(),
        password : yup.string().max(50).min(8).required(),
        confirmPassword : yup.string().oneOf([yup.ref("password"),null],`password doesn't match`).required()
    })
    const {register , handleSubmit ,formState : {errors}} = useForm({
        resolver : yupResolver(schema)
    })

    const Register=(data)=>{
        const register_data = {
            username : data.username,
            email : data.email,
            password : data.password
        }
        axios.post('http://localhost:8080/api/user/register',register_data).then(()=>{
            console.log(register_data)
            navigate('/')
        })
    }

    return (
        <>
           <Back title='Sign Up' />
            <div className='login template d-flex justify-content-center align-item-center  '>
                <div className='form_container'>
                    <form action='' onSubmit={handleSubmit(Register)} >
                        <h3 className='text-center mb-4'> </h3>
                        <div className='mb-4'>
                            <label htmlFor='name'>User Name</label>
                            <input type='text' placeholder='Enter Username' className='form-control'  {...register('username')} />
                            <span style={{color : 'red',fontSize: '0.9rem' }}>{errors.username?.message}</span>
                        </div>
                        <div className='mb-4'>
                            <label htmlFor='email'>Email</label>
                            <input type='email' placeholder='Enter Email' className='form-control' {...register('email')} />
                            <span style={{color : 'red',fontSize: '0.9rem' }}>{errors.email?.message}</span>
                        </div>
                        <div className='mb-4'>
                            <label htmlFor='password'>Password</label>
                            <input type='password' placeholder='Enter password' className='form-control' {...register('password')} />
                            <span style={{color : 'red',fontSize: '0.9rem' }}>{errors.password?.message}</span>
                        </div>
                        <div className='mb-4'>
                            <label htmlFor='password'>Re-Enter Password</label>
                            <input type='password' placeholder='confirm password' className='form-control' {...register('confirmPassword')} />
                            <span style={{color : 'red',fontSize: '0.9rem' }}>{errors.confirmPassword?.message}</span>
                        </div>

                        <div className='d-grid'>
                            <button className='btn btn-primary' >Sign Up</button>
                        </div>

                    </form>
                </div>
            </div>
        </>
    )
}

export default Signup
