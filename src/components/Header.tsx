import React from 'react';
import { Menu, X, Video } from 'lucide-react';
import { NavLink } from './NavLink';

export default function Header() {
  const [isOpen, setIsOpen] = React.useState(false);

  const navItems = [
    { href: '#home', label: 'Accueil' },
    { href: '#services', label: 'Services' },
    { href: '#portfolio', label: 'Portfolio' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className="fixed w-full bg-black/80 backdrop-blur-sm z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Video className="h-8 w-8 text-[#3498DB]" />
            <span className="ml-2 text-2xl font-bold text-white">444.Edit</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <NavLink key={item.href} href={item.href}>{item.label}</NavLink>
            ))}
          </div>

          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6 text-white" /> : <Menu className="h-6 w-6 text-white" />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden mt-4 space-y-4">
            {navItems.map((item) => (
              <NavLink key={item.href} href={item.href} mobile>{item.label}</NavLink>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}