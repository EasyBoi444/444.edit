import React from 'react';
import { Building2, PartyPopper, Share2, CheckCircle2, Calendar } from 'lucide-react';
import { ServiceCard } from './ServiceCard';
import { Button } from './Button';

const services = [
  {
    icon: <Building2 className="h-8 w-8" />,
    title: 'Montage Corporate',
    description: 'Vidéos institutionnelles, présentations produits, formations en ligne',
    features: [
      'Montage professionnel',
      'Color grading',
      'Sound design',
      'Motion design basique'
    ]
  },
  {
    icon: <PartyPopper className="h-8 w-8" />,
    title: 'Montage Événementiel',
    description: 'Mariages, concerts, conférences, événements d\'entreprise',
    features: [
      'Montage multi-caméras',
      'Correction colorimétrique',
      'Mix audio professionnel',
      'Exports multiformats'
    ]
  },
  {
    icon: <Share2 className="h-8 w-8" />,
    title: 'Contenu Réseaux Sociaux',
    description: 'Format court pour Instagram, TikTok, LinkedIn, YouTube',
    features: [
      'Montage dynamique',
      'Sous-titres inclus',
      'Adaptation multi-formats',
      'Optimisation plateforme'
    ]
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Mes Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Des solutions de montage adaptées à vos besoins, avec une attention particulière 
            portée à la qualité et aux détails
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>

        <div className="text-center">
          <Button 
            href="#contact" 
            variant="primary" 
            icon={<Calendar className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" />}
          >
            Prendre rendez-vous
          </Button>
        </div>
      </div>
    </section>
  );
}