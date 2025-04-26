import React, { useRef, useEffect, useState } from 'react';

interface ShowcaseCardProps {
  before: string;
  after: string;
  title: string;
  description: string;
  index: number;
}

const ShowcaseCard: React.FC<ShowcaseCardProps> = ({ before, after, title, description, index }) => {
  const [showAfter, setShowAfter] = useState(false);

  useEffect(() => {
    // Add a delay before starting the interval based on the card's index
    const startDelay = index * 600; // Stagger start by 600ms per card (increased from 300)
    
    const timeoutId = setTimeout(() => {
      const intervalId = setInterval(() => {
        setShowAfter(prev => !prev);
      }, 3000); // Change image every 3 seconds

      // Store intervalId to clear it on unmount
      (timeoutId as any).intervalId = intervalId; 

    }, startDelay);

    return () => {
      clearTimeout(timeoutId);
      // Clear the interval if it was started
      if ((timeoutId as any).intervalId) {
        clearInterval((timeoutId as any).intervalId);
      }
    }; // Cleanup timeout and interval on component unmount
  }, [index]); // Add index to dependency array for the delay calculation

  return (
    <div 
      className="rounded-xl overflow-hidden group animate-fade-in"
      style={{ animationDelay: `${index * 0.15}s` }}
      // Removed hover handlers
    >
      <div className="relative aspect-[4/5] overflow-hidden">
        {/* Before image */}
        <img 
          src={before} 
          alt={`Before: ${title}`} 
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            opacity: showAfter ? 0 : 1, // Use showAfter state
            transition: "opacity 400ms ease-in-out"
          }}
        />
        
        {/* After image */}
        <img 
          src={after} 
          alt={`After: ${title}`} 
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            opacity: showAfter ? 1 : 0, // Use showAfter state
            transition: "opacity 400ms ease-in-out"
          }}
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-remixr-darker to-transparent opacity-60 transition-opacity duration-300"></div>
        
        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="text-xl font-bold mb-2 gradient-text">{title}</h3>
          <p className="text-white/70 text-sm transform translate-y-0 opacity-100 transition-all duration-300">
            {description}
          </p>
        </div>
        
        {/* Slider indicator */}
        <div className="absolute top-4 right-4 bg-black/50 text-white text-xs font-medium px-2 py-1 rounded-full backdrop-blur-sm">
          {showAfter ? 'After' : 'Before'} {/* Reflect current state */}
        </div>
      </div>
    </div>
  );
};

export default function Showcase() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Swapped 'before' and 'after' to show original first
  const showcaseItems = [
    {
      before: "room_design/examples/room_1.jpg", // Original
      after: "room_design/examples/result_1.png", // Transformed
      title: "Modern Room Redesign",
      description: "Visualize your space transformed into a sleek, modern style instantly."
    },
    {
      before: "style_remix/examples/ghibli/1_original.jpg", // Original
      after: "style_remix/examples/ghibli/1_ai.jpg", // Transformed
      title: "Ghibli Style Transfer",
      description: "Turn your photos into enchanting scenes reminiscent of Ghibli films."
    },
    {
      before: "virtual_try_on/examples/model_1.jpg", // Original
      after: "virtual_try_on/examples/result_1.png", // Transformed
      title: "Virtual Shirt Try-On",
      description: "See how this stylish shirt looks on the model without a fitting room."
    },
    {
      before: "style_remix/examples/pixar/1_original.jpg", // Original
      after: "style_remix/examples/pixar/1_ai.png", // Transformed
      title: "Pixar Character Style",
      description: "Give your portraits a fun, animated look inspired by Pixar movies."
    },
    {
      before: "room_design/examples/room_2.jpg", // Original
      after: "room_design/examples/result_2.png", // Transformed
      title: "Bohemian Living Room",
      description: "Instantly redesign a living space with a cozy, bohemian vibe."
    },
    {
      before: "style_remix/examples/muppet/1_original.jpg", // Original
      after: "style_remix/examples/muppet/1_ai.png", // Transformed
      title: "Muppet Transformation",
      description: "See yourself or friends reimagined as lovable Muppet characters."
    },
  ];

  // Duplicate items for infinite scroll effect
  const duplicatedItems = [...showcaseItems, ...showcaseItems];

  // Removed useEffect for JS scrolling, will use CSS animation instead

  return (
    <section id="showcase" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-remixr-dark to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-remixr-dark to-transparent"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">See</span> What's Possible
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Watch the transformations unfold automatically. {/* Updated text */}
          </p>
        </div>
        
        {/* Outer wrapper to clip the scrolling content */}
        <div className="overflow-x-hidden pb-8"> 
          {/* Inner container with animation and large width */}
          <div 
            className="flex space-x-6 showcase-scroll-container" // Removed overflow-x-hidden, pb-8. Kept animation class. Removed ref.
            style={{
              // Width is now set in CSS
            }}
        >
          {/* Render duplicated items */}
          {duplicatedItems.map((item, index) => (
            // Use a unique key combining original index and duplication factor
            <div key={`${index}-${item.title}`} className="flex-shrink-0 w-[280px]"> 
              <ShowcaseCard 
                before={item.before}
                after={item.after}
                title={item.title}
                description={item.description}
                // Pass original index for animation delay consistency if needed, or adjust logic
                index={index % showcaseItems.length} 
              />
            </div>
          ))}
          </div> {/* Closing tag for inner showcase-scroll-container */}
        </div> {/* Missing closing tag for outer overflow-x-hidden wrapper */}
      </div>
    </section>
  );
}
