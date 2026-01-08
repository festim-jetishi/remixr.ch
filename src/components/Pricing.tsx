
import React, { useState } from 'react';
// Force update check
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Star, Zap, Crown, ShieldCheck } from 'lucide-react';
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";

const PricingFeature: React.FC<{ children: React.ReactNode; included?: boolean }> = ({ children, included = true }) => (
  <div className="flex items-start space-x-3">
    <div className={cn("mt-1 p-0.5 rounded-full flex-shrink-0", included ? "bg-remixr-magenta" : "bg-white/10")}>
      <Check className="h-3 w-3 text-white" />
    </div>
    <span className={cn("text-sm", included ? "text-white/90" : "text-white/40 line-through")}>{children}</span>
  </div>
);

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(true);

  return (
    <section id="pricing" className="py-32 px-6 bg-black relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1000px] h-[600px] bg-gradient-to-r from-remixr-blueviolet/10 to-remixr-magenta/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <Badge variant="outline" className="mb-6 border-remixr-blueviolet/50 text-remixr-blueviolet px-4 py-1 text-sm bg-remixr-blueviolet/5">
            Unlock Full Potential
          </Badge>
          <h2 className="text-5xl md:text-6xl font-black mb-6 text-white tracking-tight">
            Simple, Transparent <span className="gradient-text">Pricing</span>
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto mb-8">
            Start for free. Upgrade for professional 4K results and unlimited creativity.
          </p>

          <div className="flex items-center justify-center gap-4 mb-4 relative z-50">
            <span
              onClick={() => setIsYearly(false)}
              className={cn("text-sm font-bold transition-colors cursor-pointer select-none", !isYearly ? "text-white" : "text-white/40")}
            >
              Weekly
            </span>
            <Switch checked={isYearly} onCheckedChange={setIsYearly} />
            <span
              onClick={() => setIsYearly(true)}
              className={cn("text-sm font-bold transition-colors cursor-pointer select-none", isYearly ? "text-white" : "text-white/40")}
            >
              Yearly <span className="text-remixr-magenta text-xs ml-1">(Save 90%)</span>
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto pt-8">
          {/* Free Tier */}
          <div className="rounded-[2rem] p-8 bg-white/5 border border-white/10 flex flex-col hover:bg-white/[0.07] transition-all duration-300">
            <div className="mb-8">
              <h3 className="text-xl font-bold text-white mb-2">Basic</h3>
              <div className="text-4xl font-black text-white mb-2">$0</div>
              <p className="text-white/50 text-sm">For trying out the magic.</p>
            </div>
            <div className="space-y-4 mb-8 flex-grow">
              <PricingFeature>10 free credits to start</PricingFeature>
              <PricingFeature>Standard resolution</PricingFeature>
              <PricingFeature included={false}>No Watermark</PricingFeature>

              <PricingFeature included={false}>Priority Processing</PricingFeature>
            </div>
            <Button variant="outline" className="w-full border-white/10 bg-white/5 hover:bg-white/10 h-12 rounded-xl">
              Get Started
            </Button>
          </div>

          {/* Pro Tier (Highlighted) */}
          <div className="relative rounded-[2rem] p-1 bg-gradient-to-b from-remixr-blueviolet to-remixr-magenta shadow-2xl shadow-remixr-magenta/20 transform md:-translate-y-8 flex flex-col z-20">
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-orange-500 to-pink-600 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg border border-white/20 whitespace-nowrap z-30">
              MOST POPULAR
            </div>

            <div className="bg-gray-900 rounded-[30px] p-8 h-full flex flex-col relative overflow-hidden">
              {/* Shine effect */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 blur-[50px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

              <div className="mb-8 relative">
                <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-remixr-blueviolet to-remixr-magenta mb-2 inline-flex items-center gap-2">
                  <Crown size={18} className="text-remixr-magenta" /> Professional
                </h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-black text-white">
                    {isYearly ? '$39.99' : '$7.99'}
                  </span>
                  <span className="text-white/60 font-medium">
                    /{isYearly ? 'year' : 'week'}
                  </span>
                </div>
                <p className="text-white/50 text-sm mt-2">
                  {isYearly ? 'Save 90% vs weekly' : 'Cancel anytime'}
                </p>
              </div>

              <div className="space-y-4 mb-8 flex-grow relative">
                <PricingFeature>
                  {isYearly ? (
                    <><strong>150 Credits</strong> (50% Bonus 1st mo)</>
                  ) : (
                    <><strong>50 Credits</strong> per week</>
                  )}
                </PricingFeature>
                <PricingFeature>{isYearly ? <strong>100 Credits</strong> : 'Top-up available'} monthly after</PricingFeature>
                <PricingFeature><strong>4K Ultra HD</strong> Upscaling</PricingFeature>
                <PricingFeature>No Watermarks</PricingFeature>

                <PricingFeature>Access to <strong>All 50+ Packs</strong></PricingFeature>
              </div>

              <Button className="w-full bg-white text-black hover:bg-gray-100 h-14 rounded-xl text-lg font-bold shadow-lg shadow-white/10 transition-transform hover:scale-[1.02]">
                {isYearly ? 'Start 3-Day Free Trial' : 'Get Started'}
              </Button>
              <p className="text-[10px] text-center text-white/30 mt-4">
                {isYearly ? 'Then $39.99/year. Cancel anytime.' : 'Auto-renews. Cancel anytime.'}
              </p>
            </div>
          </div>

          {/* Credits Tier */}
          <div className="rounded-[2rem] p-8 bg-white/5 border border-white/10 flex flex-col hover:bg-white/[0.07] transition-all duration-300">
            <div className="mb-8">
              <h3 className="text-xl font-bold text-white mb-2">Pay As You Go</h3>
              <div className="text-4xl font-black text-white mb-2">$9.99</div>
              <p className="text-white/50 text-sm">One-time payment.</p>
            </div>
            <div className="space-y-4 mb-8 flex-grow">
              <PricingFeature><strong>50 Standard Credits</strong></PricingFeature>
              <PricingFeature>Credits never expire</PricingFeature>
              <PricingFeature>Extends Free & Pro tiers</PricingFeature>
              <PricingFeature>Resolution matches active plan</PricingFeature>
              <PricingFeature included={false}>No Pro Features</PricingFeature>
            </div>
            <Button variant="outline" className="w-full border-white/10 bg-white/5 hover:bg-white/10 h-12 rounded-xl">
              Buy Credits
            </Button>
          </div>
        </div>

        <div className="mt-16 flex justify-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-5 w-5 text-white" />
            <span className="text-sm text-white font-medium">Secure Payment</span>
          </div>
          <div className="flex items-center gap-2">
            <Star className="h-5 w-5 text-white" />
            <span className="text-sm text-white font-medium">Satisfaction Guaranteed</span>
          </div>
        </div>
      </div>
    </section>
  );
}
