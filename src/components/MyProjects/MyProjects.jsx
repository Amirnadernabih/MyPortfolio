import React, { Component } from "react";
import Slider from "react-slick";
import './MyProjects.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Carwebsite from '../MyProjects/photos/carwebsite.png'
import Shipwebsite from '../MyProjects/photos/shippingwebsite.png'
import Todowebsite from '../MyProjects/photos/todolistwebsite.png'
import Watchwebsite from '../MyProjects/photos/watchbrandwebsite.png'
import { motion } from "framer-motion"
export default class AutoPlay extends Component {

  

  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 1500,
      autoplaySpeed: 1500,
      cssEase: "linear"
    };

  const responsiveSettings = [
    {
      breakpoint: 1350,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 1,
      },
    },
  ];

    return (
    <main>
  <div>
  <motion.h1 
       initial={{opacity:0 , scale:0}}
       whileInView={{opacity:1,scale:1}}
       transition={{duration: 1}}
       viewport={{once:true}}
       >
        My Projects</motion.h1>
    <motion.p className='pp'
initial={{opacity:0 , scale:0}}
whileInView={{opacity:1,scale:1}}
transition={{duration: 1}}
viewport={{once:true}}
>Lorem ipsum dolor sit amet consectetur. 
    Tristique amet sed massa nibh lectus netus in.
     Aliquet donec morbi convallis pretium</motion.p>
  <Slider {...settings} responsive={responsiveSettings} className='Slider'>
          <div>
            <h5><img src={Carwebsite} alt='car' className='car-ship' /></h5>
          </div>
          <div>
          <h5><img src={Shipwebsite} alt='Ship' className='car-ship' /></h5>
          </div>
          <div>
          <h5><img src={Todowebsite} alt='Todo' className='Todo_watch' /></h5>
          </div>
          <div>
          <h5><img src={Watchwebsite} alt='Watch' className='Todo_watch' /></h5>
          </div>
          
        </Slider>
  </div>
    </main>
  );
}

}
