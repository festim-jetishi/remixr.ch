import React from 'react';
import { Button } from "@/components/ui/button";
import { Apple, Smartphone, Sparkles } from 'lucide-react';

export default function Download() {
  return (
    <section className="py-32 px-6 relative overflow-hidden bg-black flex items-center justify-center min-h-[600px]">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-remixr-blueviolet/20 to-remixr-magenta/20 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100"></div>

        {/* Floating Orbs */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-remixr-blueviolet rounded-full blur-[50px] animate-fade-in opacity-40"></div>
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-remixr-magenta rounded-full blur-[60px] animate-fade-in opacity-40" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8 animate-fade-in">
          <Sparkles size={16} className="text-yellow-400" />
          <span className="text-white/80 text-sm font-medium">Join the Community</span>
        </div>

        <h2 className="text-5xl md:text-7xl font-black mb-8 animate-fade-in tracking-tighter text-white leading-[1.1]">
          Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-remixr-blueviolet to-remixr-magenta">Remix</span> Your World?
        </h2>

        <p className="text-xl md:text-2xl text-white/60 mb-12 max-w-2xl mx-auto animate-fade-in font-light leading-relaxed" style={{ animationDelay: '0.2s' }}>
          Download Remixr now and transform your photos, fashion, and spaces with the power of AI.
        </p>

        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <Button className="h-16 px-8 rounded-2xl bg-white text-black hover:bg-white/90 transition-all duration-300 transform hover:scale-105 shadow-[0_0_40px_rgba(255,255,255,0.2)] flex items-center justify-center gap-3">
            <Apple size={28} className="mb-1" />
            <div className="text-left">
              <div className="text-[10px] uppercase font-bold tracking-wider opacity-60 leading-none">Download on the</div>
              <div className="text-lg font-bold leading-none">App Store</div>
            </div>
          </Button>

          <Button className="h-16 px-8 rounded-2xl bg-white/10 text-white hover:bg-white/20 border border-white/10 transition-all duration-300 flex items-center justify-center gap-3">
            <Smartphone size={28} className="mb-1" />
            <div className="text-left">
              <div className="text-[10px] uppercase font-bold tracking-wider opacity-60 leading-none">Get it on</div>
              <div className="text-lg font-bold leading-none">Google Play</div>
            </div>
          </Button>
        </div>

        <p className="mt-8 text-white/30 text-sm animate-fade-in" style={{ animationDelay: '0.6s' }}>
          Free to start. No credit card required.
        </p>
      </div>
    </section>
  );
}
