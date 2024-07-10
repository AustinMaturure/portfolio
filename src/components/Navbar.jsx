import '../css/navbar.css';
import React, { useState, useEffect } from 'react';
import open from '../assets/menu.svg';
import close from '../assets/close.svg';
import light from '../assets/light.svg';
import dark from '../assets/dark.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  const [mobile, setMobile] = useState(window.innerWidth <= 768 ? 'mobile' : '');
  const [image, setImage] = useState(open);
  const [isClicked, setClick] = useState(false);
  const [isOpen, setOpen] = useState('');
  const [isDarkMode, setDarkMode] = useState(false); 

  function handleClick() {
    setClick(!isClicked);
    isClicked ? setImage(open) : setImage(close);
    isClicked ? setOpen('') : setOpen('open');
  }

  useEffect(() => {
    function handleResize() {
      setMobile(window.innerWidth <= 768 ? 'mobile' : '');
    }

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  function toggleDarkMode() {
    setDarkMode(!isDarkMode);
  }
  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  return (
    <>
      <header className={`heade ${isOpen}`} id='nav'>
        <h1 className='fullstack-developer-name'>
           Austin Maturure
        </h1>
        
        <nav className={`navbar ${isOpen}`}>
        <button onClick={toggleDarkMode} className='tgl-drk-btn'><img className='md-tgl' src={isDarkMode ? light : dark} alt="" /></button>
          {mobile == '' ? <p></p> : <img src={image} onClick={handleClick} className='menu'></img>}
          <ul className={`nav-items ${mobile} ${isOpen}`}>
            <li className='nav-item' ><a href="#projects">View My Work</a></li>
            <li className='nav-item'><a href="#about">About Me</a></li>
            <li className='nav-item' ><a href="#contact">Contact Me</a></li>
          </ul>
          
        </nav>
        

      </header>
    </>
  );
}

export default Navbar;
