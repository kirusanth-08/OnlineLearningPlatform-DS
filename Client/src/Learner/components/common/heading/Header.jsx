import React, { useContext, useState } from 'react'
import Head from './Head'
import './Header.css'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../helpers/AuthContext'

const Header = () => {
  const [click, setClick] = useState(false)

  const { authState } = useContext(AuthContext)

  return (
    <>
      <Head />
      <header>
        <nav className='flexSB'>
          <ul className={click ? "mobile-nav" : "flexSB "} onClick={() => setClick(false)}>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/courses'>Courses</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/contact'>Contact</Link>
            </li>
            {/* {!authState.instructor ? */}
            {!(localStorage.getItem('instructor') === "true") ?
              <li>
                <Link to='/teach'>Start Teach</Link>
              </li>
              :
              <li>
                <Link to='/instructor'>Instructor</Link>
              </li>
            }
            {
              authState.status &&
              <li>
                <Link to='/leanings'>My learnings</Link>
              </li>
            }

          </ul>
          <div className='start'>
            {!authState.status ?
              <div className='button'>GET COURSE</div>
              :
              <div className='button' style={{ textTransform: 'uppercase' }}>{localStorage.getItem('name')}</div>
            }

          </div>

          <button className='toggle' onClick={() => setClick(!click)}>
            {click ? <i className='fa fa-times'> </i> : <i className='fa fa-bars'></i>}
          </button>
        </nav>
      </header>
    </>
  )
}

export default Header
