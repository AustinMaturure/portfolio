import "../css/hero.css";
import React, { useEffect } from "react";
import useElementInView from "../utils/ElementInView";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faJs,
  faPython,
  faReact,
  faHtml5,
  faCss3,
} from "@fortawesome/free-brands-svg-icons";
import {
  faAngleDown,
  faArrowDown,
  faArrowDown19,
  faArrowsDownToLine,
  faCircleArrowDown,
  faHandPointDown,
  faLevelDownAlt,
  faServer,
} from "@fortawesome/free-solid-svg-icons";

function Hero() {
  useEffect(() => {
    const spans = document.querySelectorAll(".emphasis");

    spans.forEach((element, index) => {
      setTimeout(() => {
        element.style.backgroundColor = "#b7cece";
        if (
          element.classList.contains("emphasis") &&
          element.classList.contains("2")
        ) {
          setTimeout(() => {
            element.style.backgroundColor = "#b7cece";
          }, 1000);
        } else {
          element.style.backgroundColor = "transparent";
        }
      }, index * 260);
    });
  }, []);

  return (
    <>
      <section className="hero-section">
        <div className="hero-text">
          <h1 className="introduction">
            <span className="emphasis 2 po">HELLO!</span>,{" "}
            <span className="emphasis">I'm Austin</span>,{" "}
            <span className="emphasis">And I Do</span>{" "}
            <span className="emphasis">it All...</span>{" "}
            <span className="emphasis">as a </span>
            <span className="emphasis po 2">Front-end </span> and{" "}
            <span className="emphasis">
              <span className="emphasis 2 po">Back-end</span> Web{" "}
              <span className="emphasis 2 po">Developer </span>
            </span>
          </h1>
        </div>
        <div className="skills">
          <div>
            <FontAwesomeIcon className="icon" icon={faReact}></FontAwesomeIcon>{" "}
          </div>
          <div>
            <FontAwesomeIcon className="icon" icon={faJs}></FontAwesomeIcon>{" "}
          </div>
          <div>
            <FontAwesomeIcon className="icon" icon={faCss3} />
          </div>
          <div>
            <FontAwesomeIcon className="icon" icon={faHtml5} />
          </div>
          <div>
            <FontAwesomeIcon className="icon" icon={faPython} />
          </div>
          <div>
            <FontAwesomeIcon className="icon" icon={faServer} />
          </div>
        </div>

        <h1 className="hero-projects-link">
          <a href="#projects">
            See My Work{" "}
            <FontAwesomeIcon
              className="icon"
              icon={faLevelDownAlt}
            ></FontAwesomeIcon>
          </a>
        </h1>
      </section>
    </>
  );
}

export default Hero;
