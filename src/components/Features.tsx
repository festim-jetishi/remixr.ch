
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Paintbrush, Shirt, Zap, Camera, Home, User, Layers, Wand2, Sparkles, ScanLine, MoveRight } from 'lucide-react';

interface Tool {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
  badge?: string;
}

const FeaturePreview: React.FC<{ tool: Tool; isActive: boolean }> = ({ tool, isActive }) => {
  return (
    <div className={cn(
      "absolute inset-0 w-full h-full transition-all duration-700 ease-in-out",
      isActive ? "opacity-100 translate-x-0 scale-100" : "opacity-0 translate-x-8 scale-95 pointer-events-none"
    )}>
      <img
        src={tool.image}
        alt={tool.title}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

      {/* Simulated AI Scan Line Effect */}
      <div className={cn(
        "absolute inset-0 bg-gradient-to-b from-transparent via-remixr-magenta/20 to-transparent w-full h-[10%] blur-md",
        isActive ? "animate-scan-down" : "hidden"
      )}></div>

      <div className="absolute bottom-0 left-0 p-8">
        {tool.badge && (
          <Badge className="mb-4 bg-remixr-magenta hover:bg-remixr-magenta border-none text-white px-3 py-1 text-xs uppercase tracking-wide">
            {tool.badge}
          </Badge>
        )}
        <h3 className="text-3xl font-bold text-white mb-2">{tool.title}</h3>
        <p className="text-white/80 text-lg max-w-md">{tool.description}</p>
      </div>
    </div>
  );
};

const FeatureMenu: React.FC<{ tools: Tool[]; activeTool: string; onSelect: (id: string) => void }> = ({ tools, activeTool, onSelect }) => {
  return (
    <div className="flex flex-col space-y-2">
      {tools.map((tool) => (
        <button
          key={tool.id}
          onClick={() => onSelect(tool.id)}
          className={cn(
            "group flex items-center p-4 rounded-xl text-left transition-all duration-300 border border-transparent",
            activeTool === tool.id
              ? "bg-white/10 border-white/10 shadow-lg"
              : "hover:bg-white/5 hover:border-white/5"
          )}
        >
          <div className={cn(
            "p-3 rounded-lg mr-4 transition-colors",
            activeTool === tool.id ? "bg-remixr-magenta text-white" : "bg-white/5 text-white/50 group-hover:bg-white/10 group-hover:text-white"
          )}>
            {tool.icon}
          </div>
          <div>
            <h4 className={cn("font-bold text-lg", activeTool === tool.id ? "text-white" : "text-white/60 group-hover:text-white")}>
              {tool.title}
            </h4>
            {activeTool === tool.id && (
              <p className="text-sm text-white/50 animate-fade-in mt-1">
                Click to see range
              </p>
            )}
          </div>
          {activeTool === tool.id && (
            <MoveRight className="ml-auto text-remixr-magenta animate-pulse" />
          )}
        </button>
      ))}
    </div>
  );
};

