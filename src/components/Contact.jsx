import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
import emailjs from "emailjs-com";

const Contact = () => {
  const service_id = import.meta.env.VITE_EMAIL_SERVICE_ID;
  const template_id = import.meta.env.VITE_EMAIL_TEMPLATE_ID;
  const user_id = import.meta.env.VITE_EMAIL_USER_ID;

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(service_id, template_id, e.target, user_id)
      .then((result) => {
        console.log("Successfully Sent");
      })
      .catch((err) => {
        console.log("Error occurred", err);
      });
  };

  return (
    <div className="min-h-screen text-white flex flex-col md:flex-row p-8 md:p-20">
      {/* Left Side */}
      <div className="w-full md:w-1/2 p-4 md:p-8">
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
          className="text-2xl opacity-75 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
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
      <div className="w-full md:w-1/2 p-4 md:p-8">
        <div className="bg-gray-800 rounded-lg p-8 shadow-lg">
          <motion.h2
            className="text-3xl font-semibold mb-4 text-center bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 }}
          >
            Drop your Message Here!
          </motion.h2>
          <form className="space-y-4" onSubmit={sendEmail}>
            <input
              type="text"
              placeholder="Name"
              name="user_name"
              className="w-full p-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="email"
              placeholder="Email"
              name="user_email"
              className="w-full p-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <textarea
              placeholder="Message"
              name="message"
              className="w-full p-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full py-2 rounded bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white font-semibold transition-colors duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
