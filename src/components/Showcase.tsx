
import React, { useRef, useEffect } from 'react';

interface ShowcaseCardProps {
  before: string;
  after: string;
  title: string;
  description: string;
  index: number;
}

const ShowcaseCard: React.FC<ShowcaseCardProps> = ({ before, after, title, description, index }) => {
  const [isHovered, setIsHovered] = React.useState(false);
  
  return (
    <div 
      className="rounded-xl overflow-hidden group animate-fade-in"
      style={{ animationDelay: `${index * 0.15}s` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-[4/5] overflow-hidden">
        {/* Before image */}
        <img 
          src={before} 
          alt={`Before: ${title}`} 
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            opacity: isHovered ? 0 : 1,
            transition: "opacity 400ms ease-in-out"
          }}
        />
        
        {/* After image */}
        <img 
          src={after} 
          alt={`After: ${title}`} 
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            opacity: isHovered ? 1 : 0,
            transition: "opacity 400ms ease-in-out"
          }}
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-remixr-darker to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300"></div>
        
        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="text-xl font-bold mb-2 gradient-text">{title}</h3>
          <p className="text-white/70 text-sm transform translate-y-0 opacity-100 transition-all duration-300">
            {description}
          </p>
        </div>
        
        {/* Slider indicator */}
        <div className="absolute top-4 right-4 bg-black/50 text-white text-xs font-medium px-2 py-1 rounded-full backdrop-blur-sm">
          {isHovered ? 'After' : 'Before'}
        </div>
      </div>
    </div>
  );
};

export default function Showcase() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  
  // Example showcase items - in a real implementation, these would be actual before/after images
  const showcaseItems = [
    {
      before: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05",
      after: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb",
      title: "Neo-Punk Style Transfer",
      description: "Transform everyday photos into cyberpunk masterpieces with neon accents and futuristic aesthetics."
    },
    {
      before: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      after: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
      title: "Virtual Fashion Try-On",
      description: "See how the latest fashion trends look on you without changing clothes."
    },
    {
      before: "https://images.unsplash.com/photo-1500673922987-e212871fec22",
      after: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      title: "Minimalist Room Design",
      description: "Transform cluttered spaces into sleek, minimalist environments instantly."
    },
    {
      before: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb",
      after: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05",
      title: "Vintage Film Effect",
      description: "Add classic film grain and color grading to create nostalgic memories."
    },
    {
      before: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
      after: "https://images.unsplash.com/photo-1500673922987-e212871fec22",
      title: "Neon Glow Portrait",
      description: "Add vibrant neon lighting effects to portrait photography."
    },
    {
      before: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05",
      after: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb",
      title: "Water Color Style",
      description: "Transform photos into beautiful watercolor paintings with artistic brushstrokes."
    },
  ];

  // Auto-scroll functionality with requestAnimationFrame for better performance
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;
    
    let scrollAmount = 0;
    let pause = false;
    let animationId: number;
    
    const handleScroll = () => {
      if (!container || pause) return;
      
      scrollAmount += 0.3; // Reduced speed for smoother scrolling
      container.scrollLeft = scrollAmount;
      
      if (container.scrollLeft >= container.scrollWidth - container.clientWidth) {
        scrollAmount = 0;
      }
      
      animationId = requestAnimationFrame(handleScroll);
    };
    
    animationId = requestAnimationFrame(handleScroll);
    
    // Pause scrolling when hovering
    container.addEventListener('mouseenter', () => { pause = true; });
    container.addEventListener('mouseleave', () => { 
      pause = false; 
      animationId = requestAnimationFrame(handleScroll); 
    });
    
    return () => {
      cancelAnimationFrame(animationId);
      container.removeEventListener('mouseenter', () => { pause = true; });
      container.removeEventListener('mouseleave', () => { pause = false; });
    };
  }, []);

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
            Hover over each image to see the before and after transformation.
          </p>
        </div>
        
        <div 
          ref={scrollContainerRef}
          className="flex space-x-6 overflow-x-auto pb-8 scrollbar-none"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none'
          }}
        >
          {showcaseItems.map((item, index) => (
            <div key={index} className="flex-shrink-0 w-[280px]">
              <ShowcaseCard 
                before={item.before}
                after={item.after}
                title={item.title}
                description={item.description}
                index={index}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
