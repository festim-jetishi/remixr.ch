import React from 'react';
import { Button } from "@/components/ui/button";
import { Sparkles, ArrowRight, Download } from 'lucide-react';

export default function Hero() {
  // Curated list of high-impact images from packs
  const heroImages = [
    "/packs/pack_90s_01/after_1.png",
    "/packs/pack_ghibli_01/after_1.png",
    "/packs/pack_linkedin_01/after_1.png",
    "/packs/pack_roomglowup_01/after_1.png",
    "/packs/pack_cyberpunk_01/after_1.png", // Assuming this exists or falls back
    "/packs/pack_tinder_01/after_1.png",
  ];

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden bg-black">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-remixr-blueviolet/20 rounded-full blur-[128px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-remixr-magenta/20 rounded-full blur-[128px] animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-16 items-center relative z-10">

        {/* Left Column: Typography */}
        <div className="space-y-8 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-4 animate-fade-in">
            <span className="flex h-2 w-2 rounded-full bg-green-500"></span>
            <span className="text-white/80 text-sm font-medium">v2.3.5 Available Now</span>
          </div>

          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black tracking-tighter text-white leading-[1.1] animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Remix <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-remixr-blueviolet via-remixr-magenta to-orange-500 animate-gradient-x">
              Your Reality
            </span>
          </h1>

          <p className="text-xl text-white/60 max-w-xl mx-auto lg:mx-0 leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
            The only AI editor you need. Turn one photo into professional headshots, viral art, or dream interiors instantly.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <a href="https://apps.apple.com/us/app/remixr/id6744621781" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="h-14 px-8 text-lg bg-white text-black hover:bg-white/90 rounded-full shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all hover:scale-105">
                <Download className="mr-2 h-5 w-5" /> Download App
              </Button>
            </a>
            <Button size="lg" variant="ghost" className="h-14 px-8 text-lg text-white hover:bg-white/10 rounded-full border border-white/10">
              Explore Packs <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          <div className="pt-8 flex items-center justify-center lg:justify-start gap-8 text-white/40 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-black bg-gray-800 bg-cover bg-center" style={{ backgroundImage: `url(/packs/pack_linkedin_01/after_${i}.png)` }}></div>
              ))}
            </div>
            <div className="text-sm">
              <span className="font-bold text-white block">Early Users</span>
              Rating 4.6/5
            </div>
          </div>
        </div>

        {/* Right Column: Visual Masonry */}
        <div className="relative h-[600px] lg:h-[800px] w-full hidden md:block overflow-hidden rounded-[3rem] shadow-2xl border border-white/5 bg-white/5 backdrop-blur-sm">
          <div className="absolute inset-0 grid grid-cols-2 gap-4 animate-fade-in-up" style={{ animationDelay: '0.5s', transform: 'rotate(-6deg) scale(1.1)' }}>

            {/* Column 1 - Moving Up */}
            <div className="flex flex-col gap-4 animate-scroll-up">
              {[...heroImages, ...heroImages].map((src, i) => (
                <div key={`col1-${i}`} className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[3/4]">
                  <img
                    src={src}
                    alt="Remixr Example"
                    className="w-full h-full object-cover"
                    onError={(e) => e.currentTarget.style.display = 'none'}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
              ))}
            </div>

            {/* Column 2 - Moving Down */}
            <div className="flex flex-col gap-4 animate-scroll-down">
              {[...heroImages, ...heroImages].reverse().map((src, i) => (
                <div key={`col2-${i}`} className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[3/4]">
                  <img
                    src={src}
                    alt="Remixr Example"
                    className="w-full h-full object-cover"
                    onError={(e) => e.currentTarget.style.display = 'none'}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
              ))}
            </div>

          </div>

          {/* Overlay Gradients to blend edges visually */}
          <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#0F0E17] via-[#0F0E17]/80 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0F0E17] via-[#0F0E17]/80 to-transparent z-10 pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
}
