import React, { useState, useEffect } from "react";
import skillsData from "../data/skills.json";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "../style/Skills.css"; // Import external CSS file

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const handleCategoryClick = (category) => {
    setActiveCategory(category === activeCategory ? null : category);
  };

  const cardVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const starVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2,
      },
    },
  };

  const starItemVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <div className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl font-extrabold text-white sm:text-4xl mb-12 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            My Skills
          </span>
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={starVariants}
        >
          {skillsData.skills.map((category, index) => (
            <motion.div
              key={index}
              className="skill-card rounded-lg shadow-lg p-6 relative cursor-pointer"
              onClick={() => handleCategoryClick(category)}
              variants={cardVariants}
            >
              <img
                src={category.url}
                alt={category.name}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold text-white mb-2">
                {category.name}
              </h3>
              {activeCategory === category && (
                <div className="absolute inset-0 bg-black bg-opacity-75 rounded-lg p-6 flex flex-col items-center justify-center">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="text-white flex items-center mb-2"
                    >
                      <span className="mr-2">{skill.name}:</span>
                      <div className="flex">
                        {Array.from({ length: skill.rating }, (_, index) => (
                          <motion.span
                            key={index}
                            className="text-yellow-400 text-xl mr-1 hover:text-yellow-500 transition-colors duration-300"
                            whileHover={{ scale: 1.2 }}
                          >
                            &#9733;
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
