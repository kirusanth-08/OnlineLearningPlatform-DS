import React from "react"
import Heading from "../common/heading/Heading"
import "./about.css"
import { homeAbout } from "../../dummydata"
import AWrapper from "./AWrapper"
//import about from '../../../public/images/about.webp'
import { useNavigate } from "react-router-dom"
const AboutCard = () => {
  const navigate = useNavigate()
  const handleClick = () =>{
    navigate('/courses')
  }
  return (
    <>
      <section className='aboutHome'>
        <div className='container flexSB'>
          <div className='left row'>
            <img src='https://findit-resources.s3.amazonaws.com/forums/1657021120252.jpg' alt='' />
          </div>
          <div className='right row'>
            <Heading subtitle='LEARN ANYTHING' title='Benefits About Online Learning Expertise' />
            <div className='items'>
              {homeAbout.map((val) => {
                return (
                  <div className='item flexSB'>
                    <div className='img'>
                      <img src={val.cover} alt='' />
                    </div>
                    <div className='text' onClick={handleClick}>
                      <h2>{val.title}</h2>
                      <p>{val.desc}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>
      <AWrapper/>
    </>
  )
}

export default AboutCard
