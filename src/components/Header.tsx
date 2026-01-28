import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { Button } from "@/components/ui/button";
import { cn } from '@/lib/utils';
import { Menu, X, ArrowRight } from 'lucide-react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [scrolled]);

  const navLinks = [
    { name: 'Features', to: '/#features' },
    { name: 'Packs', to: '/#packs' },
    { name: 'Gallery', to: '/#gallery' },
    { name: 'Stories', to: '/#social' },
    { name: 'Pricing', to: '/#pricing' },
  ];

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
      scrolled || mobileMenuOpen ? "bg-black/80 backdrop-blur-lg border-b border-white/5" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center relative z-50">
          <Link to="/" className="font-black text-2xl tracking-tighter hover:opacity-90 transition-opacity flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
            <img src="/app_icons/icon.png" alt="Remixr Logo" className="w-8 h-8 rounded-lg" />
            <span>Remixr</span>
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <HashLink
              key={link.name}
              smooth
              to={link.to}
              className="text-white/70 hover:text-white transition-colors text-sm font-medium"
            >
              {link.name}
            </HashLink>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <a href="https://apps.apple.com/us/app/remixr/id6744621781" target="_blank" rel="noopener noreferrer">
            <Button className="bg-white text-black font-bold hover:bg-gray-200 transition-all duration-300 rounded-full px-6">
              Download App
            </Button>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden relative z-50 text-white p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>

        {/* Mobile Menu Overlay */}
        <div className={cn(
          "fixed inset-0 h-[100dvh] bg-black/95 backdrop-blur-xl z-40 flex flex-col items-center justify-start pt-32 space-y-8 transition-opacity duration-300 md:hidden overflow-y-auto",
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}>
          {navLinks.map((link, i) => (
            <HashLink
              key={link.name}
              smooth
              to={link.to}
              className="text-3xl font-bold text-white/90 hover:text-remixr-magenta transition-colors"
              onClick={() => setMobileMenuOpen(false)}
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              {link.name}
            </HashLink>
          ))}
          <a href="https://apps.apple.com/us/app/remixr/id6744621781" target="_blank" rel="noopener noreferrer">
            <Button
              className="mt-8 bg-gradient-to-r from-remixr-blueviolet to-remixr-magenta text-white font-bold py-6 px-10 text-xl rounded-full shadow-lg shadow-remixr-magenta/30"
              onClick={() => setMobileMenuOpen(false)}
            >
              Download App <ArrowRight className="ml-2" />
            </Button>
          </a>
        </div>
      </div>
    </header>
  );
}
