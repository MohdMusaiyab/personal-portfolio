import React, { useRef } from "react";
import data from "../data/skills.json";
import { motion, useInView, useAnimation } from "framer-motion";
import { FaJsSquare } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
import { TbBrandCpp } from "react-icons/tb";
import { SiExpress } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiSocketdotio } from "react-icons/si";
import { FaDocker } from "react-icons/fa";
import { SiKubernetes } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiMysql } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiPrisma } from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { RiNextjsLine } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa";
import { SiAuthentik } from "react-icons/si";
import { PiContactlessPaymentLight } from "react-icons/pi";
import { SiGoogle } from "react-icons/si";
const apiIcon = () => (
  <img
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7-S4TyBXJ_oeFxmQdcldDAiFH1ZsA1pX_aw&s"
    alt="API Development"
    className="w-5 h-5 text-blue-400 group-hover:text-purple-400 transition-colors duration-300 flex-shrink-0"
  />
);
const cIcon = () => (
  <img
    src="https://www.shutterstock.com/image-vector/copyright-icon-isolated-on-white-260nw-2435930677.jpg"
    alt="API Development"
    className="w-5 h-5 text-blue-400 group-hover:text-purple-400 transition-colors duration-300 flex-shrink-0"
  />
);

// For the Mapping Purpose
const skillIcons = {
  JavaScript: FaJsSquare,
  Typescript: BiLogoTypescript,
  "C++": TbBrandCpp,
  "Express.js": SiExpress,
  "Node.js": FaNodeJs,
  "Web-Sockets": SiSocketdotio,
  Docker: FaDocker,
  Kubernetes: SiKubernetes,
  Redux: SiRedux,
  Firebase: IoLogoFirebase,
  PostgreSQL: BiLogoPostgresql,
  MySQL: SiMysql,
  MongoDB: SiMongodb,
  "Prisma ORM": SiPrisma,
  CSS: FaCss3Alt,
  "Next JS": RiNextjsLine,
  "React.JS": FaReact,
  "Tailwind CSS": RiTailwindCssFill,
  Bootstrap: FaBootstrap,
  "Authentication and Authorization": SiAuthentik,
  "Payment Gateway Integration": PiContactlessPaymentLight,
  "Google Sign-In Integration": SiGoogle,
  "API Development": apiIcon,
  C: cIcon,
};

// Add icons in them
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
    threshold: 0.4, // 40% of the component must be in view
    triggerOnce: false, // Animate every time it comes into view
  });
  React.useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  return (
    <section ref={ref} className="py-20  text-white min-h-screen relative z-10">
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 text-center"
          variants={fadeInUp}
          initial="hidden"
          animate={controls}
        >
          My Skills
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
              className="bg-gray-800 bg-opacity-20 rounded-lg shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300 relative z-10 "
              variants={fadeInUp}
            >
              <div className="relative h-48">
                <img
                  src={category.url}
                  alt={category.name}
                  className="absolute inset-0 w-full h-full object-cover opacity-60 md:opacity-100 hover:opacity-80 transition-opacity duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                <h3 className="absolute inset-x-0 bottom-0 text-white text-2xl font-semibold p-4 text-shadow">
                  {category.name}
                </h3>
              </div>
              <ul className="p-6 space-y-3">
                {category.skills.map((skill, skillIndex) => {
                  const IconComponent = skillIcons[skill.name] || FaJsSquare;
                  return (
                    <motion.li
                      key={skillIndex}
                      className="flex items-center space-x-3 group font-semibold "
                      whileHover={{ x: 10, transition: { duration: 0.2 } }}
                    >
                      <IconComponent />
                      <span className="text-gray-300 group-hover:text-purple-400 transition-colors duration-300">
                        {skill.name}
                      </span>
                    </motion.li>
                  );
                })}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
