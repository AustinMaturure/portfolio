import './navbar.css'
import React from 'react'
function Navbar() {
  

  return (
    <>
    
      <header>
        <h1 className='fullstack-developer-name'>
           Austin Maturure
        </h1>
        <nav className='navbar'>
          <ul className='nav-items'>
            <li className='nav-item' ><a href="#projects">Work</a></li>
            <li className='nav-item'><a href="#about">About Me</a></li>
            <li className='nav-item' ><a href="#contact">Contact</a></li>
            
          </ul>
        </nav>
      </header>

    </>
  )
}

export default Navbar
