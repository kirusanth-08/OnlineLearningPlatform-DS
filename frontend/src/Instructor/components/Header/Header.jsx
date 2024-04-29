import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
        <h3>Welcome back, Kirusanth</h3>
        <div className='header-right'>
            <a href='#'>notification</a>
            <div className='profile'>
                <img src='https://i0.wp.com/www.muscleandfitness.com/wp-content/uploads/2023/11/Bodybuilder-and-2023-Classic-Physique-Winner-Chris-Bumstead-posing-on-stage-at-the-2023-Olympia-Competition.jpg?quality=86&strip=all' />
                <div className='profile-name'>Kirusanth</div>
            </div>
        </div>
    </div>
  )
}

export default Header