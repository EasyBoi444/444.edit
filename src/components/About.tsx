import React from 'react';
import { Users, Video, Star } from 'lucide-react';

export default function About() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1622737133809-d95047b9e673?auto=format&fit=crop&q=80"
              alt="Portrait professionnel"
              className="rounded-lg shadow-xl"
            />
          </div>
          
          <div>
            <h2 className="text-4xl font-bold mb-6">Passion pour la narration visuelle</h2>
            <p className="text-gray-600 mb-8">
              Avec plus de 8 ans d'expérience dans le montage vidéo, je transforme des images brutes en histoires mémorables. 
              Chaque projet est une nouvelle opportunité de créer quelque chose d'unique qui captive et inspire.
            </p>
            
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-[#3498DB]/10 rounded-full mb-3">
                  <Video className="h-6 w-6 text-[#3498DB]" />
                </div>
                <h3 className="text-2xl font-bold">200+</h3>
                <p className="text-gray-600">Projets réalisés</p>
              </div>
              
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-[#FF6B35]/10 rounded-full mb-3">
                  <Users className="h-6 w-6 text-[#FF6B35]" />
                </div>
                <h3 className="text-2xl font-bold">150+</h3>
                <p className="text-gray-600">Clients satisfaits</p>
              </div>
              
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-[#3498DB]/10 rounded-full mb-3">
                  <Star className="h-6 w-6 text-[#3498DB]" />
                </div>
                <h3 className="text-2xl font-bold">4.9/5</h3>
                <p className="text-gray-600">Note moyenne</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}