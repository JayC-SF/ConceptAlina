
import React from 'react';
import { SALON_INFO } from '../constants';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-32 bg-brand-cream">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-24 items-start">
          <div>
            <h2 className="text-6xl font-serif mb-16 text-brand-espresso italic tracking-tighter">Contact.</h2>
            
            <div className="space-y-16">
              <div className="flex gap-10">
                <div className="w-px h-24 bg-brand-gold"></div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-sand mb-6">Emplacement</p>
                  <p className="text-3xl font-serif text-brand-espresso leading-snug">
                    {SALON_INFO.address.split(',')[0]}<br/>
                    <span className="text-brand-sand italic">{SALON_INFO.address.split(',').slice(1).join(',')}</span>
                  </p>
                </div>
              </div>
              
              <div className="flex gap-10">
                <div className="w-px h-24 bg-brand-gold"></div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-sand mb-6">Contact</p>
                  <a href={`tel:${SALON_INFO.phone.replace(/-/g, '')}`} className="text-4xl font-serif text-brand-espresso hover:text-brand-gold transition-colors block mb-2">
                    {SALON_INFO.phone}
                  </a>
                  <p className="text-[11px] font-bold text-brand-sand uppercase tracking-widest">Réservation téléphonique uniquement</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-brand-paper p-12 lg:p-20 luxury-border relative">
            <div className="absolute top-0 right-0 w-32 h-1 bg-brand-gold"></div>
            <h3 className="text-2xl font-serif mb-12 text-brand-espresso tracking-tight underline decoration-brand-gold/30 underline-offset-8">Horaires</h3>
            <div className="space-y-6">
              {SALON_INFO.hours.map((h, i) => (
                <div key={i} className="flex justify-between items-center group">
                  <span className="text-brand-sand font-black uppercase tracking-widest text-[10px] group-hover:text-brand-espresso transition-colors">{h.day}</span>
                  <span className={`text-sm ${h.hours === 'Fermé' ? 'italic text-brand-sand' : 'font-medium text-brand-espresso'}`}>{h.hours}</span>
                </div>
              ))}
            </div>
            <div className="mt-16">
              <a 
                href={`tel:${SALON_INFO.phone.replace(/-/g, '')}`}
                className="block w-full text-center py-6 bg-brand-espresso text-brand-cream font-black uppercase tracking-[0.4em] text-[10px] hover:bg-brand-gold transition-all duration-500 luxury-border"
              >
                Appeler pour réserver
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
