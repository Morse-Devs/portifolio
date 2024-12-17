import { FaFacebook, FaTwitter, FaGithub, FaInstagram, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="relative">
        <hr />
    
      <div className="absolute left-1/2 transform -translate-x-1/2 top-0 h-6 w-px bg-gray-700"></div>
      
      <footer className="bg-gray-900 text-white py-6">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
        
          <div className="text-center sm:text-left">
            <h1 className="text-lg font-bold md:text-center">Morse</h1>
            <p className="text-sm">morsef2024@gmail.com</p>
            <p className="text-sm mt-2">Web designer and full-stack developer</p>
          </div>

          
          <div className="mt-4 sm:mt-0 text-center sm:text-right">
            <h2 className="font-bold text-lg ">Media</h2>
            <div className="flex justify-center sm:justify-end gap-4 mt-2">
          
              <a href="" className="text-gray-400 hover:text-white">
                <FaFacebook size={20} />
              </a>
              <a href="mailto:morsef2024@gmail.com" className="text-gray-400 hover:text-white">
                <FaEnvelope  size={20} />
              </a>
              <a href="https://github.com/Morse-Devs" className="text-gray-400 hover:text-white">
                <FaGithub size={20} />
              </a>
              <a href="https://www.instagram.com/morsedevs" className="text-gray-400 hover:text-white">
                <FaInstagram size={20} />
              </a>
            </div>
          </div>
        </div>

     
        <div className="text-center mt-6 text-sm text-gray-500">
          © Copyright 2024. Made by Morse
        </div>
      </footer>
    </div>
  );
}
