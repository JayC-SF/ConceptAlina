
import React from 'react';
import { SALON_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="py-24 bg-brand-paper border-t border-brand-sand/20">
      <div className="container mx-auto px-6 text-center">
        <div className="flex flex-col items-center">
          <h2 className="text-3xl font-serif font-bold tracking-[0.4em] text-brand-espresso mb-4">CONCEPT ALINA</h2>
          <p className="text-brand-gold text-[9px] uppercase tracking-[0.6em] font-black mb-12">Atelier de Coiffure • Rue Masson</p>
          
          <div className="flex gap-12 text-[10px] font-black uppercase tracking-[0.3em] text-brand-sand mb-16">
            <a href="#" className="hover:text-brand-gold transition-colors">Instagram</a>
            <a href="#" className="hover:text-brand-gold transition-colors">Facebook</a>
          </div>
          
          <div className="gold-line w-32 mb-12 opacity-30"></div>
          
          <p className="text-brand-sand/50 text-[9px] tracking-[0.4em] uppercase font-bold">
            &copy; {new Date().getFullYear()} Montréal • {SALON_INFO.address.split(',')[0]}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
