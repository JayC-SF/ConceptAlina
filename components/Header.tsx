
import React, { useState, useEffect } from 'react';
import { SALON_INFO } from '../constants';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${isScrolled ? 'bg-brand-cream/95 backdrop-blur-md border-b border-brand-sand/30 py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex flex-col">
          <span className={`text-xl md:text-2xl font-serif font-bold tracking-[0.2em] transition-colors duration-500 ${isScrolled ? 'text-brand-espresso' : 'text-white'}`}>CONCEPT ALINA</span>
          <span className={`text-[8px] tracking-[0.4em] uppercase font-bold transition-colors duration-500 ${isScrolled ? 'text-brand-gold' : 'text-brand-sand/80'}`}>Montréal | Rue Masson</span>
        </div>
        
        <nav className="hidden lg:flex space-x-12 text-[10px] font-medium uppercase tracking-[0.3em]">
          <a href="#about" className={`transition-colors ${isScrolled ? 'text-brand-espresso hover:text-brand-gold' : 'text-white hover:text-brand-sand'}`}>L'Atelier</a>
          <a href="#gallery" className={`transition-colors ${isScrolled ? 'text-brand-espresso hover:text-brand-gold' : 'text-white hover:text-brand-sand'}`}>Inspiration</a>
          <a href="#services" className={`transition-colors ${isScrolled ? 'text-brand-espresso hover:text-brand-gold' : 'text-white hover:text-brand-sand'}`}>Services</a>
          <a href="#boutique" className={`transition-colors ${isScrolled ? 'text-brand-espresso hover:text-brand-gold' : 'text-white hover:text-brand-sand'}`}>Boutique</a>
          <a href="#contact" className={`transition-colors ${isScrolled ? 'text-brand-espresso hover:text-brand-gold' : 'text-white hover:text-brand-sand'}`}>Contact</a>
        </nav>

        <a 
          href={`tel:${SALON_INFO.phone.replace(/-/g, '')}`}
          className={`px-10 py-3 text-[10px] font-black uppercase tracking-widest transition-all duration-500 rounded-none border inline-block text-center ${isScrolled ? 'bg-brand-espresso text-brand-cream border-brand-espresso hover:bg-brand-gold hover:border-brand-gold' : 'bg-white/10 text-white border-white/30 hover:bg-white hover:text-brand-espresso'}`}
        >
          Appeler
        </a>
      </div>
    </header>
  );
};

export default Header;
