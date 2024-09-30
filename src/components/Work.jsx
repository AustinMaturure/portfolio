import "../css/work.css";
import React, { useState, useEffect, useRef } from "react";
import useElementInView from "../utils/ElementInView";

import project1image from "../assets/excelsior.webp";
import imgNews2 from "../assets/news2.webp";
import imgNews3 from "../assets/news3.webp";
import imgShopiet2 from "../assets/detail.webp";
import imgShopiet3 from "../assets/left.webp";
import imgShopiet1 from "../assets/right.webp";
import imgSylka2 from "../assets/sylka2.webp";
import imgSylka3 from "../assets/sylka3.webp";
import imgMunch2 from "../assets/munch2.webp";
import imgMunch3 from "../assets/munch3.webp";
import imgGolf1 from "../assets/golf-home.webp";
import imgGolf2 from "../assets/golf-game.webp";
import imgGolf3 from "../assets/golf-foot.webp";
import photo from "../assets/photo.webp";
import project2image from "../assets/sylka.webp";
import project3image from "../assets/munch.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faPhone,
  faArrowUp,
} from "@fortawesome/free-solid-svg-icons";

function Work() {
  const titleRef = useElementInView("#project-4 .project-title");
  const titleRef2 = useElementInView("#project-1 .project-title");
  const titleRef3 = useElementInView("#project-2 .project-title");
  const titleRef4 = useElementInView("#project-3 .project-title");
  const titleRef5 = useElementInView("#project-5 .project-title");

  const contactRef = useElementInView(".contact-title");
  const abouttitleRef = useElementInView(".about-title");

  const projRef = useElementInView("#project-1 .project-description");
  const projRef2 = useElementInView("#project-2 .project-description");
  const projRef3 = useElementInView("#project-3 .project-description");
  const projRef4 = useElementInView("#project-4 .project-description");
  const projRef5 = useElementInView("#project-5 .project-description");

  const expRef1 = useElementInView("#project-4 .project-explaination");
  const expRef2 = useElementInView("#project-2 .project-explaination");
  const expRef3 = useElementInView("#project-3 .project-explaination");
  const expRef4 = useElementInView("#project-1 .project-explaination");
  const expRef5 = useElementInView("#project-5 .project-explaination");

  const linkRef = useElementInView("#project-1 .project-link");
  const linkRef2 = useElementInView("#project-2 .project-link");
  const linkRef3 = useElementInView("#project-3 .project-link");
  const linkRef4 = useElementInView("#project-4 .project-link");
  const linkRef5 = useElementInView("#project-5 .project-link");

  const keyRef = useElementInView("#project-1 .features");
  const keyHeadRef = useElementInView("#project-1 .key h2");
  const stackRef = useElementInView("#project-1 .stack");

  const keyRef2 = useElementInView("#project-2 .features");
  const keyHeadRef2 = useElementInView("#project-2 .key h2");
  const stackRef2 = useElementInView("#project-2 .stack");

  const keyRef3 = useElementInView("#project-3 .features");
  const keyHeadRef3 = useElementInView("#project-3 .key h2");
  const stackRef3 = useElementInView("#project-3 .stack");

  const keyRef4 = useElementInView("#project-4 .features");
  const keyHeadRef4 = useElementInView("#project-4 .key h2");
  const stackRef4 = useElementInView("#project-4 .stack");

  const keyRef5 = useElementInView("#project-5 .features");
  const keyHeadRef5 = useElementInView("#project-5 .key h2");
  const stackRef5 = useElementInView("#project-5 .stack");

  const imgRef = useElementInView("#project-img-1 .project-img");
  const imgRef2 = useElementInView("#project-img-2 .project-img");
  const imgRef3 = useElementInView("#project-3 .project-img");
  const imgRef4 = useElementInView("#project-4 .project-img", {
    threshold: 0.5,
  });
  const pointRef1 = useElementInView(".project-description");
  const pointRef2 = useElementInView(".project-r");
  const pointRef3 = useElementInView(".project-3");

  const imgRef5 = useElementInView("#project-5 .project-img");

  const wrapRef = useElementInView(".wrap");

  const zoomRef = useRef(null);
  const [scale, setScale] = useState(2);
  useEffect(() => {
    const zoom = zoomRef.current;
    const wrapper = document.getElementById("zoom");

    const handleScroll = () => {
      if ((window.scrollY / 10000) * 5 >= 2.5) {
        wrapper.parentElement.style = "background: #1f1f1f";
      } else {
        wrapper.parentElement.style = "background:white";
      }
      wrapper.style = ` transform: rotate(90deg) scale(${
        (window.scrollY / 10000) * 5.2 < 3 ? (window.scrollY / 10000) * 5.2 : 3
      })`;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const shopImgs = [imgShopiet1, imgShopiet2, imgShopiet3];
  const [currentImg, setCurrentImg] = useState(shopImgs[1]);

  useEffect(() => {
    if (pointRef3.inView) {
      setCurrentImg(shopImgs[0]);
    } else if (pointRef1.inView) {
      setCurrentImg(shopImgs[1]);
    } else if (pointRef2.inView) setCurrentImg(shopImgs[2]);
  }, [pointRef3.inView]);

  return (
    <>
      <section className="projects">
        <div className="project">
          <div className="project-left">
            <div className="project-description" ref={pointRef1.ref}>
              <h1>Shopiet</h1>
              <p>
                A comprehensive full-stack marketplace platform. It offers users
                a seamless experience for buying and selling items with robust
                JWT authentication for secure sign-up and log-in processes.
                Users can upload items for sale, search for specific products,
                and filter results by categories. The platform features detailed
                product, category, and search pages to enhance the shopping
                experience.
              </p>
            </div>
            <div className="project-3">
              <h1>Web Sockets</h1>
              <p ref={pointRef2.ref}>
                WebSocket to facilitate instant communication between users
                regarding products
              </p>
            </div>
          </div>
          <div className="project-middle">
            <div className="project-img-cnt">
              <div className="proj-img1">
                <a
                  href="https://pietretiefcountryclub.netlify.app"
                  target="_blank"
                >
                  <img
                    className="project-img"
                    loading="lazy"
                    src={currentImg}
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="project-right">
            <div className="project-r">
              <h1 ref={pointRef3.ref}>User Authentication</h1>
              <p>
                Implemented JWT authentication to secure user accounts and
                enable features like sign up and log in.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Work;
