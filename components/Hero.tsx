
import React from 'react';
import { SALON_INFO } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=1920" 
          alt="Atelier Concept Alina" 
          className="w-full h-full object-cover filter brightness-[0.45] contrast-[1.1] scale-105"
        />
        <div className="absolute inset-0 bg-brand-espresso/20"></div>
      </div>
      
      <div className="relative z-10 w-full container mx-auto px-6 pt-20">
        <div className="max-w-5xl">
          <div className="flex items-center gap-6 mb-8 animate-fade-in">
            <div className="w-12 h-[1px] bg-brand-gold"></div>
            <span className="text-brand-sand uppercase tracking-[0.6em] text-[10px] font-black">Montréal | Rue Masson</span>
          </div>
          
          <h1 className="text-7xl md:text-[10rem] font-serif mb-10 text-white leading-[0.85] tracking-tighter">
            CONCEPT <br/>
            <span className="text-brand-gold italic">ALINA.</span>
          </h1>
          
          <p className="text-xl md:text-3xl font-light max-w-4xl mb-14 text-brand-sand/90 leading-relaxed tracking-tight">
            L’esthétique de l’épure. La clarté du style. Une approche architecturale de la beauté.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6">
            <a 
              href={`tel:${SALON_INFO.phone.replace(/-/g, '')}`} 
              className="bg-brand-gold text-brand-cream px-16 py-6 font-black hover:bg-white hover:text-brand-espresso transition-all duration-500 uppercase tracking-[0.3em] text-[10px] text-center"
            >
              Réserver un rendez-vous
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
        <span className="text-[8px] uppercase tracking-[0.5em] text-brand-sand/60 font-bold">Défiler</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-brand-gold to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;
