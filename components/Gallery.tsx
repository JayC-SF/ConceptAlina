
import React from 'react';
import { GALLERY } from '../constants';

const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="py-32 bg-brand-espresso text-brand-cream">
      <div className="container mx-auto px-6 mb-20 text-center">
        <span className="text-brand-gold uppercase tracking-[0.5em] text-[10px] font-black mb-4 block">Inspiration</span>
        <h2 className="text-6xl font-serif italic tracking-tight">Le Lookbook</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
        {GALLERY.slice(0, 6).map((img, i) => (
          <div key={i} className={`relative overflow-hidden group ${i % 3 === 1 ? 'md:mt-12' : ''}`}>
            <div className="aspect-[4/5] overflow-hidden">
              <img 
                src={img.url} 
                alt={img.alt} 
                className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000" 
              />
            </div>
            <div className="absolute inset-x-0 bottom-0 p-8 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 bg-gradient-to-t from-brand-espresso to-transparent">
              <p className="text-brand-gold uppercase tracking-[0.3em] text-[10px] font-black mb-2">{img.category}</p>
              <p className="text-2xl font-serif italic">{img.alt}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
