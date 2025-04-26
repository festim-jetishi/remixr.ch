
import React from 'react';
import { Button } from "@/components/ui/button";
import { cn } from '@/lib/utils';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-24 px-6">
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-remixr-blueviolet/20 blur-3xl animate-pulse-glow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-remixr-magenta/20 blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-remixr-blueviolet/10 blur-3xl animate-pulse-glow" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl w-full mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div className="flex flex-col space-y-8 text-center md:text-left">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight animate-fade-in">
            <span className="gradient-text">Remix</span> Your Reality With AI
          </h1>
          <p className="text-xl text-white/70 animate-fade-in" style={{animationDelay: '0.2s'}}>
            Transform your photos with artistic styles, try on fashion virtually, and redesign your spaces—all powered by cutting-edge AI.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start animate-fade-in" style={{animationDelay: '0.4s'}}>
            <Button className="bg-gradient-to-r from-remixr-blueviolet to-remixr-magenta text-white font-semibold py-6 px-8 text-lg hover:shadow-lg hover:shadow-remixr-magenta/20 hover:scale-105 transition-all duration-300">
              <span className="mr-2">📱</span> App Store
            </Button>
            <Button className="bg-white/10 hover:bg-white/20 text-white font-semibold py-6 px-8 text-lg transition-all duration-300">
              <span className="mr-2">🤖</span> Google Play
            </Button>
          </div>
        </div>
        
        <div className="relative h-[400px] md:h-[600px] animate-fade-in" style={{animationDelay: '0.6s'}}>
          {/* Phone mockup with animated screens */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-[280px] h-[580px] bg-remixr-black rounded-[40px] border-4 border-gray-800 shadow-xl shadow-remixr-magenta/10 p-3 rotate-6 animate-float">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-remixr-black rounded-b-xl"></div>
              <div className="w-full h-full bg-remixr-dark rounded-[32px] overflow-hidden">
                <div className="w-full h-full overflow-hidden relative">
                  {/* Animated screens - actual images would be sourced from assets */}
                  <img 
                    src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5" 
                    alt="Remixr AI Style"
                    className="absolute inset-0 w-full h-full object-cover opacity-80 animate-image-rotate"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-remixr-blueviolet/30 to-remixr-magenta/30"></div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-remixr-dark to-transparent">
                    <h3 className="text-white font-bold text-lg">AI Style Transfer</h3>
                    <p className="text-white/70 text-sm">Turn your photos into digital art</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Second phone, positioned behind the first */}
            <div className="absolute w-[280px] h-[580px] bg-remixr-black rounded-[40px] border-4 border-gray-800 shadow-xl shadow-remixr-blueviolet/10 p-3 -rotate-6 -translate-x-16 translate-y-8 z-[-1] animate-float" style={{animationDelay: '1.5s'}}>
              <div className="w-full h-full bg-remixr-dark rounded-[32px] overflow-hidden">
                <div className="w-full h-full overflow-hidden relative">
                  <img 
                    src="https://images.unsplash.com/photo-1500673922987-e212871fec22" 
                    alt="Remixr Room Design"
                    className="absolute inset-0 w-full h-full object-cover opacity-80 animate-image-rotate"
                    style={{animationDelay: '2s'}}
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-remixr-blueviolet/30 to-remixr-magenta/30"></div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-remixr-dark to-transparent">
                    <h3 className="text-white font-bold text-lg">AI Room Design</h3>
                    <p className="text-white/70 text-sm">Reimagine your space instantly</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
