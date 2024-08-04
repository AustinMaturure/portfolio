import '../css/hero.css';
import React, { useEffect } from 'react';
import useElementInView from '../utils/ElementInView';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJs, faPython, faReact, faHtml5, faCss3 } from '@fortawesome/free-brands-svg-icons';
import { faCircleArrowDown, faServer } from '@fortawesome/free-solid-svg-icons';

function Hero() {
  const lenis = new Lenis();

  lenis.on('scroll', (e) => {

  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

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

    const handleScroll = () => {
      const icons = document.querySelectorAll('.icon');
      const scrollPosition = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const scrollFraction = scrollPosition / maxScroll;

      icons.forEach((icon) => {
        const rotation = scrollFraction * 1080; 
        icon.style.transform = `rotate(${rotation}deg)`;
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <section className="introduction" id="home">
        <div className="tag">
          <h1 className="about-software-developer">
            <span className="emphasis 2 po">HELLO!</span>, <span className="emphasis">I'm Austin</span>, <span className="emphasis">I Do</span> <span className="emphasis">it All...</span> <span className="emphasis">as a </span>
            <span className="emphasis po 2">Front-end </span> and <span className="emphasis">
              <span className="emphasis 2 po">Back-end</span> Web <span className="emphasis 2 po">Developer </span>
            </span>
          </h1>
        </div>
        <div className="techstack">
          <ul className="Skills" ref={stackRef}>
            <li><FontAwesomeIcon className="icon" icon={faReact}></FontAwesomeIcon> React</li>
            <li><FontAwesomeIcon className="icon" icon={faJs}></FontAwesomeIcon> Javascript</li>
            <li><FontAwesomeIcon className="icon" icon={faCss3}/> CSS</li>
            <li><FontAwesomeIcon className="icon" icon={faHtml5}/> HTML</li>
            <li><FontAwesomeIcon className="icon" icon={faPython}/> Python</li>
            <li><FontAwesomeIcon className="icon" icon={faServer}/> Django</li>
            
          </ul>
          <div className="skills-header">
            <h2 className="skill-text"></h2>
          </div>
        </div>
      </section>
      <button className="scroll-hint">View My Work <FontAwesomeIcon className="arrow" icon={faCircleArrowDown}/> </button>
    </>
  );
}

export default Hero;
