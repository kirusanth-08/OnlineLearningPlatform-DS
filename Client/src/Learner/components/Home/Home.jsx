import React, { useContext } from 'react'
import Hero from './hero/Hero'
import AboutCard from '../about/AboutCard'
import HAbout from './HAbout'

const Home = () => {
  return (
    <>
      <Hero />
      <AboutCard />
      <HAbout />
    </>
  )
}

export default Home
