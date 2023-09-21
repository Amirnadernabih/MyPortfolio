import React, {  useRef} from 'react';
import emailjs from '@emailjs/browser';
import './ContactMe.css'
import { motion } from "framer-motion"

const ContactMe = () => {
  

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm(
        'service_up9gksc',
       'template_2i2ir3d',
        form.current,
        'MCbOYxZCTkD57wfy2')
        .then((result) => {
            console.log(result.text);
            alert('Message has been sent successfully')
        }, (error) => {
            console.log(error.text);
        });


    }

  return (
    <main>
       <motion.div
   initial={{opacity:0 , scale:0}}
   whileInView={{opacity:1,scale:1}}
   transition={{duration: 1}}
   viewport={{once:true}}
   >

   <h1>Lets Design Together</h1>
    <p className='pp'>Lorem ipsum dolor sit amet consectetur. 
    Tristique amet sed massa nibh lectus netus in.
     Aliquet donec morbi convallis pretium</p>

       </motion.div>
       <motion.div 
initial={{opacity:0 , scale:0}}
whileInView={{opacity:1,scale:1 ,x:1}}
transition={{duration: 1}}
viewport={{once:true}}
>
<form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" placeholder='Your Name Here...' />
      <label>Email</label>
      <input type="email" name="user_email" placeholder='Your Email Here...' />
      <label>Message</label>
      <textarea name="message" placeholder='Your Message Here...'/>
      <input type="submit" value="Send" />
</form>
       </motion.div>
    </main>
  )
}

export default ContactMe