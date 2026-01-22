
import React from 'react';
import Header from './components/Header';
import { SERVICES, GALLERY, SALON_INFO, PRODUCTS } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen font-sans bg-brand-cream text-brand-espresso">
      <Header />
      
      {/* Hero Section */}
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
              <a href="#about" className="bg-brand-gold text-brand-cream px-16 py-6 font-black hover:bg-white hover:text-brand-espresso transition-all duration-500 uppercase tracking-[0.3em] text-[10px] text-center">
                L'Atelier
              </a>
              <a href="#contact" className="bg-transparent border border-white/30 text-white px-16 py-6 font-black hover:bg-white/10 transition-all duration-500 uppercase tracking-[0.3em] text-[10px] text-center backdrop-blur-sm">
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

      {/* Philosophy Section */}
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

      {/* Gallery Section - Lookbook */}
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

      {/* Services Section */}
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

      {/* Boutique Section */}
      <section id="boutique" className="py-32 bg-brand-cream">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-16 mb-24 items-center">
            <div className="lg:col-span-5">
              <span className="text-brand-gold uppercase tracking-[0.4em] text-[11px] font-black mb-6 block">La Boutique</span>
              <h2 className="text-5xl md:text-7xl font-serif text-brand-espresso italic tracking-tight mb-8">Soin à domicile.</h2>
              <p className="text-brand-text font-light text-xl leading-relaxed max-w-md">
                Prolongez l'expertise de nos stylistes avec notre sélection exclusive des meilleurs produits professionnels.
              </p>
            </div>
            <div className="lg:col-span-7 flex justify-end">
              <div className="w-full max-w-xl aspect-video bg-brand-paper luxury-border relative overflow-hidden group">
                <img 
                  src="https://images.unsplash.com/photo-1527799822344-42ad8c5827d7?auto=format&fit=crop&q=80&w=1200" 
                  alt="Boutique Atmosphere" 
                  className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                   <span className="bg-brand-espresso text-brand-cream px-8 py-4 text-[10px] font-black uppercase tracking-widest border border-brand-gold/30">L'Art du Soin</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
            {PRODUCTS.map((product) => (
              <div key={product.id} className="group flex flex-col">
                <div className="aspect-[4/5] overflow-hidden luxury-border bg-brand-paper relative mb-8">
                  <img 
                    src={product.imageUrl} 
                    alt={product.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 grayscale group-hover:grayscale-0" 
                  />
                  <div className="absolute inset-0 bg-brand-espresso/0 group-hover:bg-brand-espresso/5 transition-colors duration-500"></div>
                </div>
                <div className="flex justify-between items-start mb-2">
                  <p className="text-brand-gold text-[9px] uppercase tracking-[0.3em] font-black">{product.brand}</p>
                  <span className="text-brand-espresso font-serif italic text-sm">{product.price}</span>
                </div>
                <h3 className="text-lg font-serif text-brand-espresso mb-3 leading-snug group-hover:text-brand-gold transition-colors">{product.name}</h3>
                <p className="text-brand-text/60 text-xs font-light leading-relaxed mb-6 line-clamp-2">
                  {product.description}
                </p>
                <div className="mt-auto h-[1px] w-full bg-brand-sand/20 group-hover:bg-brand-gold transition-colors duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
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

      {/* Footer */}
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
    </div>
  );
};

export default App;
