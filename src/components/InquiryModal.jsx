"use client";

import { useState } from "react";
import { sendEmail } from "./sendEmail"; 


const InquiryModal = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState("");
  const [inquiry, setInquiry] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await sendEmail({
        email,
        inquiry,
      });
      alert("Seu inquérito foi enviado com sucesso!");
      setEmail("");
      setInquiry("");
      onClose();
    } catch (error) {
      alert("Houve um problema ao enviar seu inquérito. Tente novamente mais tarde.");
    }
  };
  

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
      <div className="bg-gray-900 text-gray-300 rounded-lg shadow-lg w-96 p-6 relative">
        {/* Botão de Fechar */}
        <button
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-100"
          onClick={onClose}
        >
          &times;
        </button>
        {/* Formulário */}
        <h2 className="text-xl font-bold mb-4 text-white">Envie seu Inquérito</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm mb-2">
              Seu Email:
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="inquiry" className="block text-sm mb-2">
              Seu Inquérito:
            </label>
            <textarea
              id="inquiry"
              className="w-full p-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
              rows="4"
              value={inquiry}
              onChange={(e) => setInquiry(e.target.value)}
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-purple-500 hover:bg-purple-600 text-white font-semibold rounded-lg"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default InquiryModal;


