import React from "react";
import { FaArrowRightFromBracket } from "react-icons/fa6";

const Resume = () => {
  return (
    <div className="flex items-center justify-center py-5 group">
      <a
        href="https://drive.google.com/file/d/16zyIAOfBPQVRs6UB4nU6NWavSfLMC6Rp/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400 hover:text-blue-600 hover:underline flex items-center"
      >
        My Resume
        <span className="ml-2 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100 text-blue-300">
          <FaArrowRightFromBracket />
        </span>
      </a>
    </div>
  );
};

export default Resume;
