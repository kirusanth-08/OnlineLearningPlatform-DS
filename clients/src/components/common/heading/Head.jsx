import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import {AuthContext} from '../../helpers/AuthContext'
const Head = () => {
    const {authState ,setAuthstate} = useContext(AuthContext)
    const logout =()=>{
        localStorage.removeItem('authtoken')
        setAuthstate({
            username : '',
            id : '',
            instructor:false,
            status : false
          })
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

                        {!authState.status == '' && 
                        <span className="logout-button" >
                        <Link to= '' style={{color : 'white'}}>
                        <i className='fas fa-sign-out-alt logout-icon' style={{fontSize : '25px'}} onClick={logout}></i>
                        </Link>
                        
                    </span>
                        }
                        
                         
                    </div>
                </div>
            </section>
        </>
    )
}

export default Head
