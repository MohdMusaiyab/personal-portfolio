import React, { useRef } from "react";
import data from "../data/skills.json";
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

const Skills = () => {
  const ref = useRef(null);
  const controls = useAnimation();

  const isInView = useInView(ref, { 
    amount: 0.4, // 40% of the component must be in view
    once: false, // Animate every time it comes into view
  });

  React.useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  return (
    <section 
      ref={ref} 
      className="py-20"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 text-center"
          variants={fadeInUp}
          initial="hidden"
          animate={controls}
        >
          My Arsenal of Skills
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          animate={controls}
        >
          {data.skills.map((category, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 rounded-lg shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300"
              variants={fadeInUp}
            >
              <div className="relative h-48">
                <img
                  src={category.url}
                  alt={category.name}
                  className="absolute inset-0 w-full h-full object-cover opacity-60 hover:opacity-80 transition-opacity duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                <h3 className="absolute inset-x-0 bottom-0 text-white text-2xl font-semibold p-4 text-shadow">
                  {category.name}
                </h3>
              </div>
              <ul className="p-6 space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.li
                    key={skillIndex}
                    className="flex items-center space-x-3 group"
                    whileHover={{ x: 10, transition: { duration: 0.2 } }}
                  >
                    <svg
                      className="w-5 h-5 text-blue-400 group-hover:text-purple-400 transition-colors duration-300 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                      {skill}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;