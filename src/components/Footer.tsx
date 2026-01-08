
import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black py-12 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8 mb-12">
        <div className="col-span-1 md:col-span-1">
          <Link to="/" className="text-2xl font-bold gradient-text mb-4 block">Remixr</Link>
          <p className="text-white/50 text-sm">
            The ultimate AI photo transformation studio. Remix your reality with professional-grade tools.
          </p>
        </div>

        <div>
          <h4 className="text-white font-bold mb-4">Product</h4>
          <ul className="space-y-2 text-sm text-white/60">
            <li><HashLink to="/#features" className="hover:text-white transition-colors">Features</HashLink></li>
            <li><HashLink to="/#packs" className="hover:text-white transition-colors">Packs</HashLink></li>
            <li><HashLink to="/#pricing" className="hover:text-white transition-colors">Pricing</HashLink></li>
            <li><HashLink to="/#gallery" className="hover:text-white transition-colors">Showcase</HashLink></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-4">Company</h4>
          <ul className="space-y-2 text-sm text-white/60">
            <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
            <li><Link to="/legal-notice" className="hover:text-white transition-colors">Legal Notice</Link></li>
            <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-4">Connect</h4>
          <ul className="space-y-2 text-sm text-white/60">
            <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
            <li><a href="#" className="hover:text-white transition-colors">TikTok</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Twitter / X</a></li>
            <li><Link to="/support" className="hover:text-white transition-colors">Support</Link></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-sm text-white/40">
        <p>&copy; {currentYear} Remixr. All rights reserved.</p>
        <p>Made with ❤️ and 🤖</p>
      </div>
    </footer>
  );
}
