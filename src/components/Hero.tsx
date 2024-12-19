import React from 'react';
import { Play, ArrowRight } from 'lucide-react';
import { Button } from './Button';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        poster="https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&q=80"
      >
        <source src="https://player.vimeo.com/external/459389137.hd.mp4?s=865d2765c46d6a64c7b6e8f5b175828e6c969851&profile_id=175" type="video/mp4" />
      </video>
      
      <div className="absolute inset-0 bg-black/60" />
      
      <div className="relative container mx-auto px-6">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Donnez vie à vos histoires par le montage
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            De la conception à la réalisation, je transforme vos idées en expériences visuelles impactantes.
            Ensemble, créons des contenus qui marquent les esprits et dépassent vos objectifs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button href="#portfolio" variant="primary" icon={<Play className="mr-2 h-5 w-5 group-hover:animate-pulse" />}>
              Showreel
            </Button>
            <Button href="#contact" variant="secondary" icon={<ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />}>
              Contact
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}