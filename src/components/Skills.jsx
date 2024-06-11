import React from 'react';
import { motion } from 'framer-motion';
import skillsData from '../data/skills.json';

const Skills = () => {
  return (
    <div className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
          <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            My Skills
          </span>
        </h2>
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillsData.skills.map((skill, index) => (
            <motion.div
              key={index}
              className="group bg-gradient-to-r from-gray-800 to-gray-700 rounded-lg p-6 shadow-lg hover:shadow-xl transition duration-300 ease-in-out"
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-400 to-pink-600 flex items-center justify-center">
                  <img
                    src={skill.url}
                    alt={skill.name}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-medium text-white ml-3">
                  {skill.name}
                </h3>
              </div>
              <ul className="space-y-2">
                {skill.skills.map((skillName, skillIndex) => (
                  <motion.li
                    key={skillIndex}
                    className="text-gray-300 flex items-center"
                    whileHover={{ x: 10, transition: { duration: 0.2 } }}
                  >
                    <svg
                      className="w-5 h-5 mr-2 text-purple-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {skillName}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;