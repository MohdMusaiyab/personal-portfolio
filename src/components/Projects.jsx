import React, { useRef, useState } from "react";
import projectsData from "../data/projects.json";
import { motion, useInView, useAnimation } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const Projects = () => {
  const ref = useRef(null);
  const controls = useAnimation();
  const [selectedProject, setSelectedProject] = useState(null);

  const isInView = useInView(ref, {
    threshold: 0.4,
    triggerOnce: false,
  });

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  const handleClickOutsideModal = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      closeModal();
    }
  };

  React.useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  React.useEffect(() => {
    document.addEventListener("mousedown", handleClickOutsideModal);
    return () => {
      document.removeEventListener("mousedown", handleClickOutsideModal);
    };
  }, []);

  return (
    <section ref={ref} className="py-20 text-white min-h-screen relative z-10">
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 text-center"
          variants={fadeInUp}
          initial="hidden"
          animate={controls}
        >
          My Projects
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          animate={controls}
        >
          {projectsData.projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 bg-opacity-20 rounded-lg shadow-xl overflow-hidden transform hover:scale-110 transition-transform duration-300 relative z-10 cursor-pointer"
              variants={fadeInUp}
              onClick={() => openModal(project)}
            >
              <div className="relative h-48">
                <img
                  src={project.images[0]}
                  alt={project.name}
                  className="absolute inset-0 w-full h-full object-cover opacity-90 md:opacity-100 hover:opacity-80 transition-opacity duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                <h3 className="absolute inset-x-0 bottom-0 text-white text-2xl font-semibold p-4 text-shadow">
                  {project.name}
                </h3>
              </div>
              <div className="p-6 space-y-3">
                <p className="text-gray-300">{project.description}</p>
                <ul className="space-y-2">
                  {project.techStack.map((tech, techIndex) => (
                    <motion.li
                      key={techIndex}
                      className="flex items-center space-x-3 group font-semibold hover:text-blue-400"
                      whileHover={{ x: 10, transition: { duration: 0.2 } }}
                    >
                      <svg
                        className="w-5 h-5 mr-2 text-blue-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {tech}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-80 flex justify-center items-center z-50">
          <div className="bg-gray-200 rounded-lg overflow-y-auto max-h-full max-w-3xl w-full" ref={ref}>
            <button
               className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition duration-300"
              onClick={closeModal}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4 text-purple-600">
                {selectedProject.name}
              </h2>
              <p className="text-blue-800 mb-4">
                {selectedProject.description}
              </p>
              <ul className="space-y-2">
                {selectedProject.keyPoints.map((point, pointIndex) => (
                  <li key={pointIndex} className="text-yellow-900">
                    {point}
                  </li>
                ))}
              </ul>
              <ul className="space-y-2 mt-4">
                {selectedProject.techStack.map((tech, techIndex) => (
                  <motion.li key={techIndex} className="flex items-center text-gray-500 hover:text-blue-400"
                  whileHover={{ x: 10, transition: { duration: 0.2 } }}>
                  
                    <svg
                      className="w-5 h-5 mr-2 text-blue-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {tech}
                  </motion.li>
                ))}
              </ul>
              <div className="mt-4">
                <a
                  href={selectedProject.githubRepo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  GitHub Repository
                </a>
                <span className="mx-2 text-gray-400">|</span>
                <a
                  href={selectedProject.liveSite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  Live Site
                </a>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-4">
                {selectedProject.images.map((image, imageIndex) => (
                  <img
                    key={imageIndex}
                    src={image}
                    alt={selectedProject.name}
                    className="rounded-lg shadow-xl object-cover h-64"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
