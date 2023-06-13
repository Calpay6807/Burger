import React from 'react'
import { Link } from 'react-router-dom'
import Background from "../assets/banner.jpg"

function Home() {
  return (
    <div className='home' style={{backgroundImage:`url(${Background})`}}>
    <div className='header'>

    <h1>Burger-68</h1>
    <p>Delicious Hamburger <br /> With Spicy Mixed</p>
    <Link to="/menu"><button>Order Now</button></Link>
    
    </div>
    
    </div>
  )
}

export default Home