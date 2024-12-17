import React from "react";

const SkillsAndAboutMe: React.FC = () => {
  return (
    <div className="bg-gray-900 min-h-screen text-gray-400 px-10 py-12">
     
      <section id="skills" className="mb-16">
        <h2 className="text-2xl text-purple-400 font-bold mb-8">#skills</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="border border-gray-600 rounded-lg p-4">
            <h3 className="text-white font-semibold mb-4">Languages</h3>
            <p>  Python e JavaScript</p>
          </div>
          <div className="border border-gray-600 rounded-lg p-4">
            <h3 className="text-white font-semibold mb-4">Databases</h3>
            <p>SQL, PostgreSQL, MongoDB</p>
          </div>
          <div className="border border-gray-600 rounded-lg p-4">
            <h3 className="text-white font-semibold mb-4">Tools</h3>
            <p>VSCode,Linux, Figma, Git</p>
          </div>
          <div className="border border-gray-600 rounded-lg p-4">
            <h3 className="text-white font-semibold mb-4">Other</h3>
            <p>HTML, CSS, Github</p>
          </div>
          <div className="border border-gray-600 rounded-lg p-4">
            <h3 className="text-white font-semibold mb-4">Frameworks</h3>
            <p>React, Next, React Native, Seleniu,. Web Scraping, Seaborn, Dash, Flask, FastAPI. Taliwind css, Axios</p>
          </div>
        </div>
      </section>

     
      <section id="about-me" className="" >
        <h2 className="text-2xl text-purple-400 font-bold mb-8">#Sobre-nós</h2>

        <div className="flex flex-col lg:flex-row items-center lg:items-start lg:space-x-10">
         
          <div className="max-w-lg space-y-6">
            <p>
            A Morse é uma startup de tecnologia focada em desenvolvimento de soluções digitais para empresas de todos os tamanhos. Nosso foco é entregar produtos e serviços de alta qualidade, com ênfase em inovação, eficiência e usabilidade. Trabalhamos com as melhores tecnologias para garantir que seus projetos atendam às mais altas expectativas.
            </p>
           
            <button className="px-6 py-3 border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white transition font-semibold rounded-md">
              Read more
            </button>
          </div>

   
          <div className="mt-8 lg:mt-0">
            <img
              src="./image.png"
              alt="Profile Placeholder"
              className="rounded-lg"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default SkillsAndAboutMe;
