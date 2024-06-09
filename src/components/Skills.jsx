import React from 'react';
import data from '../data/skills.json';
import { motion } from 'framer-motion';

const Skills = () => {
  const { skills } = data;

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="text-white py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h1 
          className="text-4xl md:text-5xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500"
          initial="hidden"
          animate="visible"
          variants={titleVariants}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          Skills
        </motion.h1>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
        >
          {Object.keys(skills).map((category, index) => (
            <motion.div
              key={index}
              className="p-6 rounded-lg shadow-lg border-2 border-zinc-50 ring-2 ring-white ring-opacity-60 transition-all duration-300 hover:shadow-white hover:shadow-md hover:scale-105 hover:bg-white hover:bg-opacity-10"
              variants={sectionVariants}
              transition={{
                type: "spring",
                stiffness: 50,
                damping: 10
              }}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              <h3 className="text-xl font-semibold mb-4 capitalize">
                {category.replace(/([A-Z])/g, ' $1')}
              </h3>
              <ul className="list-disc list-inside">
                {skills[category].map((skill, skillIndex) => (
                  <motion.li
                    key={skillIndex}
                    className="mb-2"
                    whileHover={{ scale: 1.05, x: 10, originX: 0 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;