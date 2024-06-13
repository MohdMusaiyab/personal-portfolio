import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import educationData from "../data/education.json";

const Education = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleCard = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl mb-12 text-center">
          <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            My Education
          </span>
        </h2>
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute inset-0 md:flex items-center justify-center sm:hidden">
            <div className="h-full w-1 bg-gradient-to-b from-purple-400 to-pink-600 rounded-full relative"></div>
          </div>

          {educationData.education.map((education, index) => (
            <AnimatePresence key={index}>
              <motion.div
                className={`mb-10 flex ${
                  index % 2 === 0 ? "justify-start" : "justify-end"
                } items-center w-full`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                key={index}
                onClick={() => toggleCard(index)}
                layout
              >
                <div
                  className={`w-full md:w-1/2 p-6 relative ${
                    index % 2 === 0 ? "pr-8" : "pl-8"
                  }`}
                >
                  <motion.div
                    className="bg-gray-800 rounded-lg shadow-lg p-6 relative z-10 education-card hover:shadow-xl transition-all duration-300"
                    layout
                  >
                    <div className="absolute top-4 right-4">
                      <img
                        src={education.logo}
                        alt={education.institution}
                        className="w-12 h-12 rounded-full"
                      />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {education.institution}
                    </h3>
                    <p className="text-gray-400">{education.degree}</p>
                    <p className="text-gray-500">
                      {education.startYear} - {education.endYear}
                    </p>
                  </motion.div>
                  <AnimatePresence>
                    {activeIndex === index && (
                      <motion.div
                        className="bg-white rounded-lg shadow-lg p-6 mt-4 absolute inset-0 backface-hidden z-20 overflow-hidden max-w-full"
                        style={{
                          marginLeft: index % 2 === 0 ? "0.5rem" : "0",
                          marginRight: index % 2 !== 0 ? "0.5rem" : "0",
                        }}
                        initial={{ opacity: 0, rotateY: 180 }}
                        animate={{ opacity: 1, rotateY: 0 }}
                        exit={{ opacity: 0, rotateY: 180 }}
                        transition={{ duration: 0.5 }}
                      >
                        <ul className="space-y-2">
                          {education.highlights.map(
                            (highlight, highlightIndex) => (
                              <li
                                key={highlightIndex}
                                className="text-gray-800 flex  items-center "
                              >
                                <svg
                                  className="w-5 h-5 mr-2 text-purple-500"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                                {highlight}
                              </li>
                            )
                          )}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            </AnimatePresence>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
