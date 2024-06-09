import React from "react";
import "../style/About.css";
import { motion } from "framer-motion";

const About = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.3,
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      className="bg-white bg-opacity-10 text-white py-10 px-4 sm:px-6 lg:px-8"
      initial="hidden"
      animate="visible"
      variants={sectionVariants}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between">
          <motion.div className="md:w-1/2 mb-6 md:mb-0 text-center md:text-left">
            <motion.h1
              className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500"
              variants={itemVariants}
            >
              Mohd Musaiyab
            </motion.h1>
            <motion.p
              className="text-lg leading-relaxed mb-4 text-[#B3E0FF]"
              variants={itemVariants}
            >
              Hey there! I'm a Backend Developer who turns coffee into scalable,
              secure APIs. While frontend devs debate the perfect shade of blue,
              I'm in the digital engine room, making sure your app doesn't just
              look pretty, but actually works at light speed. 🚀💻
            </motion.p>
            <motion.div className="text-base space-y-2 text-[#F0F4FF]">
              <motion.p className="flex items-center" variants={itemVariants}>
                <span className="text-xl mr-2">🛠️</span>
                <span className="font-semibold text-[#FFD700]">
                  My Cosmic Toolkit:
                </span>
              </motion.p>
              <motion.p className="flex items-center" variants={itemVariants}>
                <span className="text-lg mr-2">⚡</span>
                <span className="font-semibold text-[#7FFFD4]">
                  Node.js & TypeScript:
                </span>
                <span className="bg-gradient-to-r from-blue-500 via-teal-400 to-green-500 text-transparent bg-clip-text font-semibold">
                  Backend engines that scale faster than gossip.
                </span>
              </motion.p>
              <motion.p className="flex items-center" variants={itemVariants}>
                <span className="text-lg mr-2">🔒</span>
                <span className="font-semibold text-[#7FFFD4]">
                  PostgreSQL & MySQL:
                </span>
                <span className="bg-gradient-to-r from-yellow-700 via-yellow-800 to-orange-900 text-transparent bg-clip-text font-semibold">
                  {" "}
                  Data vaults, uncrackable even by alien tech.
                </span>
              </motion.p>
              <motion.p className="flex items-center" variants={itemVariants}>
                <span className="text-lg mr-2">🔮</span>
                <span className="font-semibold text-[#7FFFD4]">
                  Prisma ORM:
                </span>
                <span className="bg-gradient-to-r from-blue-100 via-blue-300 to-blue-500 text-transparent bg-clip-text">
                  Because who has time for raw SQL in the space age?
                </span>
              </motion.p>
              <motion.p className="flex items-center" variants={itemVariants}>
                <span className="text-lg mr-2">🐳</span>
                <span className="font-semibold text-[#7FFFD4]">
                  Docker & Kubernetes:
                </span>{" "}
                <span className="bg-gradient-to-r from-indigo-900 via-indigo-700 to-indigo-500 text-transparent bg-clip-text">
                I launch and manage constellations of services.
                </span>
              </motion.p>
              <motion.p
                className="flex items-center mt-4"
                variants={itemVariants}
              >
                <span className="text-lg mr-2">🌌</span>
                <span className="font-semibold text-[#7FFFD4]">
                  Full-Stack Explorer?
                </span>{" "}
                <span className="bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text">Sure, I can navigate the frontend cosmos when needed. 😉</span>
              </motion.p>
            </motion.div>
          </motion.div>
          <motion.div className="md:w-1/2" variants={imageVariants}>
            <img
              className="rounded-lg shadow-lg mx-auto hover:shadow-white hover:shadow-md transition-shadow duration-300"
              src="https://png.pngtree.com/png-vector/20230831/ourmid/pngtree-realistic-illustration-of-a-floating-astronaut-illustrated-in-cartoon-style-for-png-image_9227109.png"
              alt="Space Explorer Musaiyab"
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
