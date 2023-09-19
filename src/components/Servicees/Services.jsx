import React from 'react'
import { motion } from "framer-motion"
import './Services.css'
import Card from 'react-bootstrap/Card';
import Webpic from '../Servicees/photos/Layer_1.png';
import Apppic from '../Servicees/photos/Group 18.png';
import Marketingpic from '../Servicees/photos/Vector.png';
import { ThemeProvider } from 'react-bootstrap';


const Services = () => {

  

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1031 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 1030, min: 0 },
      items: 1
    }
  };
  return (
    <ThemeProvider>
<main responsive={responsive}>
  <motion.div 
  initial={{opacity:0 , scale:0}}
  whileInView={{opacity:1,scale:1}}
  transition={{duration: 1}}
  viewport={{once:true}}
  >

  <h1>SERVICES</h1>
  <p className='pp'>Lorem ipsum dolor sit amet consectetur. 
    Tristique amet sed massa nibh lectus netus in. 
    Aliquet donec morbi convallis pretium</p>
  </motion.div>
  <div className='Services ' >
    
   <motion.div 
    initial={{opacity:0 , scale:0}}
    whileInView={{opacity:1,scale:1}}
    transition={{duration: 1}}
    viewport={{once:true}}
    >
   {['Light',].map((variant) => (
        <Card
          bg={variant.toLowerCase()}
          key={variant}
          text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
          
          className="mb-2"
        >
          
          <Card.Body>
            <div className='serviceflex'>
            <img src={Webpic} alt='web'/>
            <Card.Title> Web Design</Card.Title>
            </div>
         
            <Card.Text>
            Web design services help businesses create 
            and maintain a website that is visually appealing, 
            user-friendly, and effective.
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
   </motion.div>
   <motion.div
    initial={{opacity:0 , scale:0}}
    whileInView={{opacity:1,scale:1}}
    transition={{duration: 1}} 
    viewport={{once:true}}
    >
   {['Light',].map((variant) => (
        <Card
          bg={variant.toLowerCase()}
          key={variant}
          text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
      
          className="mb-2"
        >
        
          <Card.Body>
            <div className='serviceflex'>
            <img src={Apppic} alt='app'/>
            <Card.Title>App Design</Card.Title>
            </div>
         
            <Card.Text>
            App design services help businesses create 
            and design mobile apps that are visually appealing,
             And user-friendly.
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
   </motion.div>
   <motion.div
    initial={{opacity:0 , scale:0}}
    whileInView={{opacity:1,scale:1}}
    transition={{duration: 1}} 
    viewport={{once:true}}
    >

   {['Light',].map((variant) => (
        <Card
          bg={variant.toLowerCase()}
          key={variant}
          text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
        
          className="mb-2"
        ><Card.Body>
          <div className='serviceflex'>
            <img src={Marketingpic} alt='marketing'/>
            <Card.Title>Marketing</Card.Title>
          </div>
          
            <Card.Text>
            Marketing services help businesses 
            reach their target audience and generate leads,
             sale, And improve their brand awareness
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
   </motion.div>
  </div>
  </main>
    </ThemeProvider>
    
  )
}

export default Services