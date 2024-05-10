import React, { useContext } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {AuthContext} from '../../helpers/AuthContext'
import { Height } from '@mui/icons-material'

const Head = () => {
    const navigate = useNavigate();
    const {authState ,setAuthstate} = useContext(AuthContext)
    const logout =()=>{
        localStorage.removeItem('authtoken')
        localStorage.removeItem('id')
        localStorage.removeItem('name')
        setAuthstate({
            username : '',
            id : '',
            instructor:false,
            status : false
          })
    }

    const login =()=>{
       navigate('/login')
    }

    return (
        <>
            <section className='head'>
                <div className="container flexSB">
                    <div className="logo">
                        <h1>LEARNHUB</h1>
                        <span>ONLINE EDUCATION & LEARNING</span>

                    </div>

                    <div className="social">
                        <i className='fab fa-facebook-f icon'></i>
                        <i className='fab fa-instagram icon'></i>
                        <i className='fab fa-twitter icon'></i>
                        <i className='fab fa-youtube icon'></i>

                        <span className="logout-button" >
                        {!authState.status == '' ?
                        <Link to= '' style={{color : 'white'}}>
                        {/* <i className='fas fa-sign-out-alt logout-icon' style={{fontSize : '25px'}} onClick={logout}></i> */}
                        <button className='btn btn-secondary' onClick={logout}>Logout</button>
                        </Link>
                        :
                        <Link to='/login'>
                        
                        <button className='btn btn-secondary' onClick={login}>Login</button>
                        </Link>

                    }
                    </span>
                        
                         
                    </div>
                </div>
            </section>
        </>
    )
}

export default Head
