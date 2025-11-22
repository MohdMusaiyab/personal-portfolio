import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Calendar, 
  MapPin, 
  ArrowUpRight, 
  Layers 
} from "lucide-react";
import data from "../data/experience.json";

const Experience = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeJob = data.experience[activeIndex];

  return (
    <section className="py-24 w-full relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* --- SECTION HEADER --- */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center" // Centered text
        >
          <h2 className="text-5xl md:text-6xl font-bold tracking-tighter bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent inline-block">
            Experience
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* --- LEFT NAVIGATION (Glass Tabs) --- */}
          <div className="lg:col-span-4 flex flex-col space-y-2">
            {data.experience.map((exp, index) => {
              const isActive = index === activeIndex;
              return (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className="group relative w-full text-left outline-none focus:outline-none"
                >
                  {/* The Sliding Glass Pane (Active State Background) */}
                  {isActive && (
                    <motion.div
                      layoutId="activeGlass"
                      className="absolute inset-0 rounded-xl bg-white/10 backdrop-blur-md border border-white/10 shadow-[0_0_30px_rgba(255,255,255,0.05)]"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}

                  <div className={`relative z-10 p-5 transition-all duration-300 ${isActive ? "translate-x-2" : "hover:translate-x-1"}`}>
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className={`font-bold text-lg transition-colors ${isActive ? "text-white" : "text-white/50 group-hover:text-white/80"}`}>
                          {exp.company}
                        </h3>
                        <p className={`text-xs font-mono mt-1 ${isActive ? "text-purple-300" : "text-white/30"}`}>
                          {exp.duration.start} — {exp.duration.end}
                        </p>
                      </div>
                      
                      {/* Logo/Icon */}
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 grayscale ${isActive ? "grayscale-0 bg-white/10" : "opacity-30"}`}>
                         <img src={exp.logo} alt="logo" className="w-5 h-5 object-contain" />
                      </div>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* --- RIGHT CONTENT (The Hologram) --- */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 20, filter: "blur(10px)" }}
                animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, x: -20, filter: "blur(10px)" }}
                transition={{ duration: 0.4, ease: "circOut" }}
                className="relative"
              >
                {/* Decorative Corner Brackets */}
                <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-purple-500/50" />
                <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-pink-500/50" />

                {/* Main Content Container */}
                <div className="bg-black/20 backdrop-blur-xl border border-white/10 rounded-2xl p-8 md:p-10 relative overflow-hidden group">
                  
                  {/* Subtle Gradient mesh inside the card */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-[80px] pointer-events-none group-hover:bg-purple-500/20 transition-colors duration-500" />

                  {/* Header */}
                  <div className="relative z-10">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
                      <div>
                        <h3 className="text-3xl font-bold text-white">{activeJob.position}</h3>
                        <div className="flex items-center gap-2 text-purple-300 text-sm mt-1">
                          <span className="font-mono">@{activeJob.company}</span>
                          <span className="w-1 h-1 rounded-full bg-white/30" />
                          <span className="text-white/50 flex items-center gap-1">
                            <MapPin size={12} /> {activeJob.location}
                          </span>
                        </div>
                      </div>
                      
                      {/* Date Badge */}
                      <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-white/70">
                        <Calendar size={12} />
                        <span>{activeJob.duration.start} - {activeJob.duration.end}</span>
                      </div>
                    </div>

                    <hr className="border-white/10 mb-8" />

                    {/* Highlights */}
                    <div className="grid grid-cols-1 gap-6 mb-10">
                      {activeJob.highlights.map((point, i) => (
                        <motion.div 
                          key={i}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: i * 0.1 }}
                          className="flex gap-4"
                        >
                          <div className="mt-1 p-1 rounded-md bg-purple-500/20 border border-purple-500/50 h-fit">
                            <ArrowUpRight size={14} className="text-purple-300" />
                          </div>
                          <p className="text-white/80 leading-relaxed text-sm md:text-base">
                            {point}
                          </p>
                        </motion.div>
                      ))}
                    </div>

                    {/* Skills "Circuit" */}
                    <div>
                      <div className="flex items-center gap-2 mb-4 text-xs font-bold uppercase tracking-widest text-white/40">
                        <Layers size={14} />
                        Tech Stack
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {activeJob.skills.map((skill, i) => (
                          <motion.span
                            key={i}
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.3 + (i * 0.05) }}
                            className="px-3 py-1.5 text-xs font-mono rounded bg-white/5 border border-white/10 text-purple-200 hover:bg-purple-500/20 hover:border-purple-500/50 hover:text-white transition-colors cursor-default"
                          >
                            {skill}
                          </motion.span>
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
    </section>
  );
};

export default Experience;