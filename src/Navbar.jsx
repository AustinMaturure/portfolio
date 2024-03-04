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
            <li className='nav-item'>About Me</li>
            <li className='nav-item'>Work</li>
            <li className='nav-item'>Contact</li>
            
          </ul>
        </nav>
      </header>

    </>
  )
}

export default Navbar
