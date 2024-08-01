import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav>
        <NavLink className={(e)=>{return e.isActive?"red":""}} to="/about"><li>About</li></NavLink>
        <NavLink className={(e)=>{return e.isActive?"red":""}} to="/contact"><li>contact</li></NavLink>
        <NavLink className={(e)=>{return e.isActive?"red":""}} to="/"><li>Home</li></NavLink>
      </nav>
    </div>
  )
}

export default Navbar

