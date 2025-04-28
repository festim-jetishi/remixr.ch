
import React from 'react';
import { Button } from "@/components/ui/button";

export default function Download() {
  return (
    <section className="py-24 px-6 relative overflow-hidden bg-gradient-to-r from-remixr-blueviolet/20 to-remixr-magenta/20">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-remixr-darker opacity-80"></div>
      </div>
      
      <div className="max-w-3xl mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
          Ready to <span className="gradient-text">Remix</span> Your World?
        </h2>
        <p className="text-xl text-white/70 mb-10 animate-fade-in" style={{animationDelay: '0.2s'}}>
          Download Remixr now and transform your photos, fashion, and spaces with the power of AI.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6 animate-fade-in" style={{animationDelay: '0.4s'}}>
          <Button className="bg-gradient-to-r from-remixr-blueviolet to-remixr-magenta text-white font-semibold py-6 px-8 text-lg hover:shadow-lg hover:shadow-remixr-magenta/20 hover:scale-105 transition-all duration-300">
            <span className="mr-2">📱</span> App Store
          </Button>
          <Button className="bg-white/10 hover:bg-white/20 text-white font-semibold py-6 px-8 text-lg transition-all duration-300">
            <span className="mr-2">🤖</span> Google Play
          </Button>
        </div>
      </div>
    </section>
  );
}
