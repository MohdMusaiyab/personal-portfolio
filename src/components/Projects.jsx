import React, { useRef, useState } from "react";
import projectsData from "../data/projects.json";
import { motion, AnimatePresence } from "framer-motion";
import "../style/Projects.css";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const projectVariants = {
  hidden: (i) => ({
    x: i % 2 === 0 ? -100 : 100,
    opacity: 0,
  }),
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
    },
  },
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const modalRef = useRef(null);

  const openModal = (project) => setSelectedProject(project);
  const closeModal = () => setSelectedProject(null);

  const handleClickOutsideModal = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      closeModal();
    }
  };

  React.useEffect(() => {
    document.addEventListener("mousedown", handleClickOutsideModal);
    return () =>
      document.removeEventListener("mousedown", handleClickOutsideModal);
  }, []);

  return (
    <section className="py-20 text-white min-h-screen ">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-5xl font-extrabold mb-16 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            My Projects
          </span>
        </motion.h2>

        <motion.div
          className="space-y-20"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {projectsData.projects.map((project, index) => (
            <motion.div
              key={index}
              className={`flex flex-col lg:flex-row ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } items-center`}
              variants={projectVariants}
              custom={index}
            >
              <motion.div
                className="w-full lg:w-1/2 p-10"
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.3 },
                }}
                onClick={() => openModal(project)}
              >
                <img
                  src={project.images[0]}
                  alt={project.name}
                  className="rounded-lg shadow-2xl w-full h-auto cursor-pointer"
                />
              </motion.div>
              <div className="w-full lg:w-1/2 p-10">
                <h3 className="text-3xl font-bold mb-4">{project.name}</h3>
                <p className="text-gray-300 mb-6">{project.description}</p>
                <div className="flex flex-wrap mb-6">
                  {project.techStack.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-[#BA55D3] text-xs px-3 py-1 rounded-full mr-2 mb-2 hover:text-yellow-400 hover:bg-blue-800 transition duration-300 ease-in-out"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <button
                  onClick={() => openModal(project)}
                  className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
                >
                  Learn More
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-90 flex justify-center items-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-black text-white rounded-xl shadow-2xl overflow-hidden max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              ref={modalRef}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 20, stiffness: 300 }}
            >
              <div className="modal-content">
                {/* Modal Header */}
                <div className="modal-header p-6 flex justify-between items-center">
                  <h2 className="text-2xl font-bold hover:text-blue-500 transition-colors duration-300">
                    {selectedProject.name}
                  </h2>
                  <button
                    onClick={closeModal}
                    className="text-white hover:text-blue-500 transition-colors duration-300 transform hover:scale-110"
                  >
                    <svg
                      className="w-8 h-8"
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
                </div>

                {/* Modal Body */}
                <div className="modal-body p-6 space-y-6">
                  <p className="leading-relaxed hover:text-blue-400 transition-colors duration-300">
                    {selectedProject.description}
                  </p>

                  {/* Key Features Section */}
                  <div className="key-features rounded-lg p-4 transition-colors duration-300 hover:shadow-lg">
                    <h3 className="text-xl font-semibold text-sky-400 mb-3 hover:text-sky-300 transition-colors duration-300">
                      Key Features:
                    </h3>
                    <ul className="list-disc list-inside space-y-2">
                      {selectedProject.keyPoints.map((point, index) => (
                        <li
                          key={index}
                          className="hover:text-sky-400 transition-colors duration-300"
                        >
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack Section */}
                  <div className="tech-stack rounded-lg p-4 hover:transition-colors duration-300">
                    <h3 className="text-xl font-semibold text-blue-400 mb-3 hover:text-blue-300 transition-colors duration-300">
                      Tech Stack:
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.techStack.map((tech, index) => (
                        <span
                          key={index}
                          className="bg-gray-700 text-white rounded-md px-3 py-1 text-sm 
                    hover:bg-blue-500 hover:text-white transition-colors duration-300 
                    transform hover:scale-105"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Modal Footer */}
                  <div className="modal-footer flex justify-between mt-6">
                    <a
                      href={selectedProject.githubRepo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white px-4 py-2 rounded-md 
                hover:shadow-lg 
                transition-all duration-300 transform hover:-translate-y-1"
                    >
                      View Code on GitHub
                    </a>
                    <a
                      href={selectedProject.liveSite}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white px-4 py-2 rounded-md 
                 hover:shadow-lg 
                transition-all duration-300 transform hover:-translate-y-1"
                    >
                      View Live Site
                    </a>
                  </div>

                  {/* Modal Images */}
                  <div className="modal-images grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    {selectedProject.images.map((image, index) => (
                      <img
                        key={index}
                        src={image}
                        alt={`Screenshot ${index + 1}`}
                        className="rounded-lg shadow-lg object-cover w-full h-auto 
                  hover:scale-105 transition-transform duration-300 cursor-pointer"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
