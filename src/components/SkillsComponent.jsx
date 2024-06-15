import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SkillsComponent = ({ skills }) => {
  const [selectedSkill, setSelectedSkill] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        when: "beforeChildren",
        staggerChildren: 0.3
      }
    }
  };

  const categoryVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

  const skillVariants = {
    hidden: { scale: 0 },
    visible: { scale: 1, transition: { type: "spring", stiffness: 200 } }
  };

  return (
    <div className="min-h-screen p-8">
      <motion.div 
        className="max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <h1 className="text-4xl font-bold text-center text-white mb-12">My Skills</h1>
        
        {skills.map((category, categoryIndex) => (
          <motion.div 
            key={category.category}
            className="mb-16"
            variants={categoryVariants}
          >
            <h2 className="text-2xl font-semibold text-white mb-6 flex items-center">
              <img src={category.categoryImageUrl} alt="" className="w-8 h-8 mr-3" />
              {category.category}
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {category.skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className="relative cursor-pointer group"
                  variants={skillVariants}
                  whileHover={{ scale: 1.05 }}
                  onClick={() => setSelectedSkill(skill)}
                >
                  <div 
                    className="h-32 rounded-lg flex items-center justify-center p-4 transition-transform transform group-hover:-translate-y-2 group-hover:shadow-lg"
                    style={{ background: skill.color }}
                  >
                    <img src={skill.image} alt={skill.name} className="w-16 h-16" />
                  </div>
                  <div className="absolute inset-x-0 bottom-0 bg-black bg-opacity-75 text-white py-2 px-3 rounded-b-lg">
                    <p className="font-medium text-center">{skill.name}</p>
                  </div>
                  <div className="absolute top-2 right-2 bg-white text-black rounded-full w-8 h-8 flex items-center justify-center font-bold">
                    {skill.rating}%
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>

      <AnimatePresence>
        {selectedSkill && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50"
            onClick={() => setSelectedSkill(null)}
          >
            <motion.div
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              className="bg-white rounded-lg p-6 max-w-md w-full"
              onClick={e => e.stopPropagation()}
            >
              <div className="flex items-center mb-4">
                <img src={selectedSkill.image} alt={selectedSkill.name} className="w-16 h-16 mr-4" />
                <h3 className="text-2xl font-bold">{selectedSkill.name}</h3>
              </div>
              <div className="mb-4 bg-gray-200 rounded-full">
                <motion.div
                  className="h-4 rounded-full"
                  style={{ background: selectedSkill.color }}
                  initial={{ width: 0 }}
                  animate={{ width: `${selectedSkill.rating}%` }}
                  transition={{ duration: 0.5 }}
                />
              </div>
              <p className="text-gray-600 mb-4">Proficiency: {selectedSkill.rating}%</p>
              <button 
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                onClick={() => setSelectedSkill(null)}
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SkillsComponent;