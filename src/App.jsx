import React, { useState } from "react";
import Header from "../src/components/Header";
import About from "../src/components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Education from "./components/Education";
import { BrowserRouter, Routes } from "react-router-dom";

const App = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <BrowserRouter>
      <div className="app relative">
        <div className="content relative z-10">
          <Header scrollToSection={scrollToSection} />
          <div id="about" className="section">
            <About />
          </div>
          <div className="education" id="education">
            <Education></Education>
          </div>
          <div id="skills" className="section">
            <Skills />
          </div>
          <div id="projects" className="section">
            <Projects />
          </div>
          <div id="contact" className="section">
            <Contact />
          </div>

          <div>
            <Footer></Footer>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};
export default App;
