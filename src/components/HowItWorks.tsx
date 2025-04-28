
import React, { useState } from 'react';

interface StepProps {
  number: number;
  title: string;
  description: string;
  isActive: boolean;
  onClick: () => void;
}

const Step: React.FC<StepProps> = ({ number, title, description, isActive, onClick }) => {
  return (
    <div 
      className={`relative p-6 rounded-xl cursor-pointer transition-all duration-300 border ${
        isActive 
          ? 'bg-white/10 shadow-xl shadow-remixr-magenta/10 border-white/20 scale-105' // Increased opacity, adjusted shadow, border, kept scale
          : 'border-transparent hover:bg-white/10 hover:border-white/10' // Increased hover opacity, added subtle hover border
      }`}
      onClick={onClick}
    >
      <div className="flex items-start gap-4">
        <div 
          className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold transition-all duration-300"
          style={{
            background: isActive ? 'linear-gradient(to right, #8A2BE2, #FF00FF)' : 'rgba(255, 255, 255, 0.1)',
            color: isActive ? 'white' : 'rgba(255, 255, 255, 0.7)'
          }}
        >
          {number}
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-white/70">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);
  
  const steps = [
    {
      title: "Upload Your Photo",
      description: "Select or take a photo directly in the app. We process it securely and delete it immediately after delivering your results.",
    },
    {
      title: "Choose Your Transformatiddon",
      description: "Pick from style remixing, virtual try-on for fashion, or room redesign options.",
    },
    {
      title: "Get Your Remix",
      description: "Our AI processes your image in seconds, delivering stunning, shareable results instantly.",
    }
  ];

  // Auto-cycle through steps
  React.useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [steps.length]);

  return (
    <section id="how-it-works" className="py-24 px-6 bg-remixr-darker relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-remixr-magenta/30 to-transparent"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Simple</span> Process, Amazing Results
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Transform your photos in three easy steps. No design skills needed.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            {steps.map((step, index) => (
              <Step
                key={index}
                number={index + 1}
                title={step.title}
                description={step.description}
                isActive={activeStep === index}
                onClick={() => setActiveStep(index)}
              />
            ))}
          </div>
          
          <div className="relative h-[500px] flex items-center justify-center mt-8 md:mt-0">
            {/* Phone mockup with animated transitions between steps */}
            <div className="relative w-[280px] h-[580px] bg-remixr-black rounded-[40px] border-4 border-gray-800 p-3 shadow-lg shadow-remixr-magenta/10 animate-float">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-remixr-black rounded-b-xl"></div>
              {/* Added relative positioning context for the steps */}
              <div className="w-full h-full bg-remixr-dark rounded-[32px] overflow-hidden relative"> 
                {/* Step 1: Upload */}
                <div className={`absolute inset-0 transition-all duration-500 ease-in-out ${
                  activeStep === 0 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'
                }`}>
                  <div className="h-full flex flex-col">
                    <div className="p-4 border-b border-white/10">
                      <h3 className="text-lg font-bold text-center">Upload Photo</h3>
                    </div>
                    <div className="flex-1 flex items-center justify-center p-6">
                      <div className="w-full h-[300px] border-2 border-dashed border-white/30 rounded-lg flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                            <span className="text-2xl">📸</span>
                          </div>
                          <p className="text-white/70">Tap to select photo</p>
                          <p className="text-white/50 text-xs mt-2">Images are deleted after processing</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Step 2: Choose transformation */}
                <div className={`absolute inset-0 transition-all duration-500 ease-in-out ${
                  activeStep === 1 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'
                }`}>
                  <div className="h-full flex flex-col">
                    <div className="p-4 border-b border-white/10">
                      <h3 className="text-lg font-bold text-center">Choose Style</h3>
                    </div>
                    <div className="flex-1 p-4 overflow-y-auto">
                      {/* Use actual preview images */}
                      <div className="grid grid-cols-2 gap-3">
                        {[
                          "style_remix/previews/ghibli.jpg",
                          "style_remix/previews/pixar.png",
                          "style_remix/previews/claymation.webp",
                          "style_remix/previews/cyberpunk.webp",
                          "style_remix/previews/muppet.png",
                          "style_remix/previews/sketch.jpg",
                          "style_remix/previews/van_gogh.jpg", // Added Van Gogh
                          "style_remix/previews/watercolor.png", // Added Watercolor
                        ].map((imgSrc, index) => (
                          <div 
                            key={index} 
                            className="aspect-square bg-white/10 rounded-lg overflow-hidden hover:ring-2 hover:ring-remixr-magenta transition-all cursor-pointer group"
                          >
                            <img 
                              src={imgSrc} 
                              alt={`Style Preview ${index + 1}`} 
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Step 3: Result */}
                <div className={`absolute inset-0 transition-all duration-500 ease-in-out ${
                  activeStep === 2 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'
                }`}>
                  {/* Restructured using absolute positioning */}
                  <div className="h-full overflow-hidden relative bg-remixr-dark"> 
                    {/* Header */}
                    <div className="absolute top-0 left-0 right-0 h-14 p-4 border-b border-white/10 bg-remixr-dark z-10 flex items-center justify-center">
                      <h3 className="text-lg font-bold text-center">Your Remix</h3>
                    </div>
                    {/* Image Container */}
                    <div className="absolute top-14 bottom-14 left-0 right-0 overflow-hidden bg-gradient-to-br from-remixr-blueviolet/30 to-remixr-magenta/30">
                      <img 
                        src="style_remix/examples/ghibli/1_ai.jpg" 
                        alt="Transformed result" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {/* Footer */}
                    <div className="absolute bottom-0 left-0 right-0 h-14 p-4 flex justify-between items-center bg-remixr-dark z-10">
                      <button className="px-4 py-2 bg-white/10 rounded-lg text-white">Save</button>
                      <button className="px-4 py-2 bg-gradient-to-r from-remixr-blueviolet to-remixr-magenta rounded-lg text-white">Share</button>
                    </div>
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
