import React, { useState, useEffect, useRef } from "react";
import { Menu, X } from "react-feather";
import "../style/Header.css";

const Header = ({ scrollToSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const handleLinkClick = (id) => {
    scrollToSection(id);
    setIsOpen(false);
  };

  return (
    <header className="text-white p-4 relative">
      <div className="container mx-auto flex justify-between items-center">
        {/* {This is where i can chnage the Header } */}
        <div className="text-2xl font-bold"></div>
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        <nav
          ref={menuRef}
          className={`absolute md:relative right-0 top-12 md:top-0 gap-4  md:bg-transparent md:flex ${
            isOpen ? "block" : "hidden" 
          } md:block space-y-2 md:space-y-0 md:space-x-4 p-4 md:p-0 rounded md:rounded-none`}
        >
          <button
            onClick={() => handleLinkClick("about")}
            className="block md:inline hover-effect"
          >
            About
          </button>
          <button
            onClick={() => handleLinkClick("skills")}
            className="block md:inline hover-effect "
          >
            Skills
          </button>
          <button
            onClick={() => handleLinkClick("projects")}
            className="block md:inline hover-effect"
          >
            Projects
          </button>
          <button
            onClick={() => handleLinkClick("contact")}
            className="block md:inline hover-effect"
          >
            Contact
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
