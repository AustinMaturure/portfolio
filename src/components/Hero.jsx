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
import { faCircleArrowDown, faServer } from "@fortawesome/free-solid-svg-icons";

function Hero() {
  const lenis = new Lenis();

  lenis.on("scroll", (e) => {});

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  return (
    <>
      <section className="hero-section">
        <h1>
          HELLO!, I'm Austin & I Do it All... as a Front-end and Back-end Web
          Developer
        </h1>
      </section>
    </>
  );
}

export default Hero;
