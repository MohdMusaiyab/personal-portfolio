import React from "react";
import Header from "../src/components/Header";
import About from "../src/components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import video from "../src/assets/playback.mp4";

const App = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="app relative">
      {/* <video
        autoPlay
        loop
        muted
        id="video"
        className="video-background"
        onEnded={(e) => {
          e.target.play();
        }}
      >
        <source src={video} type="video/mp4" />
      </video> */}
      <div className="content relative z-10">
        <Header scrollToSection={scrollToSection} />
        <div id="about" className="section">
          <About />
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
      </div>
    </div>
  );
};

export default App;
