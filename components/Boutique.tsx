
import React, { useRef, useState, useEffect } from 'react';
import { PRODUCTS } from '../constants';

const Boutique: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeProgress, setActiveProgress] = useState(0);

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 10);
      
      const progress = (scrollLeft / (scrollWidth - clientWidth)) * 100;
      setActiveProgress(isNaN(progress) ? 0 : progress);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.clientWidth * 0.8;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="boutique" className="py-32 bg-brand-cream overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-16 mb-24 items-center">
          <div className="lg:col-span-5">
            <span className="text-brand-gold uppercase tracking-[0.4em] text-[11px] font-black mb-6 block">L'Apothicairerie</span>
            <h2 className="text-5xl md:text-7xl font-serif text-brand-espresso italic tracking-tight mb-8">Soin à domicile.</h2>
            <p className="text-brand-text font-light text-xl leading-relaxed max-w-md">
              Une curation rigoureuse des meilleurs protocoles capillaires mondiaux, disponibles à l'atelier.
            </p>
          </div>
          <div className="lg:col-span-7 flex flex-col items-end">
            <div className="flex gap-4 mb-8">
              <button 
                onClick={() => scroll('left')}
                disabled={!canScrollLeft}
                className={`w-14 h-14 border border-brand-espresso/10 flex items-center justify-center transition-all duration-500 ${!canScrollLeft ? 'opacity-20 cursor-not-allowed' : 'hover:bg-brand-gold hover:border-brand-gold hover:text-white'}`}
                aria-label="Produits précédents"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
              <button 
                onClick={() => scroll('right')}
                disabled={!canScrollRight}
                className={`w-14 h-14 border border-brand-espresso/10 flex items-center justify-center transition-all duration-500 ${!canScrollRight ? 'opacity-20 cursor-not-allowed' : 'hover:bg-brand-gold hover:border-brand-gold hover:text-white'}`}
                aria-label="Produits suivants"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </div>
            <div className="w-full max-w-xl aspect-video bg-brand-paper luxury-border relative overflow-hidden group hidden lg:block">
              <img 
                src="https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?auto=format&fit=crop&q=80&w=1200" 
                alt="Boutique Atmosphere" 
                className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000"
              />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                 <span className="bg-brand-espresso text-brand-cream px-8 py-4 text-[10px] font-black uppercase tracking-widest border border-brand-gold/30">L'Art du Soin</span>
              </div>
            </div>
          </div>
        </div>

        <div className="relative -mx-6 px-6">
          <div 
            ref={scrollContainerRef}
            onScroll={checkScroll}
            className="flex gap-8 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-12 cursor-grab active:cursor-grabbing"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {PRODUCTS.map((product, idx) => (
              <div 
                key={product.id} 
                className="flex-shrink-0 w-[80vw] md:w-[40vw] lg:w-[22vw] snap-start group"
              >
                <div className="aspect-[4/5] overflow-hidden luxury-border bg-brand-paper relative mb-8">
                  <img 
                    src={product.imageUrl} 
                    alt={product.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 grayscale group-hover:grayscale-0" 
                  />
                  <div className="absolute inset-0 bg-brand-espresso/0 group-hover:bg-brand-espresso/5 transition-colors duration-500"></div>
                  <div className="absolute top-4 left-4">
                    <span className="text-[10px] font-black text-brand-espresso/30 uppercase tracking-tighter">
                      {(idx + 1).toString().padStart(2, '0')}
                    </span>
                  </div>
                </div>
                <div className="flex justify-between items-start mb-2">
                  <p className="text-brand-gold text-[9px] uppercase tracking-[0.3em] font-black">{product.brand}</p>
                  <span className="text-brand-espresso font-serif italic text-sm">{product.price}</span>
                </div>
                <h3 className="text-lg font-serif text-brand-espresso mb-3 leading-snug group-hover:text-brand-gold transition-colors">{product.name}</h3>
                <p className="text-brand-text/60 text-xs font-light leading-relaxed mb-6 line-clamp-2">
                  {product.description}
                </p>
                <div className="mt-auto h-[1px] w-full bg-brand-sand/20 group-hover:bg-brand-gold transition-all duration-500 origin-left scale-x-50 group-hover:scale-x-100"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Progress bar visual indicator */}
        <div className="w-full h-[1px] bg-brand-sand/10 relative mt-12 max-w-4xl mx-auto">
          <div 
            className="absolute top-0 left-0 h-full bg-brand-gold transition-all duration-300 ease-out"
            style={{ width: `${activeProgress}%` }}
          ></div>
        </div>
        
        <div className="mt-12 flex justify-between items-center text-[9px] font-black uppercase tracking-[0.5em] text-brand-sand/50">
          <span>Défiler pour découvrir</span>
          <span>{PRODUCTS.length} RÉFÉRENCES</span>
        </div>
      </div>
      
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default Boutique;
