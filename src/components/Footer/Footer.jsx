import React from 'react'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import {
    MDBFooter,
    MDBContainer,
   
    MDBIcon,
    MDBBtn
  } from 'mdb-react-ui-kit';
import "@fortawesome/fontawesome-free/css/all.min.css";
export const Footer = () => {
  return (
    <main>
<MDBFooter className='text-center text-white' style={{ backgroundColor: 'white' }}>
      <MDBContainer className='pt-4'> 
        <section className='mb-4'>
          <MDBBtn
            rippleColor="dark"
            color='link'
            floating
            size="lg"
            className='text-dark m-1'
            href='https://www.facebook.com/amir.nader.52'
            role='button'
          >
            <MDBIcon fab className='fab fa-facebook-f' />
          </MDBBtn>

    

    

          <MDBBtn
            rippleColor="dark"
            color='link'
            floating
            size="lg"
            className='text-dark m-1'
            href='https://www.instagram.com/amir_nader055/'
            role='button'
          >
            <MDBIcon fab className='fa-instagram' />
          </MDBBtn>

          <MDBBtn
            rippleColor="dark"
            color='link'
            floating
            size="lg"
            className='text-dark m-1'
            href='https://www.linkedin.com/in/amir-nader-43a18624a'
            role='button'
          >
            <MDBIcon fab className='fa-linkedin' />
          </MDBBtn>

          <MDBBtn
            rippleColor="dark"
            color='link'
            floating
            size="lg"
            className='text-dark m-1'
            href='https://github.com/Amirnadernabih'
            role='button'
          >
            <MDBIcon fab className='fa-github' />
          </MDBBtn>
        </section>
      </MDBContainer>







      <div className='text-center text-dark p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2020 Copyright: 
        <a className='text-dark' href='https://github.com/Amirnadernabih'>
           ENG/ Amir Nader
        </a>
      </div>
    </MDBFooter>

    </main>
  )
}
