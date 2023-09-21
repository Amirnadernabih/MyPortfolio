import React from 'react'
import Button from 'react-bootstrap/Button';
import AmirPic from "../About-me/photos/IMG_3057-removebg-preview.png"
import './Aboutme.css'
import { BiLogoFacebook } from 'react-icons/bi';
import { BiLogoLinkedin } from 'react-icons/bi';
import { BsGithub} from 'react-icons/bs';


const Aboutme = () => {
  

  return (
    <main className='Aboutme'>
      
        <div>
          <h6>Hi I am</h6>
          <h4>Amir Nader</h4>
          <h1>SOFTWARE</h1>
          <h2>ENGINEER</h2>
          <p className='aboutmeP'>I am a React developer with a passion 
              for building user-friendly and interactive 
              web applications. I have a strong understanding 
              of React fundamentals, including components, 
              props, state, and hooks. I am also proficient 
              in React,JavaScript, HTML, and CSS.</p>
          <Button variant="danger">Hire Me</Button>{''}
        </div>
        <div>
        <img src={AmirPic} alt='mypic'/>
        <div className='icons' >
            <a href='https://www.facebook.com/amir.nader.52' className='fb' >
           <BiLogoFacebook />
            </a>
            <a href='https://www.linkedin.com/in/amir-nader-43a18624a' className='in' >
           < BiLogoLinkedin />
           </a>
           <a href='https://github.com/Amirnadernabih' className='gt' >
           < BsGithub />
           </a>
           
            
            
        </div>
        </div>
    </main>
  )
}

export default Aboutme