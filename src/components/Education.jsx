import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import data from "../data/education.json"
// --- 1. YOUR ORIGINAL DAT
//A INTEGRATION ---
const educationData = data;
// ------------------------------------------

// Component to draw the SVG lines
const ConnectionLine = ({ totalItems, index, isSelected, radiusFraction, centerX, centerY, inView }) => {
    // Calculate angle and endpoint coordinates for this specific node
    const angle = (index * 360) / totalItems;
    
    // The total radius in the viewbox is determined by the radiusFraction (e.g., 0.45 for 45% of the container width)
    const x = Math.cos((angle - 90) * (Math.PI / 180)) * radiusFraction * centerX;
    const y = Math.sin((angle - 90) * (Math.PI / 180)) * radiusFraction * centerY;

    // Line offset logic (to start/end at the edge of the circles)
    // 1. Center Hub size (e.g., 24px wide circle in a max 400px container -> Hub Radius is 12px)
    // We'll use a fixed pixel size for the offset for consistency, which is generally better for SVG strokes.
    const HUB_OFFSET = 18; // approx half of w-24 h-24 center hub + padding
    const NODE_OFFSET = 25; // approx half of w-16/w-20 node + padding
    
    // Determine the distance of the orbiting node from the center
    const distance = Math.sqrt(x * x + y * y);

    // Calculate the start and end points
    const startPointX = centerX + (x * HUB_OFFSET / distance);
    const startPointY = centerY + (y * HUB_OFFSET / distance);

    const endPointX = centerX + (x * (distance - NODE_OFFSET) / distance);
    const endPointY = centerY + (y * (distance - NODE_OFFSET) / distance);

    // SVG path string
    const path = `M ${startPointX} ${startPointY} L ${endPointX} ${endPointY}`;
    
    // Line variants for animation
    const lineVariants = {
        hidden: { pathLength: 0, opacity: 0 },
        visible: {
            pathLength: 1,
            opacity: isSelected ? 1 : 0.5,
            transition: {
                pathLength: { type: "spring", duration: 1.5, bounce: 0.2, delay: 0.5 + index * 0.1 },
                opacity: { duration: 0.5, delay: 0.5 },
            }
        }
    };

    return (
        <motion.path
            d={path}
            stroke={isSelected ? "url(#line-gradient-selected)" : "url(#line-gradient)"}
            strokeWidth={isSelected ? 3 : 1.5}
            strokeDasharray={isSelected ? "none" : "4 4"}
            fill="none"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={lineVariants}
        />
    );
};


