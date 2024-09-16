import React from 'react'
import video from "../assets/video.mp4"
import ImageSlider from './ImageSlider.jsx/ImageSlider'



const Home = () => {
  return (
    <>

    
      
      <div>
        <video autoPlay loop muted>
          <source src={video} type="video/mp4"/>
        </video>
      </div>
      <ImageSlider />

    </>
  )
}

export default Home
