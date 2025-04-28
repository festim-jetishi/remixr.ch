
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { cn } from '@/lib/utils';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
      scrolled ? "bg-remixr-darker/80 backdrop-blur-lg shadow-lg" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="font-bold text-2xl tracking-tight gradient-text hover:opacity-90 transition-opacity">
            Remixr
          </Link>
        </div>
        <nav className="hidden md:flex items-center space-x-8">
          <a href="/#features" className="text-white/70 hover:text-white transition-colors">Features</a>
          <a href="/#how-it-works" className="text-white/70 hover:text-white transition-colors">How It Works</a>
          <a href="/#showcase" className="text-white/70 hover:text-white transition-colors">Showcase</a>
          <a href="/#pricing" className="text-white/70 hover:text-white transition-colors">Pro</a>
        </nav>
        <div>
          <Button className="bg-gradient-to-r from-remixr-blueviolet to-remixr-magenta text-white font-semibold hover:shadow-lg hover:shadow-remixr-magenta/20 transition-all duration-300">
            Download
          </Button>
        </div>
      </div>
    </header>
  );
}
