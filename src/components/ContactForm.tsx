import React, { FormEvent } from 'react';
import { sendEmail } from '../utils/email';

export function ContactForm() {
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    try {
      await sendEmail({
        to: '444.editor@gmail.com',
        subject: `Nouveau message de ${formData.get('name')}`,
        html: `
          <h2>Nouveau message de contact</h2>
          <p><strong>Nom:</strong> ${formData.get('name')}</p>
          <p><strong>Email:</strong> ${formData.get('email')}</p>
          <p><strong>Type de projet:</strong> ${formData.get('project')}</p>
          <p><strong>Message:</strong></p>
          <p>${formData.get('message')}</p>
        `
      });
      
      alert('Message envoyé avec succès !');
      e.currentTarget.reset();
    } catch (error) {
      alert('Une erreur est survenue lors de l\'envoi du message.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-8">
      <div className="mb-6">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
          Nom complet
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-[#3498DB]"
          required
        />
      </div>
      
      <div className="mb-6">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-[#3498DB]"
          required
        />
      </div>
      
      <div className="mb-6">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="project">
          Type de projet
        </label>
        <select
          id="project"
          name="project"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-[#3498DB]"
          required
        >
          <option value="">Sélectionnez une option</option>
          <option value="corporate">Vidéo Corporate</option>
          <option value="event">Événementiel</option>
          <option value="social">Réseaux Sociaux</option>
          <option value="other">Autre</option>
        </select>
      </div>
      
      <div className="mb-6">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-[#3498DB]"
          required
        ></textarea>
      </div>
      
      <button
        type="submit"
        className="w-full bg-[#3498DB] text-white py-3 rounded-lg hover:bg-[#2980b9] transition"
      >
        Envoyer le message
      </button>
    </form>
  );
}