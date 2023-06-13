import React from 'react'
import BannerImage from "../assets/banner.jpg"
function Aboute() {
  return (
    <div className='about'>
    <div className='aboutTop' style={{backgroundImage:`url(${BannerImage})`}}></div>
    <div className='aboutBottom'>
    <h1>About Us</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At provident accusantium praesentium reprehenderit maiores. Quia, enim praesentium dignissimos nulla, maxime provident cumque unde nisi eum officiis corrupti molestiae ipsa laboriosam!</p>

    
    </div>
    </div>
  )
}

export default Aboute