
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Story from './components/Story';
import Collections from './components/Collections';
import Materials from './components/Materials';
import Features from './components/Features';
import Footer from './components/Footer';
import Newsletter from './components/Newsletter';
import ProductShowcase from './components/ProductShowcase';
import PreorderForm from './components/PreorderForm';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar isScrolled={isScrolled} />
      <main>
        <section id="hero">
          <Hero />
        </section>

        <section id="story" className="py-24 bg-white">
          <Story />
        </section>

        <section id="collections" className="py-24 bg-cream">
          <Collections />
        </section>

        <section id="productShowcase" className="py-14 bg-white">
          <ProductShowcase />
        </section>

        <section id="materials" className="py-24 bg-earth-green text-white overflow-hidden">
          <Materials />
        </section>

        <section id="why-us" className="py-24 bg-white">
          <Features />
        </section>

        <section id="join" className="py-24 bg-cream">
          <Newsletter />
        </section>

        <section id="preorder" className="py-24 bg-white">
          <PreorderForm />
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default App;
