import React from 'react'
import myImage from '../../assets/upscalemedia-transformed.png'
import { HomeContainer } from './Home.styles'

// ? icons
import { FiGithub } from "react-icons/fi";
import { FaTelegramPlane } from "react-icons/fa";
import { MdOutlineMarkEmailUnread } from "react-icons/md";



const Home = () => {
  return (

    <HomeContainer>
      <div className='home-left'>
        <div className="home-left-image">
          <img src={myImage} alt="" />
        </div>
      </div>
      {/* ?  right */}
      <div className='home-right-box'>
        <div className="h-right-in">

          <h2>
            Hello I `m
          </h2>
          <h1>
            Sayyorbek
          </h1>
          <p>
            I am a Full-Stack Developer specializing in building modern web applications. I focus on UI/UX, design, and complete functionality, including frontend and backend development, SSL, domains, hosting, and SEO. I also design frontend architectures for websites and ensure they are fully responsive and optimized for various devices and screen sizes.
          </p>
          <div className='d-flex-1 h-icon-bar'>
            <div className='git'> 

              <FiGithub />
              <p>
                GitHub
              </p>
            </div>
            <div className='telegram'>

              <FaTelegramPlane />

              <p>
                Telegram
              </p>
            </div>
            <div className='email'>

              <MdOutlineMarkEmailUnread />
              <p>
                Email
              </p>
            </div>

          </div>
        </div>
      </div>
    </HomeContainer>
  )
}

export default Home
