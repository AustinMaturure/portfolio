import './hero.css'
import React from 'react'
import { useEffect } from 'react'
import useElementInView from './ElementInView'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJs, faPython, faReact, faHtml5, faCss3 } from '@fortawesome/free-brands-svg-icons';




function Hero() {
  
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
    
  return (
    
    <>
    
      <section className="introduction">
       <div className="tag">
         <h1 className='about-software-developer'>HELLO!,  I'm Austin , I Do it All...as a Front-End, Backend Web Developer and Software Engineer</h1>
       </div>
      
       
        <div className="techstack">
            <ul className='Skills' ref={stackRef}>
                <li>   <FontAwesomeIcon icon={faReact}></FontAwesomeIcon> React</li>
                <li> <FontAwesomeIcon icon={faJs}></FontAwesomeIcon> Javascript</li>
                <li><FontAwesomeIcon icon={faCss3}/> CSS</li>
                <li><FontAwesomeIcon icon={faHtml5}/> HTML</li>
                <li><FontAwesomeIcon icon={faPython}/> Python</li>
              
                
                <li>Django</li>  <li>Delphi</li>
            </ul><div className="skills-header">
        <h2 className='skill-text'>My Skillset</h2>
       </div>
        </div>
        
        
      </section>
<button className='scroll-hint'> Eyes Down Here</button>
    </>
  )
}

export default Hero
