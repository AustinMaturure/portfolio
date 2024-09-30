import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Work from "./components/Work.jsx";
import Footer from "./components/Footer.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Navbar />
    <Hero />
    <Work />
    <Footer />
  </React.StrictMode>
);
