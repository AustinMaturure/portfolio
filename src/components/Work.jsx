import '../css/work.css'
import React, { useState, useEffect } from 'react'
import useElementInView from '../utils/ElementInView'

import project1image from '../assets/excelsior.webp'
import imgNews2 from '../assets/news2.webp'
import imgNews3 from '../assets/news3.webp'
import imgShopiet2 from '../assets/shopiet3.webp'
import imgShopiet3 from '../assets/shopiet2.webp'
import imgShopiet1 from '../assets/shopiet1.webp'
import imgSylka2 from '../assets/sylka2.webp'
import imgSylka3 from '../assets/sylka3.webp'
import imgMunch2 from '../assets/munch2.webp'
import imgMunch3 from '../assets/munch3.webp'
import project2image from '../assets/sylka.webp'
import project3image from '../assets/munch.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope,  faPhone, faArrowUp} from '@fortawesome/free-solid-svg-icons'

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

 
  const titleRef = useElementInView('#project-4 .project-title');
  const titleRef2 = useElementInView('#project-1 .project-title');
  const titleRef3 = useElementInView('#project-2 .project-title');
  const titleRef4 = useElementInView('#project-3 .project-title');

  const contactRef = useElementInView('.contact-title');
  const abouttitleRef = useElementInView('.about-title');

  const projRef = useElementInView('#project-1 .project-description');
  const projRef2 = useElementInView('#project-2 .project-description');
  const projRef3 = useElementInView('#project-3 .project-description');
  const projRef4 = useElementInView('#project-4 .project-description');

  const expRef1 = useElementInView('#project-4 .project-explaination');
  const expRef2 = useElementInView('#project-2 .project-explaination');
  const expRef3 = useElementInView('#project-3 .project-explaination');
  const expRef4 = useElementInView('#project-1 .project-explaination');

  const linkRef = useElementInView('.project-link');
  const imgRef = useElementInView('#project-img-1 .project-img');
  const imgRef2 = useElementInView('#project-img-2 .project-img');
  const imgRef3 = useElementInView('#project-3 .project-img');
  const imgRef4 = useElementInView('#project-4 .project-img');
  
  return (
    <>
  <button className='up'><a href="#nav"> <FontAwesomeIcon icon={faArrowUp}/></a></button>
      <section className="projects" id='projects'>
      <div className='project' id='project-4'>

  <div class="project-description" ref={projRef4}>

    <h1 class="project-title" ref={titleRef}>Shopiet</h1>
    <p className='project-link' ref={linkRef}><a href="https://shopiet.netlify.app" target='_blank'>https://shopiet.co.za</a></p>
   
    <p className="project-explaination" ref={expRef1}>
      
    Shopiet is a comprehensive full-stack marketplace platform developed using Django and React. It offers users a seamless experience for buying and selling items with robust JWT authentication for secure sign-up and log-in processes.
  Users can upload items for sale, search for specific products, and filter results by categories. The platform features detailed product, category, and search pages to enhance the shopping experience.
  
    </p>
    <div className="key">


      <h2>Key Features:</h2>
      <div className="features">
        <ol className='key-features' id='key-feature'>
        <li><strong>Web Sockets:</strong> Integrated using Redis WebSocket to facilitate instant communication between users regarding products.</li>
          <li><strong>User Authentication:</strong> Implemented JWT authentication to secure user accounts and enable features like sign up and log in.</li> 
          <li><strong>Profile Customization:</strong> Allows users to customize their profiles with bios, profile pictures, and links to other profiles or products.</li>
          <li><strong>Product Management:</strong> Users can upload items they'd like to sell and manage their product listings.</li>
          <li><strong>Search and Filtering:</strong> Incorporates a powerful search feature and filtering options to help users find specific products.</li>
          <li><strong>Responsive Design:</strong> Utilizes React for frontend development, ensuring a seamless experience across different devices and screen sizes.</li>
        </ol>
      </div>
    </div>
    <div className="project-tools">
      <div className="tech" >
        <ul className='stack' id='#project-techstack'>
          <li>React</li>
          <li>Django</li>
          <li>Redis</li>
          <li>Docker</li>
          <li>JWT Authentication</li>
          <li>REST API</li>
        </ul>
      </div>


    </div>


  </div>
  <div className="project-img-cnt" id='project-img-4'>
    <div className="proj-img1">
      <a href="https://shopiet.netlify.app" target='_blank'><img className='project-img' ref={imgRef4} src={imgShopiet1} alt="" /></a>
    </div>
    <div className="proj-img2">
      <a href="https://shopiet.netlify.app" target='_blank'><img className='project-img' ref={imgRef4} src={imgShopiet2} alt="" /></a></div>
    <div className="proj-img3">
      <a href="https://shopiet.netlify.app" target='_blank'><img className='project-img' ref={imgRef4} src={imgShopiet3} alt="" /></a>
    </div>

  </div>
  
</div>

   <h3 style={{paddingLeft:"1rem"}}>02</h3>
        <div className='project' id='project-1'>
       
        <div class="project-description" ref={projRef}>
          
          
            <h1 className="project-title" ref={titleRef2}>Excelsior</h1>
            <p className='project-link'><a href="https://excelsiornews.netlify.app" target='_blank'>https://excelsiornews.co.za</a></p>
            <p class="project-explaination"  ref={expRef4}>
                Full-Stack News Website, using Django for the 
                backend to store all articles, images and views, and react for the frontend.
                A curated space for local news, weather and updates 
                Using a SQL server hosted on CoachroachDB, run on GoogleRun from a DockerImage for the backend server.
            </p>
            <div className="key">

      
            <h2>Key Features:</h2>
   <div className="features">        
  <ol className='key-features' id='key-feature'>
    <li><strong>Dynamic Content:</strong> Provides a dynamic platform for publishing news articles, featuring categories such as politics, technology, entertainment, and more.</li>
    <li><strong>Backend:</strong> Set up Backend API using Django RestFrameWork to do CRUD operations such as fetch, edit and post data to the SQL database.</li>
    <li><strong>Search Functionality:</strong> The site incorporates a powerful search feature, enabling users to quickly find articles based on keywords or topics of interest.</li>
    <li><strong>Real-time Updates:</strong> Utilizing React for frontend development, Excelsior news delivers real-time updates and notifications, ensuring readers stay informed about the latest news developments.</li>
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
                <li>REST API</li>
                <li>GoogleCloudRun</li>
            </ul>
        </div>
     
      
            </div>
            

        </div>
        <div className="project-img-cnt" id='project-img-1'>
          <div className="proj-img1">
             <a href="https://excelsiornews.netlify.app" target='_blank'><img className='project-img' ref={imgRef} src={project1image} alt="" /></a>
          </div>
       <div className="proj-img2"> 
        <a href="https://excelsiornews.netlify.app" target='_blank'><img className='project-img' ref={imgRef} src={imgNews2} alt="" /></a></div>
      <div className="proj-img3">
        <a href="https://excelsiornews.netlify.app" target='_blank'><img className='project-img' ref={imgRef} src={imgNews3} alt="" /></a>
      </div>
        
        </div>

        </div>
        <h3 style={{paddingLeft:"1rem"}}>03</h3>

        <div className='project' id='project-2'>
        <div className="project-img-cnt" id='project-img-2'>
        <div className="proj-img1">
        <a href="https://sylkamohleoptometrist.co.za/" target='_blank'><img className='project-img' ref={imgRef2} src={project2image}  alt="" /></a>
        </div>
        <div className="proj-img2">
        <a href="https://sylkamohleoptometrist.co.za/" target='_blank'><img className='project-img' ref={imgRef2} src={imgSylka2}  alt="" /></a>
        </div>
        <div className="proj-img3" >
        <a href="https://sylkamohleoptometrist.co.za/" target='_blank'><img className='project-img' ref={imgRef2} src={imgSylka3}  alt="" /></a>
        </div>
        </div>
        <div class="project-description" ref={projRef2}>
            <h1 class="project-title"  ref={titleRef3}>Sylka Mohle</h1>
            <p><a href="https://sylkamohleoptometrist.co.za/" target='_blank'>https://sylkamohleoptometrist.co.za</a></p>
            <p class="project-explaination"  ref={expRef2}>
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
    
<li><strong>Optimized SEO:</strong>Ranked #1 on Google for local search query "Optometrist Piet Retief" Implementing search engine optimization techniques to improve the website's visibility in search engine results, attracting more potential patients and driving organic traffic.</li>
    <li><strong>Responsive Design:</strong> Creating a responsive design that ensures optimal viewing experience across various devices, including desktops, tablets, and smartphones, improving accessibility and user satisfaction.</li>
    
   
  </ol></div>
</div>
            
            

        </div>
       

        </div>
        <h3 style={{paddingLeft:"1rem"}} >04</h3>
        <div className='project' id='project-3'>
       
        <div class="project-description" ref={projRef3}>
            <h1 class="project-title"  ref={titleRef4}>Munch</h1>
            <p><a href="https://munchrestaurantpietretief.netlify.app" target='_blank'>https://munchrestaurantpietretief</a></p>
            <p class="project-explaination" ref={expRef3}> 
          
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
        <strong>Responsive Design:</strong> Developed with a Mobile First approach to benifit the majority of the website users, while remaining responsive at larger sizes.      </li>
    </ol>
    
  </div>
</div>

            

        </div>
       
        <div className="project-img-cnt">
        <div className="proj-img1">
        <a href="https://munchrestaurantpietretief.netlify.app" target='_blank'><img className='project-img'  loading="lazy" src={project3image} ref={imgRef3} alt="" /></a>
        </div>
        <div className="proj-img2">
        <a href="https://munchrestaurantpietretief.netlify.app" target='_blank'><img className='project-img' loading="lazy" src={imgMunch2} ref={imgRef3} alt="" /></a>
        </div>
        <div className="proj-img3">
        <a href="https://munchrestaurantpietretief.netlify.app" target='_blank'><img className='project-img' loading="lazy" src={imgMunch3} ref={imgRef3} alt="" /></a>
        </div>
        </div>
        </div>

      </section>
      <section className='contact' id='contact'>
        <div className="contact-details">
          <h1 class="contact-title" ref={contactRef}>Contact</h1>
      <h2 className='contact-detail' >  <FontAwesomeIcon icon={faPhone}/> Phone: <a href="tel:+27 78 993 3853" target='_blank'>078 993 3853</a></h2>
      <h2 className='contact-detail'>  <FontAwesomeIcon icon={faEnvelope}/> Email:<a   href="mailto:austinematurure@gmail.com" target='_blank'> austinematurure@gmail.com</a></h2>
      <h2 className='contact-detail'> <FontAwesomeIcon icon={faGithub}/> Github:<a href="https://github.com/AustinMaturure/" target='_blank'> AustinMaturure</a></h2>
     
      <p style={{paddingLeft:'20px'}}>Ready to Work <span className="ime" style={{color:' #388ad2'}}>immediatly   <a className='contact-detail linked' target='_blank' href="https://www.linkedin.com/in/austin-maturure-30433a245/"><FontAwesomeIcon icon={faLinkedin}/></a></span></p> 
      
        </div>
      

      </section>
      <section className="about" id='about'>
      <h1 class="about-title"  ref={abouttitleRef} >A Little About Me...</h1>
      <p className='about-text'>Austin here! a passionate full stack developer with a knack for crafting seamless digital experiences. With expertise in React, Django, HTML, CSS, JavaScript, SQL, Delphi as well as experience working with Docker I thrive on turning ideas into robust, scalable solutions.

<p>


I honed my skills at Hyperion Dev's Software Engineering Bootcamp, where I graduated in the top 3 of my class. Even in high school, I showed promise in Information Technology, earning a distinction in the subject.

In the real world, I've already made waves. I spearheaded the development of a commission website for an optometrist, blending my technical prowess with a keen eye for user experience. My dedication to crafting intuitive interfaces and scalable solutions ensures that every project I touch exceeds expectations.
</p>
<p>
Beyond the code, I'm an avid football fan ⚽, finding inspiration in the teamwork and strategy of the game. This same passion reflects in my work as a developer, I love being in collaborative environments, tackling challenges head-on to deliver results that make a difference. </p>
      </p></section>
      
 <footer>
  <p> {`©2024 Austin Maturure. Made with 💙 (But Mostly React)`}</p>
      
    </footer>
    </>
    
  )
}

export default Work
