import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Calendar, MapPin, Code, Award } from "lucide-react";
import data from "../data/experience.json";

const Experience = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.1 });

  return (
    <motion.div
      className="py-20 relative overflow-hidden"
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 0.8 }}
    >
      {/* Animated bubble background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-br from-purple-900/20 to-pink-900/20"
            style={{
              width: Math.random() * 400 + 100,
              height: Math.random() * 400 + 100,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              filter: "blur(40px)",
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
            }}
            transition={{
              duration: Math.random() * 30 + 15,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ y: -50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            My career milestones and technical achievements
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Timeline control bar */}
          <div className="flex justify-center mb-12">
            <div className="relative w-full max-w-3xl h-2 bg-gray-800 rounded-full overflow-hidden">
              <motion.div
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-purple-500 to-pink-600"
                initial={{ width: "0%" }}
                animate={{
                  width: `${
                    ((activeIndex + 1) / data.experience.length) * 100
                  }%`,
                }}
                transition={{ duration: 0.8 }}
              />
              {data.experience.map((_, index) => (
                <button
                  key={index}
                  className={`absolute top-1/2 transform -translate-y-1/2 w-6 h-6 rounded-full ${
                    index <= activeIndex
                      ? "bg-purple-400 shadow-lg"
                      : "bg-gray-600"
                  } transition-all duration-300`}
                  style={{
                    left: `${(index / (data.experience.length - 1)) * 100}%`,
                  }}
                  onClick={() => setActiveIndex(index)}
                />
              ))}
            </div>
          </div>

          {/* Main content area */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Company selector (left column) */}
            <div className="lg:col-span-1 space-y-4">
              {data.experience.map((exp, index) => (
                <motion.button
                  key={index}
                  className={`w-full text-left p-6 rounded-xl transition-all duration-300 ${
                    index === activeIndex
                      ? "bg-gray-800/50 backdrop-blur-sm border border-purple-500/30 shadow-lg"
                      : "bg-gray-800/20 hover:bg-gray-800/30"
                  }`}
                  onClick={() => setActiveIndex(index)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-14 h-14 rounded-lg ${
                        index === activeIndex
                          ? "bg-purple-500/20"
                          : "bg-gray-700"
                      } flex items-center justify-center transition-all`}
                    >
                      <img
                        src={exp.logo}
                        alt={exp.company}
                        className="w-10 h-10 object-contain"
                      />
                    </div>
                    <div>
                      <h3
                        className={`text-lg font-medium ${
                          index === activeIndex ? "text-white" : "text-gray-400"
                        }`}
                      >
                        {exp.company}
                      </h3>
                      <p
                        className={`text-sm ${
                          index === activeIndex
                            ? "text-purple-300"
                            : "text-gray-500"
                        }`}
                      >
                        {exp.duration.start} - {exp.duration.end}
                      </p>
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>

            {/* Experience details (right columns) */}
            <div className="lg:col-span-2">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 shadow-xl h-full"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-white">
                        {data.experience[activeIndex].position}
                      </h3>
                      <p className="text-xl text-purple-300">
                        {data.experience[activeIndex].company}
                      </p>
                      <div className="flex items-center gap-4 mt-2 text-gray-400">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-2" />
                          <span>
                            {data.experience[activeIndex].duration.start} -{" "}
                            {data.experience[activeIndex].duration.end}
                          </span>
                        </div>
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-2" />
                          <span>{data.experience[activeIndex].location}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Achievements Section */}
                  <div className="mb-8">
                    <h4 className="text-xl font-semibold text-white mb-4 flex items-center">
                      <Award className="w-5 h-5 mr-2 text-purple-400" />
                      Key Achievements
                    </h4>
                    <ul className="space-y-3">
                      {data.experience[activeIndex].highlights.map(
                        (highlight, i) => (
                          <motion.li
                            key={i}
                            className="text-gray-300 flex items-start"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                          >
                            <span className="text-purple-400 mr-3 mt-1">▹</span>
                            <span>{highlight}</span>
                          </motion.li>
                        )
                      )}
                    </ul>
                  </div>

                  {/* Skills Section */}
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-4 flex items-center">
                      <Code className="w-5 h-5 mr-2 text-purple-400" />
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {data.experience[activeIndex].skills.map((skill, i) => (
                        <motion.span
                          key={i}
                          className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-purple-900/40 to-pink-900/40 border border-purple-500/20 text-purple-100 shadow-sm"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.2 + i * 0.05 }}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
