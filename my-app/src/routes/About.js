import React from 'react'

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroImg2 from '../components/HeroImg2';
const About = () => {
  return (
    <div>
         <Navbar></Navbar>
         <HeroImg2 heading="ABOUT" text="Hello, I'm Malinsha Vithanage, a dedicated IT undergraduate from the University of Moratuwa.
          With a love for technology, I'm always exploring coding frontiers and seeking innovative solutions.  
          Join me as I navigate the dynamic world of IT while embracing a well-rounded life of learning, playing, and giving back."></HeroImg2>
      <Footer></Footer>
    </div>
  )
}

export default About
