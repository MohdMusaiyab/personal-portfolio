import { Menu, X } from "react-feather";
import React, { useState, useRef, useEffect } from "react";
import "../style/Header.css";
import logo from "../assets/logo.png";

const Header = ({ scrollToSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (id) => {
    scrollToSection(id);
    setIsOpen(false);
  };

  return (
    <header className="header-glass sticky text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <img src={logo} className="h-10 w-20"></img>
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        <nav
          ref={menuRef}
          className={`md:relative md:bg-transparent md:flex ${
            isOpen ? "mobile-menu-open" : "mobile-menu-closed"
          } md:block md:space-y-0 md:space-x-4 md:p-0 md:rounded-none`}
        >
          {["about", "education", "skills", "projects", "contact"].map(
            (item) => (
              <button
                key={item}
                onClick={() => handleLinkClick(item)}
                className="mobile-menu-item md:inline hover-effect font-semibold md:text-2xl"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            )
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
