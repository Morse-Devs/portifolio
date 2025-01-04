"use client";

import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gray-900 text-gray-400">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-8">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-white rounded-full"></div>
          <span className="text-white font-bold text-lg">Morse</span>
        </div>

        <nav className="hidden md:flex space-x-6 text-sm">
          <a href="/" className="text-purple-400 hover:text-purple-500 transition">
            #home
          </a>
          <a href="#works" className="hover:text-purple-400 transition">
            #Projectos
          </a>
          <a href="#about-me" className="hover:text-purple-400 transition">
            #Sobre-nós
          </a>
          <a href="#contacts" className="hover:text-purple-400 transition" id="contacts">
            #Contactos
          </a>
        </nav>

       

        <div className="md:hidden text-gray-300 text-2xl cursor-pointer" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

  
      <nav
        className={`fixed top-0 left-0 w-2/3 h-full bg-gray-900 text-gray-300 flex flex-col items-start justify-start space-y-8 p-6 z-50 transform transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <a
          id="Home"
          href="#home"
          className="text-lg text-purple-400 hover:text-purple-500 transition"
          onClick={toggleMenu}
        >
          #home
        </a>
        <a
          id="Works"
          href="#works"
          className="text-lg hover:text-purple-400 transition"
          onClick={toggleMenu}
        >
          #projects
        </a>
        <a
          href="#about-me"
          className="text-lg hover:text-purple-400 transition"
          onClick={toggleMenu}
        >
          #about-us
        </a>
        <a
          href="#contacts"
          className="text-lg hover:text-purple-400 transition"
          onClick={toggleMenu}
        >
          #contacts
        </a>
        <aside className="w-full md:w-16 bg-gray-800 flex flex-row md:flex-col items-center justify-center py-4 md:py-8 space-x-6 md:space-y-6 md:space-x-0">
          <a
            href="https://github.com/Morse-Devs"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <div className="w-6 h-6 text-gray-300 hover:text-white transition">
              <FaGithub />
            </div>
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <div className="w-6 h-6 text-gray-300 hover:text-white transition">
              <FaLinkedin />
            </div>
          </a>
          <a
            href="mailto:morsef2024@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Gmail"
          >
            <div className="w-6 h-6 text-gray-300 hover:text-white transition">
              <FaEnvelope />
            </div>
          </a>
        </aside>
      </nav>
    </header>
  );
};

export default Navbar;
