
import React from 'react';
import { Button } from "@/components/ui/button";
import { Check } from 'lucide-react';

const PricingFeature: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="flex items-center space-x-3">
    <Check className="h-5 w-5 text-remixr-magenta flex-shrink-0" />
    <span className="text-white/80">{children}</span>
  </div>
);

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 px-6 bg-remixr-darker relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-remixr-blueviolet/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-remixr-magenta/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Unlock</span> Remixr Pro
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Take your creativity to the next level with unlimited access to all premium features.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <div className="space-y-6 animate-fade-in">
              <h3 className="text-3xl font-bold mb-6">Why Go Pro?</h3>
              
              <div className="space-y-4">
                <PricingFeature>Unlimited AI transformations with no daily limits</PricingFeature>
                <PricingFeature>Access to all premium styles and filters (100+)</PricingFeature>
                <PricingFeature>Higher resolution outputs for professional quality</PricingFeature>
                <PricingFeature>Remove watermarks from all generated images</PricingFeature>
                <PricingFeature>Priority AI processing speed</PricingFeature>
                <PricingFeature>Early access to new features and styles</PricingFeature>
                <PricingFeature>Ad-free experience throughout the app</PricingFeature>
              </div>
              
              <div className="pt-6">
                <Button className="animated-gradient-btn text-white font-semibold py-6 px-8 text-lg w-full">
                  Upgrade to Pro
                </Button>
                <p className="text-sm text-white/50 mt-3 text-center">
                  Cancel anytime. See our <a href="/terms" className="underline hover:text-white">Terms & Conditions</a> for details.
                </p>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2 animate-fade-in" style={{animationDelay: '0.3s'}}>
            <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/5 p-1">
              <div className="aspect-[4/3] w-full relative overflow-hidden rounded-xl">
                <div className="absolute inset-0 flex items-center justify-center p-8">
                  {/* Split display showing free vs pro */}
                  <div className="w-full h-full flex">
                    <div className="w-1/2 relative overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05" 
                        alt="Free version" 
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-remixr-dark/80"></div>
                      <div className="absolute top-4 left-4 bg-remixr-dark/80 text-white text-xs px-3 py-1 rounded-full">
                        Free
                      </div>
                    </div>
                    <div className="w-1/2 relative overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1500673922987-e212871fec22" 
                        alt="Pro version" 
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                      <div className="absolute top-4 right-4 bg-gradient-to-r from-remixr-blueviolet to-remixr-magenta text-white text-xs px-3 py-1 rounded-full">
                        Pro
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-2xl font-bold gradient-text">Remixr Pro</h4>
                  <div className="flex flex-col items-end">
                    <span className="text-xl font-bold text-white">$4.99</span>
                    <span className="text-sm text-white/60">per month</span>
                  </div>
                </div>
                <p className="text-white/70">
                  Unlock unlimited transformations and all premium features for less than a coffee.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
