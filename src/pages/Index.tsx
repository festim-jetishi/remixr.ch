
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Packs from '@/components/Packs';
import Comparison from '@/components/Comparison';
import Showcase from '@/components/Showcase'; // Now "Creations Gallery"
import Testimonials from '@/components/Testimonials';
import Pricing from '@/components/Pricing';
import Download from '@/components/Download';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-remixr-dark text-white font-sans selection:bg-remixr-magenta/30">
      <Header />
      <main>
        <Hero />
        <Features />
        <Packs />
        <Showcase />
        <Comparison />
        <Testimonials />
        <Pricing />
        <Download />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
