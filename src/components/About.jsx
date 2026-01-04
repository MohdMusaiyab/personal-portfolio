import { motion } from "framer-motion";
import Resume from "./Resume";
import ImageSlider from "./Image";

const About = () => {
  const colors = {
    primary: "#8B5CF6",
    secondary: "#06B6D4",
    text: "#E0E7FF",
  };

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
      className="text-white py-5 px-4 sm:px-6 lg:px-8"
      initial="hidden"
      animate="visible"
      variants={sectionVariants}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-12">
          <motion.div className="md:w-1/2 mb-6 md:mb-0">
            <motion.h1
              className="text-4xl md:text-5xl font-bold mb-6"
              style={{ color: colors.primary }}
              variants={itemVariants}
            >
              Mohd Musaiyab
            </motion.h1>

            <motion.p
              className="text-lg leading-relaxed mb-6"
              style={{ color: colors.text }}
              variants={itemVariants}
            >
              Hey there! I'm a Full Stack Developer who turns coffee into
              scalable, secure APIs. While frontend devs debate the perfect
              shade of blue, I'm in the digital engine room, making sure your
              app doesn't just look pretty, but actually works at light speed.
              🚀💻
            </motion.p>

            <motion.div className="space-y-4" style={{ color: colors.text }}>
              <motion.div className="block" variants={itemVariants}>
                <div className="flex items-start mb-2">
                  <span
                    className="text-xl mr-3 mt-1"
                    style={{ color: colors.primary }}
                  >
                    🛠️
                  </span>
                  <h3
                    className="font-semibold text-lg"
                    style={{ color: colors.secondary }}
                  >
                    My Cosmic Toolkit
                  </h3>
                </div>
                <ul className="space-y-3 ml-0">
                  <motion.li
                    className="flex items-start"
                    variants={itemVariants}
                  >
                    <span
                      className="mr-2 mt-1"
                      style={{ color: colors.secondary }}
                    >
                      ⚡
                    </span>
                    <span>
                      <strong style={{ color: colors.secondary }}>
                        Node.js & TypeScript:
                      </strong>{" "}
                      Backend engines that scale faster than gossip.
                    </span>
                  </motion.li>
                  <motion.li
                    className="flex items-start"
                    variants={itemVariants}
                  >
                    <span
                      className="mr-2 mt-1"
                      style={{ color: colors.secondary }}
                    >
                      🔒
                    </span>
                    <span>
                      <strong style={{ color: colors.secondary }}>
                        PostgreSQL & MySQL:
                      </strong>{" "}
                      Data vaults, uncrackable even by alien tech.
                    </span>
                  </motion.li>
                  <motion.li
                    className="flex items-start"
                    variants={itemVariants}
                  >
                    <span
                      className="mr-2 mt-1"
                      style={{ color: colors.secondary }}
                    >
                      🔮
                    </span>
                    <span>
                      <strong style={{ color: colors.secondary }}>
                        Prisma ORM:
                      </strong>{" "}
                      Because who has time for raw SQL in the space age?
                    </span>
                  </motion.li>
                  <motion.li
                    className="flex items-start"
                    variants={itemVariants}
                  >
                    <span
                      className="mr-2 mt-1"
                      style={{ color: colors.secondary }}
                    >
                      🐳
                    </span>
                    <span>
                      <strong style={{ color: colors.secondary }}>
                        Docker & Kubernetes:
                      </strong>{" "}
                      I launch and manage constellations of services.
                    </span>
                  </motion.li>
                  <motion.li
                    className="flex items-start"
                    variants={itemVariants}
                  >
                    <span
                      className="mr-2 mt-1"
                      style={{ color: colors.secondary }}
                    >
                      🌌
                    </span>
                    <span>
                      <strong style={{ color: colors.secondary }}>
                        Full-Stack Explorer:
                      </strong>{" "}
                      Sure, I can navigate the frontend cosmos when needed.
                    </span>
                  </motion.li>
                </ul>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            className="md:w-1/2 flex flex-col items-center"
            variants={imageVariants}
          >
            <ImageSlider />

            <Resume />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
