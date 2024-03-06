import './navbar.css'
import React from 'react'
import { useState, useEffect } from 'react'
import open from './assets/menu.svg'
import close from './assets/close.svg'
function Navbar() {
  const [mobile, setMobile] = useState(window.innerWidth <= 768 ? 'mobile' : '')
  const [image, setImage] = useState(open)
  const [isClicked, setClick] = useState(false)
  const [isOpen, setOpen] = useState('')

  function handleClick(){
    setClick(!isClicked);
    isClicked ? setImage(open) : setImage(close)
    isClicked ? setOpen('') : setOpen('open')
  }
  console.log(image)
  useEffect(() => {
    function handleResize() {
      setMobile(window.innerWidth <= 768 ? 'mobile' : '');
    }

    // Call handleResize on initial render
    handleResize();

    // Listen for window resize events
    window.addEventListener('resize', handleResize);

    // Clean up event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); 

  return (
    <>
    
    
      <header className={`heade ${isOpen}`}>
        <h1 className='fullstack-developer-name'>
           Austin Maturure
        </h1>
        <nav className={`navbar ${isOpen}`}>
          {mobile == '' ? <p></p> : <img src={image} onClick={handleClick} className='menu'></img>}
          <ul className={`nav-items ${mobile} ${isOpen}`}>
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
