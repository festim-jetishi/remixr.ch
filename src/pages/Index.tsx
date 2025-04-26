
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import HowItWorks from '@/components/HowItWorks';
import Showcase from '@/components/Showcase';
import Pricing from '@/components/Pricing';
import Download from '@/components/Download';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-remixr-dark text-white">
      <Header />
      <Hero />
      <Features />
      <HowItWorks />
      <Showcase />
      <Pricing />
      <Download />
      <Footer />
    </div>
  );
};

export default Index;
