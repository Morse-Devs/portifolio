"use client";

import React, { useState } from "react";
import InquiryModal from "./InquiryModal";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const HomePage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="bg-gray-900 min-h-screen text-gray-400 flex flex-col md:flex-row">
 
        <aside className="w-full md:w-16 bg-gray-800 flex flex-row md:flex-col max-md:items-center max-md:justify-center py-4 md:py-8 md:pl-5 space-x-6 md:space-y-6 md:space-x-0 max-md:hidden">
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

            

    
      <main className="flex-1 flex flex-col px-6 md:px-10 py-8 space-y-10">
     
        <section className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0">
      
          <div className="max-w-lg space-y-6 text-center md:text-left">
            <h1 className="text-4xl max-md:text-2xl text-purple-400 font-bold">
            Morse  <span className="text-white"> é uma <span className="text-purple-400">startup</span> de  <span className="text-purple-400">tecnologia</span> inovadora,</span>
              <span className="text-white"> focada em oferecer <span className="text-purple-400">soluções</span> de <span className="text-purple-400"> software</span> personalizadas e eficientes</span>
            </h1>
            <p>
              Desenvolvemos para web e mobile.
            </p>
            <button
              onClick={openModal}
              className="px-6 py-3 border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white transition font-semibold rounded-md"
            >
              Contact us!!
            </button>
          </div>

         
          <div className="relative">
            <img
              src="./image.png"
              alt="Placeholder"
              className="rounded-md"
            />
       
            <div className="absolute bottom-4 left-4 bg-gray-800 text-gray-300 border border-purple-400 rounded-md px-4 py-2 flex items-center space-x-2">
              <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
              <span>
                Currently working on <span className="text-white">Portfolio</span>
              </span>
            </div>
          </div>
        </section>
      </main>

     
      <InquiryModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default HomePage;
