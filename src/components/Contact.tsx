import React from 'react';
import { ContactForm } from './ContactForm';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-center">Commençons à créer ensemble</h2>
          <p className="text-gray-600 mb-8 text-center">
            Vous avez un projet en tête ? Contactez-moi pour en discuter et transformer votre vision en réalité.
          </p>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}