const Education = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  
  // Use useInView for the main section visibility
  const { ref, inView } = useInView({
      triggerOnce: true,
      threshold: 0.1,
  });

  // --- Responsive SVG Calculation ---
  // We use a fixed VIEW_BOX_SIZE for calculation consistency, 
  // which then gets scaled by the actual size of the container via the SVG width/height.
  const VIEW_BOX_SIZE = 400; // Conceptual size for line calculations
  const CENTER_X = VIEW_BOX_SIZE / 2;
  const CENTER_Y = VIEW_BOX_SIZE / 2;

  // The fraction of the container width the nodes should orbit at (e.g., 45% of the half-width)
  const radiusFraction = 0.8; // Nodes orbit at 80% of the half-size of the container
  // ----------------------------------

  return (
    <div ref={ref} className="py-20 px-4 flex items-center justify-center relative">
      
      {/* --- Animated Background Orbs --- */}
      {/* ... (Background Orbs unchanged) ... */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.5, 0.3, 0.5],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl"
      />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-black mb-4">
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-purple-400 bg-clip-text text-transparent">
              Education Constellation
            </span>
          </h2>
          <p className="text-gray-400 text-lg">Select a node to explore my milestones</p>
        </motion.div>

        {/* --- Main Content Area (Responsive Flex Container) --- */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">
          
          {/* 2. Interactive Selector - Left Side (Now responsive) */}
          <div 
            className="relative flex-shrink-0 w-full max-w-xs sm:max-w-sm lg:max-w-none lg:w-[400px] aspect-square"
          >
            <div className="relative w-full h-full flex items-center justify-center">

              {/* === SVG Container for Lines (Fills Parent) === */}
              <svg
                className="absolute inset-0 pointer-events-none"
                width="100%"
                height="100%"
                viewBox={`0 0 ${VIEW_BOX_SIZE} ${VIEW_BOX_SIZE}`}
              >
                {/* Gradient Definitions */}
                <defs>
                    <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" style={{stopColor:"rgb(109,40,217)", stopOpacity:0.5}} />
                        <stop offset="100%" style={{stopColor:"rgb(236,72,153)", stopOpacity:0.5}} />
                    </linearGradient>
                    <linearGradient id="line-gradient-selected" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" style={{stopColor:"rgb(168,85,247)", stopOpacity:1}} />
                        <stop offset="100%" style={{stopColor:"rgb(236,72,153)", stopOpacity:1}} />
                    </linearGradient>
                </defs>
                
                {/* Draw all connection lines */}
                {educationData.education.map((edu, index) => (
                    <ConnectionLine 
                        key={index}
                        totalItems={educationData.education.length}
                        index={index}
                        isSelected={selectedIndex === index}
                        radiusFraction={radiusFraction}
                        centerX={CENTER_X}
                        centerY={CENTER_Y}
                        inView={inView}
                    />
                ))}
              </svg>
              {/* =================================== */}
              
              {/* Center Hub */}
              <motion.div
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : {}}
                className="absolute w-24 h-24 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-2xl z-20"
              >
                <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
                </svg>
              </motion.div>

              {/* Orbiting Education Items */}
              {educationData.education.map((edu, index) => {
                const totalItems = educationData.education.length;
                const angle = (index * 360) / totalItems;
                
                // Calculate the pixel position based on the radius fraction
                const nodeRadius = CENTER_X * radiusFraction;
                const x = Math.cos((angle - 90) * (Math.PI / 180)) * nodeRadius;
                const y = Math.sin((angle - 90) * (Math.PI / 180)) * nodeRadius;

                // We move the elements using the calculated X, Y pixels
                // and use the Tailwind utility classes for their size
                return (
                  <motion.div
                    key={index}
                    className="absolute"
                    style={{
                      // Centering the elements correctly
                      left: '50%',
                      top: '50%',
                      transform: 'translate(-50%, -50%)', 
                    }}
                    initial={{ x: 0, y: 0, opacity: 0 }}
                    animate={inView ? {
                      x: x,
                      y: y,
                      opacity: 1,
                    } : {}}
                    transition={{
                      type: "spring",
                      stiffness: 100,
                      damping: 15,
                      delay: index * 0.2,
                    }}
                  >
                    <motion.button
                      onClick={() => setSelectedIndex(index)}
                      className="relative flex justify-center items-center focus:outline-none"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {/* Node (Container for Logo) */}
                      <motion.div
                        // Responsive Tailwind classes for node size
                        className={`w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-full border-4 overflow-hidden cursor-pointer ${
                          selectedIndex === index
                            ? 'border-purple-500 shadow-lg shadow-purple-500/50'
                            : 'border-gray-600 hover:border-pink-500'
                        } transition-all duration-300 bg-gray-900/50`}
                        animate={{
                          scale: selectedIndex === index ? 1.2 : 1,
                        }}
                      >
                        <img
                          src={edu.logo}
                          alt={edu.institution}
                          className="w-full h-full object-cover"
                        />
                      </motion.div>

                      {/* Year Badge */}
                      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                        <span className="text-xs font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                          {edu.startYear}-{edu.endYear}
                        </span>
                      </div>
                    </motion.button>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* 3. Details Panel - Right Side */}
          <div className="w-full lg:flex-1 max-w-2xl mt-16 lg:mt-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                {/* Main Card */}
                <div 
                    className="relative p-6 sm:p-8 rounded-3xl border border-gray-700 backdrop-blur-sm shadow-xl overflow-hidden"
                    style={{ background: 'rgba(0, 0, 0, 0.2)' }} // Subtle transparent background
                >
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-transparent to-pink-900/10" />
                  
                  {/* Content */}
                  <div className="relative z-10">
                    
                    {/* Header */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex-1">
                        <motion.h3
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-2xl sm:text-3xl font-bold mb-2"
                        >
                          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                            {educationData.education[selectedIndex].institution}
                          </span>
                        </motion.h3>
                        <motion.p
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.1 }}
                          className="text-lg sm:text-xl text-gray-300"
                        >
                          {educationData.education[selectedIndex].degree}
                        </motion.p>
                      </div>
                    </div>

                    {/* Period Badge */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.2 }}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-800/50 border border-purple-500/30 mb-8"
                    >
                      <svg className="w-4 h-4 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm font-semibold text-gray-300">
                        {educationData.education[selectedIndex].startYear} - {educationData.education[selectedIndex].endYear}
                      </span>
                    </motion.div>

                    {/* Highlights */}
                    <div>
                      <motion.h4
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="text-lg font-semibold text-purple-400 mb-4 flex items-center gap-2"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        Key Achievements
                      </motion.h4>
                      <div className="space-y-3">
                        {educationData.education[selectedIndex].highlights.map((highlight, hIndex) => (
                          <motion.div
                            key={hIndex}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 + hIndex * 0.1 }}
                            className="flex items-start gap-3 group"
                          >
                            <div className="mt-1.5 flex-shrink-0">
                              <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 group-hover:scale-150 transition-transform" />
                            </div>
                            <p className="text-gray-300 leading-relaxed group-hover:text-white transition-colors">
                              {highlight}
                            </p>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;