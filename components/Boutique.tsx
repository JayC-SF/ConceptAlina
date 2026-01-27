
import React, { useRef, useState, useEffect, useCallback } from 'react';
import { PRODUCTS } from '../constants';

const Boutique: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const isPausedRef = useRef(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const scrollTimeoutRef = useRef<number | null>(null);

  const scroll = useCallback((direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = container.querySelector('.product-card')?.clientWidth || 300;
      const gap = 32; 
      const scrollAmount = (cardWidth + gap) * (window.innerWidth < 768 ? 1 : 1.2);
      
      container.style.scrollBehavior = 'smooth';
      
      if (direction === 'right') {
        const isAtEnd = container.scrollLeft + container.clientWidth >= container.scrollWidth - 10;
        if (isAtEnd) {
          container.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
      } else {
        container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      }

      // Reset scroll behavior back to auto after transition
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
      scrollTimeoutRef.current = window.setTimeout(() => {
        if (container) container.style.scrollBehavior = 'auto';
      }, 700);
    }
  }, []);

  useEffect(() => {
    // Periodic Auto-Scroll
    const intervalId = setInterval(() => {
      if (!isPausedRef.current) {
        scroll('right');
      }
    }, 5000);

    return () => {
      clearInterval(intervalId);
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    };
  }, [scroll]);

  const handleMouseEnter = () => {
    setIsHovered(true);
    isPausedRef.current = true;
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    isPausedRef.current = false;
  };

  return (
    <section id="boutique" className="py-32 bg-brand-cream overflow-hidden border-t border-brand-sand/10">
      <div className="container mx-auto px-6 mb-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
          <div className="max-w-2xl">
            <span className="text-brand-gold uppercase tracking-[0.4em] text-[11px] font-black mb-6 block">L'Apothicairerie</span>
            <h2 className="text-5xl md:text-7xl font-serif text-brand-espresso italic tracking-tight mb-8">Soin à domicile.</h2>
            <p className="text-brand-text font-light text-xl leading-relaxed">
              Une curation rigoureuse des meilleurs protocoles capillaires mondiaux. Un défilement fluide de nos références préférées.
            </p>
          </div>
          
          <div className="flex gap-4">
            <button 
              onClick={() => scroll('left')}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="w-16 h-16 border border-brand-espresso/10 rounded-full flex items-center justify-center transition-all duration-500 hover:bg-brand-gold hover:border-brand-gold hover:text-white group"
              aria-label="Précédent"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="group-hover:-translate-x-1 transition-transform">
                <path d="M19 12H5M5 12L12 19M5 12L12 5" />
              </svg>
            </button>
            <button 
              onClick={() => scroll('right')}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="w-16 h-16 border border-brand-espresso/10 rounded-full flex items-center justify-center transition-all duration-500 hover:bg-brand-gold hover:border-brand-gold hover:text-white group"
              aria-label="Suivant"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="group-hover:translate-x-1 transition-transform">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div 
        className="relative group cursor-grab active:cursor-grabbing"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleMouseEnter}
        onTouchEnd={handleMouseLeave}
      >
        <div 
          ref={scrollContainerRef}
          className="flex gap-8 overflow-x-auto scrollbar-hide px-6 snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {PRODUCTS.map((product) => (
            <div 
              key={product.id} 
              className="product-card flex-shrink-0 w-[75vw] md:w-[35vw] lg:w-[22vw] snap-start"
            >
              <div className="aspect-[4/5] overflow-hidden luxury-border bg-brand-paper relative mb-10 group/item">
                <img 
                  src={product.imageUrl} 
                  alt={product.name} 
                  className="w-full h-full object-cover group-hover/item:scale-110 transition-transform duration-[2000ms] grayscale group-hover/item:grayscale-0" 
                />
                <div className="absolute inset-0 bg-brand-espresso/0 group-hover/item:bg-brand-espresso/5 transition-colors duration-700"></div>
                
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/item:opacity-100 transition-opacity duration-700">
                  <div className="bg-brand-cream/90 backdrop-blur-sm p-6 luxury-border mx-8 transform translate-y-4 group-hover/item:translate-y-0 transition-transform duration-700">
                    <p className="text-[10px] font-black uppercase tracking-widest text-brand-gold mb-2">{product.brand}</p>
                    <p className="text-xs font-light text-brand-espresso leading-relaxed">{product.description}</p>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-between items-start mb-2 px-2">
                <p className="text-brand-gold text-[10px] uppercase tracking-[0.3em] font-black">{product.brand}</p>
                <span className="text-brand-espresso font-serif italic text-sm">{product.price}</span>
              </div>
              <h3 className="text-xl font-serif text-brand-espresso mb-4 leading-snug group-hover:text-brand-gold transition-colors px-2">
                {product.name}
              </h3>
              <div className="h-[1px] w-0 bg-brand-gold transition-all duration-700 group-hover:w-full mx-2"></div>
            </div>
          ))}
        </div>

        <style>{`
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
        `}</style>
      </div>

      <div className="container mx-auto px-6 mt-20">
        <div className="flex flex-col md:flex-row items-center justify-between text-[9px] font-black uppercase tracking-[0.5em] text-brand-sand/60 gap-8">
          <div className="flex items-center gap-4">
            <span className="w-12 h-[1px] bg-brand-sand/30"></span>
            <span>Collection Permanente</span>
          </div>
          <div className="flex items-center gap-12">
            <span>Kérastase</span>
            <span>L'Oréal Professionnel</span>
            <span>Redken</span>
          </div>
          <div className="flex items-center gap-4">
            <span>Exploration Linéaire</span>
            <span className="w-12 h-[1px] bg-brand-sand/30"></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Boutique;
