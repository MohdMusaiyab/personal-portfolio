import Header from "../src/components/Header";
import About from "../src/components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Education from "./components/Education";
import { BrowserRouter } from "react-router-dom";
import Experience from "./components/Experience";
import { Helmet, HelmetProvider } from "react-helmet-async";

const App = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <HelmetProvider>
      <Helmet>
        <title>Mohd Musaiyab | Full Stack Developer</title>
        <meta
          name="description"
          content="Next.js + Supabase + Redis | React, Go, Salesforce"
        />

        <meta property="og:title" content="Mohd Musaiyab | Portfolio" />
        <meta
          property="og:description"
          content="Building RBAC systems with Next.js + Supabase + Redis. Full stack developer from Mumbai."
        />
        <meta property="og:image" content="https://mohd-musaiyab.onrender.com/portfolio.png" />
        <meta property="og:url" content="https://your-portfolio.com" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Mohd Musaiyab | Portfolio" />
        <meta
          name="twitter:description"
          content="Next.js + Supabase + Redis projects"
        />
        <meta name="twitter:image" content="https://mohd-musaiyab.onrender.com/portfolio.png" />
      </Helmet>
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
    </HelmetProvider>
  );
};

export default App;
