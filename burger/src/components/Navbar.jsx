import React from 'react'
import Logo from "../assets/hamburgerlogo.png"
import { Link } from 'react-router-dom'


function Navbar() {
  return (
    <div className='navbar'>
    <div className='leftside'>
    <img src={Logo} alt="" />
    </div>

    <div className='rightside'>
    <Link to="/">Home</Link>
    <Link to="/Menü">Menü</Link>
    <Link to="/About">About</Link>
    <Link to="/Contact">Contact</Link>

    

    </div>
    

    </div>
  )
}

export default Navbar