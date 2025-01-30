"use client";

import Link from "next/link";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    type: "",
  });

  const handleTypeChange = (type: string) => {
    setFormData({ ...formData, type });
  };

  const handleResetType = () => {
    setFormData({ ...formData, type: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Formulaire envoyé :", formData);
    alert("Votre demande a bien été envoyée !");
  };

  return (
    <div className="contact-container mx-16 my-16 max-w-[calc(100%-120px)] h-screen overflow-y-scroll scrollbar-hidden mb-16">
      {/* ✅ Marge en bas de 60px (mb-16) */}

      {/* Formulaire de contact */}
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md mb-16">
        {/* ✅ Ajout de mb-16 pour espacement */}

        {/* Nom */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Nom</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-gray-300"
            required
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-gray-300"
            required
          />
        </div>

        {/* Type de demande (Boutons exclusifs) */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Type de demande</label>
          <div className="flex space-x-4">
            {!formData.type || formData.type === "architecture" ? (
              <button
                type="button"
                onClick={() => handleTypeChange("architecture")}
                className={`px-4 py-2 border rounded-md transition ${
                  formData.type === "architecture" ? "bg-black text-white" : "bg-white text-black"
                }`}
              >
                Architecture
              </button>
            ) : null}

            {!formData.type || formData.type === "transaction" ? (
              <button
                type="button"
                onClick={() => handleTypeChange("transaction")}
                className={`px-4 py-2 border rounded-md transition ${
                  formData.type === "transaction" ? "bg-black text-white" : "bg-white text-black"
                }`}
              >
                Transaction immobilière
              </button>
            ) : null}
          </div>

          {/* Bouton de retour pour changer d'option */}
          {formData.type && (
            <div className="mt-3">
              <button
                type="button"
                onClick={handleResetType}
                className="text-sm text-gray-600 underline hover:text-gray-800 transition"
              >
                Changer d'option
              </button>
            </div>
          )}
        </div>

        {/* Message */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-gray-300"
            required
          />
        </div>

        {/* Bouton d'envoi */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="px-6 py-3 bg-black text-white rounded-lg font-medium hover:bg-gray-800 transition"
          >
            Envoyer
          </button>
        </div>
      </form>

      {/* Icône menu en haut à droite */}
      <div className="menu-icon fixed top-5 right-5">
        <Link href="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="white"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}
