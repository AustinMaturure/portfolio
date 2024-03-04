import './work.css'
import React, { useState } from 'react'

import project1image from './assets/excelsior.png'
import project2image from './assets/sylka.png'
import project3image from './assets/munch.png'
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

  return (
    <>
    
      <section className="projects">
     
        <div className='project'>
        <div class="project-description">
          
          
            <h1 class="project-title" >Excelsior</h1>
            <p class="project-explaination">
                Full-Stack News Website, using Django for the 
                backend to store all artcles and views, and react for the frontend.
                A curated space for Local news, and updates
                Using Sql lite hosted on CoachroachDB and deployed on GoogleRun for the Database , as well as CSS 
                and HTML 
            </p>
            <div className="key">

      
            <h2>Key Features:</h2>
  <ol className='key-features' id='key-feature'>
    <li><strong>Dynamic Content:</strong> Provides a dynamic platform for publishing news <button className='see-more' onClick={handleClick}> +</button>  articles, featuring categories such as politics, technology, entertainment, and more.</li>
    <li><strong>User Authentication:</strong> Users can register, login, and manage their profiles, allowing for personalized experiences and interactions.</li>
    <li><strong>Search Functionality:</strong> Newsify incorporates a powerful search feature, enabling users to quickly find articles based on keywords or topics of interest.</li>
    <li><strong>Real-time Updates:</strong> Utilizing React for frontend development, Newsify delivers real-time updates and notifications, ensuring readers stay informed about the latest news developments.</li>
    <li><strong>Admin Dashboard:</strong> Content creators can manage articles, categories, and user interactions through an intuitive admin dashboard, facilitating efficient content management.</li>
  </ol>
      </div>
            <div className="project-tools">
            <div className="tech" >
            <ul className='stack' id='#project-techstack'>
                <li>React</li>
                <li>Django</li>
                <li>SQL</li>
                <li>CoachRoachDB</li>
                <li>GoogleCloudRun</li>
            </ul>
        </div>
        <a className='site-link' href="https://excelsiornews.netlify.app">live site    </a>
      
            </div>
            

        </div>
        <div className="project-img-cnt">
          <img className='project-img' src={project1image} alt="" />
        </div>

        </div>
   

        <div className='project' id='project-2'>
        <div className="project-img-cnt">
          <img className='project-img' src={project2image} alt="" />
        </div>
        <div class="project-description">
            <h1 class="project-title" >Sylka Mohle</h1>
            <p><a href="https://sylkamohleoptometrist.co.za/">https://sylkamohleoptometrist.co.za</a></p>
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
  <ol className='key-features'>
    
<li><strong>Optimized SEO:</strong> Implementing search engine optimization <button className='see-more' onClick={handleClick}> + more</button> techniques to improve the website's visibility in search engine results, attracting more potential patients and driving organic traffic.</li>
    <li><strong>Responsive Design:</strong> Creating a responsive design that ensures optimal viewing experience across various devices, including desktops, tablets, and smartphones, improving accessibility and user satisfaction.</li>
    
    <li><strong>Secure Patient Portal:</strong> Developing a secure patient portal for accessing medical records, viewing appointment history, and communicating with healthcare providers, ensuring patient privacy and confidentiality.</li>
  </ol>
</div>
            
            

        </div>
       

        </div>
        <div className='project' id='project-3'>
       
        <div class="project-description">
            <h1 class="project-title" >Munch</h1>
            <p><a href="https://github.com/AustinMaturure/munch">See progress</a></p>
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

      
            </div>
            

        </div>
       
        <div className="project-img-cnt">
          <img className='project-img' src={project3image} alt="" />
        </div>
        </div>

      </section>

    </>
  )
}

export default Work
