import React from 'react'
import { NavLink } from 'react-router-dom'


function Navbar() {
    
  return (
    <div>
        <nav>
            <a href="/"><li>Home</li></a>
            <NavLink to="/hom"><li>Hom</li></NavLink>
        </nav>
    </div>
  )
}

export default Navbar