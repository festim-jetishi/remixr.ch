import React, { useRef, useEffect, useState } from 'react';
import { Badge } from '@/components/ui/badge';

interface ShowcaseCardProps {
  before: string;
  after: string;
  title: string;
  description: string;
  index: number;
}

const ShowcaseCard: React.FC<ShowcaseCardProps> = ({ before, after, title, description, index }) => {
  const [showAfter, setShowAfter] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null); // Ref to store interval ID

  useEffect(() => {
    // Add a delay before starting the interval based on the card's index
    const startDelay = index * 600; // Stagger start by 600ms per card (increased from 300)

    const timeoutId = setTimeout(() => {
      const intervalId = setInterval(() => {
        setShowAfter(prev => !prev);
      }, 3000); // Change image every 3 seconds

      // Store intervalId in the ref to clear it on unmount
      intervalRef.current = intervalId;

    }, startDelay);

    return () => {
      clearTimeout(timeoutId);
      // Clear the interval using the ref if it was started
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }; // Cleanup timeout and interval on component unmount
  }, [index]); // Add index to dependency array for the delay calculation

  return (
    <div
      className="relative rounded-[2rem] overflow-hidden group aspect-[3/4] border border-white/10 bg-gray-900 shadow-2xl transition-transform duration-500 hover:scale-[1.02]"
    >
      {/* Images */}
      <div className="absolute inset-0">
        <img
          src={before}
          alt={`Before: ${title}`}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out"
          style={{ opacity: showAfter ? 0 : 1 }}
        />
        <img
          src={after}
          alt={`After: ${title}`}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out"
          style={{ opacity: showAfter ? 1 : 0 }}
        />
      </div>

      {/* Progress Bar (Timer) */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-white/20">
        <div
          className="h-full bg-white transition-all duration-[3000ms] ease-linear"
          style={{ width: showAfter ? '0%' : '100%', opacity: showAfter ? 0 : 1 }}
        />
      </div>

      {/* Badges */}
      <div className="absolute top-6 right-6">
        <div className="bg-black/60 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/10 shadow-lg">
          {showAfter ? '✨ RESULT' : '📷 ORIGINAL'}
        </div>
      </div>

      {/* Bottom Content gradient */}
      <div className="absolute inset-x-0 bottom-0 pt-24 pb-8 px-8 bg-gradient-to-t from-black via-black/80 to-transparent">
        <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
        <p className="text-white/70 text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default function Showcase() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Swapped 'before' and 'after' to show original first
  const showcaseItems = [
    {
      before: "/packs/pack_linkedin_01/before.png",
      after: "/packs/pack_linkedin_01/after_1.png",
      title: "Professional Headshots",
      description: "Turn casual selfies into polished LinkedIn profile photos."
    },
    {
      before: "/packs/pack_roomglowup_01/before.png",
      after: "/packs/pack_roomglowup_01/after_1.png",
      title: "Interior Redesign",
      description: "Visualize a modern makeover for your living space instantly."
    },
    {
      before: "/packs/pack_90s_01/before.png",
      after: "/packs/pack_90s_01/after_1.png",
      title: "90s Yearbook",
      description: "Travel back in time with the viral 90s aesthetic."
    },
    {
      before: "/packs/pack_ghibli_01/before.png",
      after: "/packs/pack_ghibli_01/after_1.png",
      title: "Anime World",
      description: "Reimagine yourself in the style of legendary animation studios."
    },
    {
      before: "/packs/pack_tinder_01/before.png",
      after: "/packs/pack_tinder_01/after_1.png",
      title: "Dating Optimization",
      description: "Get more matches with photos designed to stand out."
    },
    {
      before: "/packs/pack_pixar_01/before.png",
      after: "/packs/pack_pixar_01/after_1.png",
      title: "3D Character",
      description: "See the animated movie version of yourself."
    },
  ];

  // Duplicate items for infinite scroll effect
  const duplicatedItems = [...showcaseItems, ...showcaseItems];

  // Removed useEffect for JS scrolling, will use CSS animation instead

  return (
    <section id="gallery" className="py-24 px-6 relative overflow-hidden bg-remixr-black">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-remixr-black to-transparent z-10"></div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-remixr-black to-transparent z-10"></div>
      </div>

      <div className="max-w-[1920px] mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in px-6">
          <Badge variant="outline" className="mb-6 border-white/20 text-white px-4 py-1 text-sm">
            Community Gallery
          </Badge>
          <h2 className="text-4xl md:text-6xl font-black mb-6 text-white">
            Made With <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Remixr</span>
          </h2>
          <p className="text-xl text-white/60 max-w-3xl mx-auto">
            Real results from our users. From 4K professional headshots to viral anime transformations.
          </p>
        </div>

        {/* Scrolling Strip */}
        <div className="relative w-full overflow-hidden mask-image-linear-to-r">
          {/* Gradient Masks for edges */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-20 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-20 pointer-events-none"></div>

          <div className="flex space-x-8 showcase-scroll-container py-12">
            {duplicatedItems.map((item, index) => (
              <div key={`${index}-${item.title}`} className="flex-shrink-0 w-[320px] md:w-[400px]">
                <ShowcaseCard
                  before={item.before}
                  after={item.after}
                  title={item.title}
                  description={item.description}
                  index={index % showcaseItems.length}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
