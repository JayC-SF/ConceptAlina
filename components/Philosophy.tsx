
import React from 'react';

const Philosophy: React.FC = () => {
  return (
    <section id="about" className="py-32 bg-brand-cream overflow-hidden border-b border-brand-sand/10">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5 relative">
            <div className=" luxury-border p-3">
              <img 
                src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&q=80&w=1200" 
                alt="Atelier Expertise" 
                className="w-full aspect-[4/5] object-cover grayscale brightness-90 hover:grayscale-0 transition-all duration-1000" 
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-brand-sand/20 -z-10"></div>
          </div>
          
          <div className="lg:col-span-7 lg:pl-12">
            <span className="text-brand-gold uppercase tracking-[0.4em] text-[11px] font-black mb-8 block">Maîtrise & Ancrage</span>
            <h2 className="text-5xl md:text-7xl font-serif mb-10 text-brand-espresso leading-[1.1] tracking-tight">
              La coiffure comme <br/><span className="italic text-brand-gold">intention pure.</span>
            </h2>
            <div className="space-y-8 text-brand-text leading-relaxed text-xl font-light max-w-2xl">
              <p>
                Situé au cœur de la <strong>rue Masson</strong>, Concept Alina est un espace de travail dédié à la précision. Notre approche repose sur une compréhension profonde de la matière et de la forme.
              </p>
              <p>
                Nous nous éloignons des standards éphémères pour nous concentrer sur une esthétique durable. Chaque intervention est pensée, chaque coupe est une signature architecturale adaptée à votre identité.
              </p>
            </div>
            <div className="mt-16 gold-line w-full opacity-30"></div>
            <div className="mt-12 flex gap-12">
              <div>
                <p className="text-4xl font-serif text-brand-espresso italic">Technique</p>
                <p className="text-[10px] uppercase tracking-widest text-brand-sand font-bold mt-2">Rigueur & Maîtrise</p>
              </div>
              <div>
                <p className="text-4xl font-serif text-brand-espresso italic">Sobriété</p>
                <p className="text-[10px] uppercase tracking-widest text-brand-sand font-bold mt-2">Design Épuré</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
