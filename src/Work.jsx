import './work.css'
import React, { useState } from 'react'
import useElementInView from './ElementInView'

import project1image from './assets/excelsior.webp'
import project2image from './assets/sylka.webp'
import project3image from './assets/munch.webp'

function Work() {
  const [click, isClicked] = useState(false)
  function handleClick() {
    console.log('Button clicked!');
    isClicked(!click);
    
    // Selecting the key features element by class name
    const keyFeatures = document.getElementsByClassName('key-features');
    
    // Looping through all elements with class 'key-features'
    for (let i = 0; i < keyFeatures.length; i++) {
      // Toggling overflowY and height based on the click state
      keyFeatures[i].style.overflowY = click ? 'hidden' : 'visible';
      keyFeatures[i].style.height = click ? '32px' : 'unset';
    }
    
    // Selecting the see-more element by class name
    const seeMoreElements = document.getElementsByClassName('see-more');
    
    // Looping through all elements with class 'see-more'
    for (let i = 0; i < seeMoreElements.length; i++) {
      // Setting innerHTML based on the click state
      seeMoreElements[i].innerHTML = click ? '+' : '-';
    }
  }

 
  const titleRef = useElementInView('.project-title');
  const projRef = useElementInView('#project-1 .project-description');
  const projRef2 = useElementInView('#project-2 .project-description');
  const projRef3 = useElementInView('#project-3 .project-description');
  const linkRef = useElementInView('.project-link');
  return (
    <>

      <section className="projects" id='projects'>
   
        <div className='project' id='project-1'>
       
        <div class="project-description" ref={projRef}>
          
          
            <h1 class="project-title" ref={titleRef}>Excelsior</h1>
            <p className='project-link' ref={linkRef}><a href="https://excelsiornews.netlify.app" target='_blank'>https://excelsiornews.co.za</a></p>
            <p class="project-explaination">
                Full-Stack News Website, using Django for the 
                backend to store all articles, images and views, and react for the frontend.
                A curated space for local news, weather and updates 
                Using a SQL server hosted on CoachroachDB, run on GoogleRun from a DockerImage for the Database.
            </p>
            <div className="key">

      
            <h2>Key Features:</h2>
   <div className="features">        
  <ol className='key-features' id='key-feature'>
    <li><strong>Dynamic Content:</strong> Provides a dynamic platform for publishing news articles, featuring categories such as politics, technology, entertainment, and more.</li>
    <li><strong>Backend:</strong> Set up Backend API using Django RestFrameWork to do CRUD operations such as fetch, edit and post data to the SQL database.</li>
    <li><strong>Search Functionality:</strong> Newsify incorporates a powerful search feature, enabling users to quickly find articles based on keywords or topics of interest.</li>
    <li><strong>Real-time Updates:</strong> Utilizing React for frontend development, Newsify delivers real-time updates and notifications, ensuring readers stay informed about the latest news developments.</li>
    <li><strong>Admin Dashboard:</strong> Content creators can manage articles, categories, and user interactions through an intuitive admin dashboard, facilitating efficient content management.</li>
  </ol></div> 
      </div>
            <div className="project-tools">
            <div className="tech" >
            <ul className='stack' id='#project-techstack'>
                <li>React</li>
                <li>Django</li>
                <li>SQL</li>
                <li>Docker</li>
                <li>CoachRoachDB</li>
                <li>GoogleCloudRun</li>
            </ul>
        </div>
     
      
            </div>
            

        </div>
        <div className="project-img-cnt">
        <a href="https://excelsiornews.netlify.app" target='_blank'><img className='project-img'  src={project1image} alt="" /></a>
        </div>

        </div>
        <h3>02</h3>

        <div className='project' id='project-2'>
        <div className="project-img-cnt">
        <a href="https://sylkamohleoptometrist.co.za/" target='_blank'><img className='project-img' src={project2image} alt="" /></a>
        </div>
        <div class="project-description" ref={projRef2}>
            <h1 class="project-title" >Sylka Mohle</h1>
            <p><a href="https://sylkamohleoptometrist.co.za/" target='_blank'>https://sylkamohleoptometrist.co.za</a></p>
            <p class="project-explaination">
                Client Optometry Website, 
                A project where I had the opportunity to blend my passion for frontend development with my interest in healthcare technology. As a frontend developer,
                 I played a pivotal role in crafting an immersive online experience for optometry practices, leveraging React and other modern web technologies to create a dynamic and engaging website.
            </p>
            <div className="project-tools">
            <div className="tech" >
            <ul className='stack' id='#project-techstack'>
                <li>React</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
                
            </ul>
        </div>

      
            </div>
            <div className="key">
  <h2>Key Features:</h2>
  <div className="features">
  <ol className='key-features'>
    
<li><strong>Optimized SEO:</strong> Implementing search engine optimization techniques to improve the website's visibility in search engine results, attracting more potential patients and driving organic traffic.</li>
    <li><strong>Responsive Design:</strong> Creating a responsive design that ensures optimal viewing experience across various devices, including desktops, tablets, and smartphones, improving accessibility and user satisfaction.</li>
    
    <li><strong>Secure Patient Portal:</strong> Developing a secure patient portal for accessing medical records, viewing appointment history, and communicating with healthcare providers, ensuring patient privacy and confidentiality.</li>
  </ol></div>
</div>
            
            

        </div>
       

        </div>
        <h3>03</h3>
        <div className='project' id='project-3'>
       
        <div class="project-description" ref={projRef3}>
            <h1 class="project-title" >Munch</h1>
            <p><a href="https://github.com/AustinMaturure/munch" target='_blank'>See progress</a></p>
            <p class="project-explaination">
          
Munch is a dynamic and visually appealing website designed to enhance the online presence and customer engagement for a restaurant. Developed with modern web technologies, Munch offers a seamless browsing experience and intuitive navigation for users.
            </p>
            <div className="project-tools">
            <div className="tech" >
            <ul className='stack' id='#project-techstack'>
                <li>React</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
                
            </ul>
        </div>

      
            </div><div className="key">
  <h2>Key Features:</h2>
  <div className="features">
    <ol className='key-features'>
    <li>
        <strong>Interactive Menu:</strong> Creating an interactive menu with high-quality images, descriptions, and nutritional information to help customers make informed choices and enhance their dining experience.
      </li>
      <li>
        <strong>Online Ordering:</strong>To be Added: Providing a seamless online ordering experience for customers to browse the menu, place orders, and make payments conveniently from any device.
      </li>
      <li>
        <strong>Table Reservation System:</strong> Implementing a table reservation system to allow customers to book tables in advance, helping to manage seating capacity and providing a better dining experience.
      </li>
    </ol>
    
  </div>
</div>

            

        </div>
       
        <div className="project-img-cnt">
        <a href="https://github.com/AustinMaturure/munch" target='_blank'><img className='project-img' src={project3image} alt="" /></a>
        </div>
        </div>

      </section>
      <section className='contact' id='contact'>
        <div className="contact-details">
          <h1 class="contact-title" >Contact</h1>
      <h2 className='contact-detail' >Phone: <a href="tel: +27 993 3853">078 993 3853</a></h2>
      <h2 className='contact-detail'>Email:<a href="austinematurure@gmail.com"> austinematurure@gmail.com</a></h2>
      <h2 className='contact-detail'>Github:<a href="https://github.com/AustinMaturure/"> AustinMaturure</a></h2>
      <p style={{paddingLeft:'20px'}}>Ready to Work <span style={{color:' #388ad2'}}>immediatly</span></p>
        </div>
      

      </section>
      <section className="about" id='about'>
      <h1 class="about-title" >A Little About Me...</h1>
      <p className='about-text'>Austin here! a passionate full stack developer with a knack for crafting seamless digital experiences. With expertise in React, Django, HTML, CSS, JavaScript, SQL, Delphi as well as experience working with Docker I thrive on turning ideas into robust, scalable solutions.

<p>


I honed my skills at Hyperion Dev's Software Engineering Bootcamp, where I graduated in the top 3 of my class. Even in high school, I showed promise in Information Technology, earning a distinction in the subject.

In the real world, I've already made waves. I spearheaded the development of a commission website for an optometrist, blending my technical prowess with a keen eye for user experience. My dedication to crafting intuitive interfaces and scalable solutions ensures that every project I touch exceeds expectations.
</p>
<p>
Beyond the code, I'm an avid football fan ⚽, finding inspiration in the teamwork and strategy of the game. This same passion reflects in my work as a developer, I love being in collaborative environments, tackling challenges head-on to deliver results that make a difference. </p>
      </p></section>
      

    </>
  )
}

export default Work
