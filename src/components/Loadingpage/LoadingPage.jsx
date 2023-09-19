import React, { useEffect } from 'react'
import { preLoaderAnim } from "../Animations/Animations";
import './LoadingPage.css'
const LoadingPage = () => {
    
    useEffect(() => {
        preLoaderAnim();
      }, []);

  return (
   <div className="preloader">
    <div className="texts-container">
        <span>Welcome </span>
        <span>To </span>
        <span>My Portfolio. </span>
    </div>
   </div>
  )
}

export default LoadingPage