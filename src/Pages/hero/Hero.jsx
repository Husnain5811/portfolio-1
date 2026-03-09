import React from 'react'
import Both from './Both.jsx'
import Header from '../header/Header'
import About from '../about/About.jsx'
import Skills from '../skills/Skills.jsx'
import Projects from '../projct/Projects.jsx'
import Game from '../game/Game.jsx'
import Footer from '../footer/Footer.jsx'
import Contact from '../contact/Contact.jsx'
import Bubbles from '../../Components/Bubble.jsx'


const Hero = () => {
  return (
    <>
      <div className='bg-[#2e0043] ' >
        <Header />
        <Both />
      </div>
      <About />
      <Skills />
      <Game />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}

export default Hero