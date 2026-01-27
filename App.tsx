
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Philosophy from './components/Philosophy';
import Gallery from './components/Gallery';
import Services from './components/Services';
import Boutique from './components/Boutique';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen font-sans bg-brand-cream text-brand-espresso">
      <Header />
      <Hero />
      <Philosophy />
      <Gallery />
      <Services />
      <Boutique />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
