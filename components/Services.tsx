
import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-32 bg-brand-paper">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-24">
          <span className="text-brand-gold uppercase tracking-[0.4em] text-[11px] font-black mb-6 block">Tarifs & Services</span>
          <h2 className="text-5xl md:text-6xl font-serif text-brand-espresso italic tracking-tight">La Carte de l'Atelier</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
          {SERVICES.map((service) => (
            <div key={service.id} className="group flex flex-col justify-between py-8 border-b border-brand-sand/30 hover:border-brand-gold transition-colors duration-500">
              <div className="flex justify-between items-end mb-4">
                <h3 className="text-2xl font-serif text-brand-espresso group-hover:text-brand-gold transition-colors">{service.name}</h3>
                <div className="flex-grow mx-6 border-b border-brand-sand/20 border-dotted mb-2"></div>
                <span className="text-brand-espresso font-medium text-lg">{service.price}</span>
              </div>
              <p className="text-brand-text/70 text-sm leading-relaxed max-w-lg font-light">
                {service.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-24 text-center">
          <p className="text-brand-sand uppercase tracking-[0.3em] text-[10px] font-bold mb-8">Partenaires officiels</p>
          <div className="flex flex-wrap justify-center gap-12 opacity-40 grayscale">
            <span className="text-xl font-serif tracking-widest uppercase">Kérastase</span>
            <span className="text-xl font-serif tracking-widest uppercase">L'Oréal Professionnel</span>
            <span className="text-xl font-serif tracking-widest uppercase">Redken</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
