
import Header from "../src/components/Header";
import About from "../src/components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Education from "./components/Education";
import { BrowserRouter } from "react-router-dom";
import Experience from "./components/Experience";

const App = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  
  return (
    <BrowserRouter>
      <div className="app relative max-w-full overflow-x-hidden min-h-screen">
        <div className="content relative z-10 w-full"> 
          <Header scrollToSection={scrollToSection} />
          

          <div id="about" className="section w-full"> 
            <About />
          </div>
          
          <div className="experience w-full" id="experience">
            <Experience />
          </div>
          
          <div className="education w-full" id="education">
            <Education />
          </div>
          
          <div id="skills" className="section w-full">
            <Skills />
          </div>
          
          <div id="projects" className="section w-full">
            <Projects />
          </div>
          
          <div id="contact" className="section w-full">
            <Contact />
          </div>

          <div className="w-full">
            <Footer />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;