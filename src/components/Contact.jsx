import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="min-h-screen text-white flex flex-col md:flex-row p-20">
      {/* Left Side */}
      <div className="w-full md:w-1/2 p-8">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-600"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Let's Connect
        </motion.h2>
        <motion.p
          className="text-lg mb-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        >
          Feel free to reach out to me through social media or drop a message
          below.
        </motion.p>
        <motion.div
          className="flex space-x-4 mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
        >
          <a
            href="https://www.linkedin.com/in/mohd-musaiyab/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-500 transition-colors duration-300"
          >
            <FaLinkedin className="w-8 h-8" />
          </a>
          <a
            href="https://twitter.com/mohd_musaiyab"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-500 transition-colors duration-300"
          >
            <FaTwitter className="w-8 h-8" />
          </a>
          <a
            href="https://github.com/MohdMusaiyab"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-500 transition-colors duration-300"
          >
            <FaGithub className="w-8 h-8" />
          </a>
        </motion.div>
        <motion.p
          className="text-2xl opacity-75  text-gradient-to-r from-blue-400 to-purple-500"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
        >
          "Let's Forge Tomorrow's Innovations Together! Embark on a journey of
          collaboration and creativity with me. Together, we can turn ideas into
          reality, code into solutions, and dreams into achievements. Connect
          with me today, and let's craft the future through innovation and
          development. Your vision, my expertise - let's make magic happen!"
        </motion.p>
      
      </div>

      {/* Right Side */}
      <div className="w-full md:w-1/2 p-8">
        <div className="bg-white rounded-lg p-8 shadow-lg">
          <motion.h2
            className="text-3xl font-semibold mb-4 text-center bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 }}
          >
            Drop your Message Here!
          </motion.h2>
          <form className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 block w-full p-1 border-gray-300 rounded-md shadow-sm focus:border-blue-400 focus:ring-blue-400"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-1 focus:border-blue-400 focus:ring-blue-400"
                placeholder="Your Email"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-400 focus:ring-blue-400 p-1"
                placeholder="Your Message"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
