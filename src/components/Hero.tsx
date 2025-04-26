
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
        
        <div className="relative h-[400px] md:h-[600px] animate-fade-in group" style={{animationDelay: '0.6s'}}>
          <div className="absolute inset-0 flex items-center justify-center perspective-1000">
            {/* Second phone (behind) */}
            <div className="absolute phone-mockup -rotate-6 translate-x-[-20px] transition-all duration-700 
                group-hover:-rotate-3 group-hover:-translate-x-8 group-hover:scale-95 
                 z-0">
              <div className="w-[280px] h-[580px] bg-remixr-black rounded-[40px] border-8 border-gray-800 shadow-2xl shadow-remixr-blueviolet/20 p-3 opacity-90">
                <div className="w-full h-full bg-remixr-dark rounded-[32px] overflow-hidden relative">
                  <div className="absolute inset-0 bg-black/10"></div>
                  <img 
                    src="virtual_try_on/examples/result_1.png" 
                    alt="Remixr Virtual Try-On"
                    className="absolute inset-0 w-full h-full object-cover opacity-80"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-remixr-dark to-transparent">
                    <h3 className="text-white font-bold text-lg">AI Room Design</h3>
                  </div>
                </div>
                {/* Phone frame details */}
                <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-16 h-2 bg-gray-700 rounded-full"></div>
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-2 bg-gray-700 rounded-full"></div>
              </div>
            </div>
            
            {/* First phone (front) */}
            <div className="absolute phone-mockup rotate-6 translate-x-[20px] transition-all duration-700 
                group-hover:rotate-0 group-hover:translate-x-8 group-hover:scale-105 
                 z-10">
              <div className="w-[280px] h-[580px] bg-remixr-black rounded-[40px] border-8 border-gray-800 shadow-2xl shadow-remixr-magenta/20 p-3">
                <div className="w-full h-full bg-remixr-dark rounded-[32px] overflow-hidden relative">
                  <div className="absolute inset-0 bg-black/10"></div>
                  <img 
                    src="style_remix/previews/pixar.png" 
                    alt="Remixr AI Style"
                    className="absolute inset-0 w-full h-full object-cover opacity-80"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-remixr-dark to-transparent">
                    <h3 className="text-white font-bold text-lg">AI Style Transfer</h3>
                  </div>
                </div>
                {/* Phone frame details */}
                <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-16 h-2 bg-gray-700 rounded-full"></div>
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-2 bg-gray-700 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
