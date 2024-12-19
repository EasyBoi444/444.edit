import React from 'react';
import { Play } from 'lucide-react';

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="relative aspect-video bg-black rounded-lg overflow-hidden group">
            <img
              src="https://youtu.be/3C5d5-mvq_0"
              alt="Aperçu du projet"
              className="w-full h-full object-cover group-hover:opacity-75 transition"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="bg-[#3498DB] text-white p-4 rounded-full opacity-0 group-hover:opacity-100 transition transform group-hover:scale-110">
                <Play className="h-8 w-8" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}