
import React from 'react';
import { cn } from '@/lib/utils';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  imageSrc: string;
  index: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon, imageSrc, index }) => {
  return (
    <div className={cn(
      "relative overflow-hidden rounded-2xl p-8 transition-all duration-500 group", // Removed glass-card, kept base styles
      "bg-black/40 backdrop-blur-md border border-white/10", // Added glassmorphism styles: background, blur, border
      "hover:bg-black/50 hover:border-white/20 hover:shadow-xl hover:shadow-remixr-magenta/20", // Enhanced hover state
      "animate-fade-in"
    )}
    style={{ animationDelay: `${index * 0.2}s` }}
    >
      <div className="flex flex-col space-y-4 relative z-10">
        <div className="w-14 h-14 rounded-full bg-remixr-magenta/20 flex items-center justify-center text-remixr-magenta text-2xl mb-4">
          {icon}
        </div>
        <h3 className="text-2xl font-bold gradient-text">{title}</h3>
        <p className="text-white/90">{description}</p>
      </div>
      
      <div className="absolute -bottom-2 -right-2 w-40 h-40 opacity-30 group-hover:opacity-50 transition-opacity duration-300 z-0">
        <img 
          src={imageSrc} 
          alt={title} 
          className="w-full h-full object-cover rounded-xl transform group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-remixr-darker via-remixr-darker to-transparent rounded-xl"></div>
      </div>
    </div>
  );
};

export default function Features() {
  const features = [
    {
      title: "AI Style Remix",
      description: "Transform your photos with hundreds of artistic styles, from neo-punk to renaissance, in seconds.",
      icon: "🎨",
      imageSrc: "style_remix/previews/pixar.png"
    },
    {
      title: "Virtual Try-On",
      description: "See how clothes and accessories look on you before buying. Swipe through options instantly.",
      icon: "👕",
      imageSrc: "virtual_try_on/items/shirt.jpg"
    },
    {
      title: "AI Room Design",
      description: "Redesign any room with new styles, furniture, and decor using our powerful AI visualization.",
      icon: "🏠",
      imageSrc: "room_design/styles/minimalist.jpg"
    }
  ];

  return (
    <section id="features" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full bg-remixr-blueviolet/10 blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/4 w-64 h-64 rounded-full bg-remixr-magenta/10 blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Create</span> Like Never Before
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Remixr uses cutting-edge AI to supercharge your creativity and transform your world.
            <span className="block mt-4 text-white/90 font-medium">We only process your images to deliver results - they're deleted immediately after.</span>
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              imageSrc={feature.imageSrc}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
