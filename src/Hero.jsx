import './hero.css'
import React from 'react'
import { useEffect } from 'react'

function Hero() {
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
         <h1 className='about-software-developer'><span className='emphasis 2'>HELLO!</span>,  <span className='emphasis'>I'm Austin</span> , <span className='emphasis'>I Do</span> <span className='emphasis'>it All...</span> <span className='emphasis' >as a </span><span className='emphasis 2'>Front-End</span>, <span className='emphasis 2'>Backend</span> <span className='emphasis'>Web Developer and</span>  <span className='emphasis 2'>Sotware Engineer</span></h1>
       </div>
        <div className="techstack">
            <ul className='Skills'>
                <li>React</li>
                <li>Javascript</li>
                <li>CSS</li>
                <li>HTML</li>
                <li>Delphi</li>
                <li>Python</li>
                <li>Django</li>
            </ul>
        </div>
        
      </section>
<button className='scroll-hint'> Eyes Down Here</button>
    </>
  )
}

export default Hero
