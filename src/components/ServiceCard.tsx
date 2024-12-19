import React from 'react';
import { CheckCircle2 } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
}

export function ServiceCard({ icon, title, description, features }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition">
      <div className="text-[#3498DB] mb-6">{icon}</div>
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      <ul className="space-y-3">
        {features.map((feature, i) => (
          <li key={i} className="flex items-center text-gray-600">
            <CheckCircle2 className="h-5 w-5 text-[#3498DB] mr-2" />
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}