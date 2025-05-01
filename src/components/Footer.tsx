
import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-remixr-black py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-6">Remixr</h3>
            <p className="text-white/60 mb-6">
              Transform your photos with artistic styles, try on fashion virtually, and redesign your spaces—all powered by cutting-edge AI.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-bold text-white mb-4">Product</h4>
              <ul className="space-y-2">
                <li><Link to="/#features" className="text-white/60 hover:text-white transition-colors">Features</Link></li>
                <li><Link to="/#how-it-works" className="text-white/60 hover:text-white transition-colors">How It Works</Link></li>
                <li><Link to="/#pricing" className="text-white/60 hover:text-white transition-colors">Pricing</Link></li>
                <li><Link to="/#showcase" className="text-white/60 hover:text-white transition-colors">Showcase</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-bold text-white mb-4">Company</h4>
              <ul className="space-y-2">
                <li><Link to="/privacy" className="text-white/60 hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link to="/terms" className="text-white/60 hover:text-white transition-colors">Terms & Conditions</Link></li>
                <li><Link to="/legal-notice" className="text-white/60 hover:text-white transition-colors">Legal Notice</Link></li> {/* Added Legal Notice link */}
                <li><a href="#" className="text-white/60 hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="text-white/60 hover:text-white transition-colors">Support</a></li>
              </ul>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Download</h4>
            <div className="flex flex-col space-y-4">
              <a href="#" className="text-white/60 hover:text-white transition-colors flex items-center">
                <span className="mr-2">📱</span> Download on the App Store
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors flex items-center">
                <span className="mr-2">🤖</span> Get it on Google Play
              </a>
            </div>
            
            <div className="mt-8">
              <h4 className="text-lg font-bold text-white mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-remixr-magenta/20 transition-colors">
                  <span className="text-lg">📸</span>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-remixr-magenta/20 transition-colors">
                  <span className="text-lg">🎵</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-10 pt-8 text-center">
          <p className="text-white/60 text-sm">
            © {currentYear} Remixr. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