export default function Features() {
  const [activeTab, setActiveTab] = useState("person");
  const [activePersonTool, setActivePersonTool] = useState("beauty");
  const [activeRoomTool, setActiveRoomTool] = useState("interior");

  const personTools: Tool[] = [
    {
      id: "beauty",
      title: "Beauty Studio",
      description: "Professional retouching engine. Whiten teeth, smooth skin, and perfect your complexion instantly.",
      icon: <Wand2 size={24} />,
      image: "/packs/pack_linkedin_01/after_1.png",
      badge: "Realism Engine v2"
    },
    {
      id: "outfit",
      title: "Virtual Wardrobe",
      description: "Try on hundreds of outfits. From high-fashion to casual streetwear, without changing clothes.",
      icon: <Shirt size={24} />,
      image: "/virtual_try_on/examples/result_1.png",
      badge: "Try-On Fabic Physics"
    },
    {
      id: "age",
      title: "Time Machine",
      description: "See your future self or travel back to your younger years with unmatched accuracy.",
      icon: <ScanLine size={24} />,
      image: "/packs/pack_90s_01/after_1.png"
    },
    {
      id: "hair",
      title: "Hairstyle Lab",
      description: "Experiment with cuts, colors, and styles before you visit the salon.",
      icon: <User size={24} />,
      image: "/style_remix/previews/cyberpunk.webp"
    }
  ];

  const roomTools: Tool[] = [
    {
      id: "interior",
      title: "Interior Redesign",
      description: "Complete room makeovers. Change style, flooring, and wall colors in one click.",
      icon: <Home size={24} />,
      image: "/packs/pack_roomglowup_01/after_1.png",
      badge: "Spatial Awareness"
    },
    {
      id: "staging",
      title: "Virtual Staging",
      description: "Furnish empty rooms with realistic 3D furniture. Perfect for real estate listings.",
      icon: <Layers size={24} />,
      image: "/room_design/examples/result_2.png"
    },
    {
      id: "lighting",
      title: "Atmosphere & Lighting",
      description: "Change day to night. Add warm, cozy lighting or dramatic cinematic shadows.",
      icon: <Zap size={24} />,
      image: "/room_design/examples/result_3.png"
    },
    {
      id: "declutter",
      title: "Magic Eraser",
      description: "Instantly remove clutter, old furniture, or mess to reveal the room's potential.",
      icon: <Sparkles size={24} />,
      image: "/packs/pack_roomglowup_01/before.png" // Showing original as 'messy' context, or ideally a clean version
    }
  ];

  return (
    <section id="features" className="py-32 px-6 relative bg-black/40 overflow-hidden">
      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-remixr-blueviolet/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <Badge variant="outline" className="mb-6 border-remixr-magenta/50 text-remixr-magenta px-4 py-1 text-sm">
            Magic Studio™
          </Badge>
          <h2 className="text-5xl md:text-6xl font-black mb-6 tracking-tight text-white">
            The <span className="gradient-text">World's Most Powerful</span> Mobile AI Editor
          </h2>
          <p className="text-xl text-white/60 max-w-3xl mx-auto">
            Not just filters. We reconstruct your reality using advanced generative models.
            Select a mode to explore the power.
          </p>
        </div>

        <Tabs defaultValue="person" className="w-full" onValueChange={setActiveTab}>
          <TabsList className="flex justify-center bg-transparent border-b border-white/10 w-full rounded-none h-16 p-0 mb-16 space-x-8">
            <TabsTrigger
              value="person"
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-remixr-blueviolet data-[state=active]:bg-transparent data-[state=active]:text-remixr-blueviolet text-white/60 text-xl font-bold px-8 h-full transition-all"
            >
              Person Mode
            </TabsTrigger>
            <TabsTrigger
              value="room"
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-remixr-magenta data-[state=active]:bg-transparent data-[state=active]:text-remixr-magenta text-white/60 text-xl font-bold px-8 h-full transition-all"
            >
              Room Mode
            </TabsTrigger>
          </TabsList>

          {/* Person Mode Content */}
          <TabsContent value="person" className="outline-none animate-in fade-in zoom-in-95 duration-500">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left: Tool Menu */}
              <FeatureMenu
                tools={personTools}
                activeTool={activePersonTool}
                onSelect={setActivePersonTool}
              />

              {/* Right: Interactive Preview */}
              <div className="relative aspect-[4/5] lg:aspect-square rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl bg-gray-900 group">
                {personTools.map(tool => (
                  <FeaturePreview
                    key={tool.id}
                    tool={tool}
                    isActive={activePersonTool === tool.id}
                  />
                ))}
                {/* Glass Overlay UI */}
                <div className="absolute top-6 right-6 flex gap-2">
                  <div className="bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-mono text-white/70 border border-white/10">
                    PRO 4K
                  </div>
                  <div className="bg-remixr-blueviolet/80 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-bold text-white shadow-lg shadow-remixr-blueviolet/20">
                    AI ACTIVE
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Room Mode Content */}
          <TabsContent value="room" className="outline-none animate-in fade-in zoom-in-95 duration-500">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left: Tool Menu */}
              <FeatureMenu
                tools={roomTools}
                activeTool={activeRoomTool}
                onSelect={setActiveRoomTool}
              />

              {/* Right: Interactive Preview */}
              <div className="relative aspect-[4/5] lg:aspect-square rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl bg-gray-900 group">
                {roomTools.map(tool => (
                  <FeaturePreview
                    key={tool.id}
                    tool={tool}
                    isActive={activeRoomTool === tool.id}
                  />
                ))}
                <div className="absolute top-6 right-6 flex gap-2">
                  <div className="bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-mono text-white/70 border border-white/10">
                    PRO 4K
                  </div>
                  <div className="bg-remixr-magenta/80 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-bold text-white shadow-lg shadow-remixr-magenta/20">
                    SPATIAL AI
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
