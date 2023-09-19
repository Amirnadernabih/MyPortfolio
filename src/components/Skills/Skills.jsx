import React from 'react'
import './Skills.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { AiFillHtml5} from 'react-icons/ai';
import { BiLogoCss3} from 'react-icons/bi';
import { DiJavascript1} from 'react-icons/di';
import { BsFillBootstrapFill} from 'react-icons/bs';
import { BiLogoTailwindCss} from 'react-icons/bi';
import { DiSass} from 'react-icons/di';
import { FaReact} from 'react-icons/fa';
import { BiLogoRedux} from 'react-icons/bi';
import { AiFillGithub} from 'react-icons/ai';
import { BsGit} from 'react-icons/bs';
import { TbBrandNextjs} from 'react-icons/tb';
import { motion } from "framer-motion"



const Skills = () => {



  const responsive = {
    superLargeDesktop: {
     
      breakpoint: { max: 4000, min: 1700 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 1699, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1120, min: 464 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 850, min: 450 },
      items: 2
    },
    small: {
      breakpoint: { max: 450, min: 0 },
      items: 1
    }
  };
  
  return (
    <main className='skills' >
      <motion.div 
       initial={{opacity:0 , scale:0}}
       whileInView={{opacity:1,scale:1}}
       transition={{duration: 1}}
       viewport={{once:true}}
       >
      <h1>MY SKILLS</h1>
      <p className='pp'>Lorem ipsum dolor sit amet consectetur. 
    Tristique amet sed massa nibh lectus netus in. 
    Aliquet donec morbi convallis pretium</p>
      </motion.div>
 
    <motion.div 
     initial={{opacity:0 , scale:0}}
     whileInView={{opacity:1,scale:1}}
     transition={{duration: 1}}
     viewport={{once:true}}
     >
    <Carousel responsive={responsive} className='carousel' >
  <div className='html'><AiFillHtml5/></div>
  <div className='css'><BiLogoCss3/></div>
  <div className='js'><DiJavascript1/></div>
  <div className='bst'><BsFillBootstrapFill/></div>
  <div className='tailwind'><BiLogoTailwindCss/></div>
  <div className='sass'><DiSass/></div>
  <div className='react'><FaReact/></div>
  <div className='redux'><BiLogoRedux/></div>
  <div className='github'><AiFillGithub/></div>
  <div className='git'><BsGit/></div>
  <div className='next'><TbBrandNextjs/></div>
</Carousel>
    </motion.div>

    </main>
  )
}

export default Skills