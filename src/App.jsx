import React, { useState } from "react";
import Header from "../src/components/Header";
import About from "../src/components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Education from "./components/Education";

const App = () => {
  const [currentSection, setCurrentSection] = useState("about");

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setCurrentSection(id); // Update current section state
    }
  };

  return (
    <div className="app relative">
      <div className="content relative z-10">
        <Header scrollToSection={scrollToSection} currentSection={currentSection} />
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
  );
};

export default App;
