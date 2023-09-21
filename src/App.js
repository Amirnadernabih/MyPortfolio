import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import  NavBar from './components/Navbar/NavBar'
import Aboutme from './components/About-me/Aboutme'
import Skills from './components/Skills/Skills'
import Services from './components/Servicees/Services'
import MyProjects from './components/MyProjects/MyProjects'
import ContactMe from './components/Contact-me/ContactMe'
import { Footer } from './components/Footer/Footer'
import LoadingPage from './components/Loadingpage/LoadingPage'



function App () {

  
  
  return (
    <>
    <LoadingPage />
    <div>
      <NavBar />
      <Aboutme  />
      <Skills  />
      <Services />
      <MyProjects  />
      <ContactMe />
      <Footer/>
    </div>
    </>
    
  
  )
}

export default App