import './hero.css'
import React from 'react'
import { useEffect, useState } from 'react'
import useElementInView from './ElementInView'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJs, faPython, faReact, faHtml5, faCss3} from '@fortawesome/free-brands-svg-icons';
import {  faCircleArrowDown, faServer, } from '@fortawesome/free-solid-svg-icons';




function Hero() {
  const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)
  
  const stackRef = useElementInView('.Skills li');
    useEffect(() => {
        const spans = document.querySelectorAll('.emphasis');
        
        spans.forEach((element, index) => {
          setTimeout(() => {
            element.style.backgroundColor = '#b7cece';
            if (element.classList.contains('emphasis') && element.classList.contains('2')) {
              setTimeout(() => {
                element.style.backgroundColor = '#b7cece';
              }, 1000);
            } else {
              element.style.backgroundColor = 'transparent';
            }
          }, index * 260);
        });
      }, []);
      const [isFrontend, setIsFrontend] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFrontend((prev) => !prev);
    }, 1990);

    return () => clearInterval(interval);
  }, [isFrontend]);
    
  return (
    
    <>
    
      <section className="introduction">
       <div className="tag">
       <h1 className='about-software-developer'><span className='emphasis 2'>HELLO!</span>,  <span className='emphasis'>I'm Austin</span> , <span className='emphasis'>I Do</span> <span className='emphasis'>it All...</span> <span className='emphasis' >as a </span><span className='emphasis  2'>Front-end </span> and <span className='emphasis'><span className='emphasis 2'>Back-end</span> Web <span className='emphasis 2'>Developer </span> </span></h1>
       </div>
      
       
        <div className="techstack">
            <ul className='Skills' ref={stackRef}>
                <li> <FontAwesomeIcon icon={faReact}></FontAwesomeIcon> React</li>
                <li> <FontAwesomeIcon icon={faJs}></FontAwesomeIcon> Javascript</li>
                <li><FontAwesomeIcon icon={faCss3}/> CSS</li>
                <li><FontAwesomeIcon icon={faHtml5}/> HTML</li>
                <li><FontAwesomeIcon icon={faPython}/> Python</li>
              
                
                <li> <FontAwesomeIcon icon={faServer}/> Django</li>  <li>  Delphi</li>
            </ul><div className="skills-header">
        <h2 className='skill-text'>My Skillset</h2>
       </div>
        </div>
        
        
      </section>
<button className='scroll-hint'> View My Work   <FontAwesomeIcon className='arrow' icon={faCircleArrowDown}/> </button>
    </>
  )
}

export default Hero
