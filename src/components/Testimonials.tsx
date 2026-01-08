import React from 'react';
import { Star, Quote } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';

interface TestimonialProps {
    quote: string;
    author: string;
    role: string;
    rating: number;
    category: string;
}

const TestimonialCard: React.FC<TestimonialProps> = ({ quote, author, role, rating, category }) => (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 relative flex flex-col h-[300px] hover:bg-white/10 transition-colors duration-300 w-[350px] flex-shrink-0 mx-4 backdrop-blur-sm">
        <div className="flex items-center justify-between mb-4">
            <div className="flex gap-1">
                {[...Array(rating)].map((_, i) => (
                    <Star key={i} size={14} className="text-yellow-500 fill-yellow-500" />
                ))}
            </div>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-white/5 text-white/40 uppercase tracking-wider border border-white/5">
                {category}
            </span>
        </div>

        <p className="text-white/80 mb-6 text-sm leading-relaxed flex-grow font-light">"{quote}"</p>

        <div className="mt-auto flex items-center gap-3 border-t border-white/5 pt-4">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-white/20 to-white/5 flex items-center justify-center text-xs font-bold text-white border border-white/10">
                {author.charAt(0)}
            </div>
            <div>
                <h4 className="font-bold text-white text-sm">{author}</h4>
                <p className="text-[10px] text-white/40 uppercase tracking-wide">{role}</p>
            </div>
        </div>
    </div>
);

export default function Testimonials() {
    const testimonials1 = [
        { quote: "I was skeptical, but the dating profile pack actually matched the vibe I was going for.", author: "Alex M.", role: "User", rating: 5, category: "Dating" },
        { quote: "Needed a headshot for my CV but didn't have time for a photoshoot. This worked surprisingly well.", author: "Sarah J.", role: "Job Seeker", rating: 5, category: "Career" },
        { quote: "The anime styles are fun. Spamming my group chat with different versions of us.", author: "Jamie K.", role: "Student", rating: 5, category: "Fun" },
        { quote: "Used the room glow up on my messy bedroom. Gave me good ideas.", author: "David L.", role: "DIY", rating: 5, category: "Home" },
        { quote: "Honestly wasn't expecting it to look this real. The lighting is spot on.", author: "Chris P.", role: "Photographer", rating: 5, category: "Quality" },
        { quote: "Got more matches in a week than the last 3 months. Tinder Gold pack is legit.", author: "Ryan T.", role: "Single", rating: 5, category: "Dating" },
    ];

    const testimonials2 = [
        { quote: "My friends didn't believe these were AI. They thought I hired a pro.", author: "Emma W.", role: "Influencer", rating: 5, category: "Social" },
        { quote: "Saved me so much money on staging photos for my listing.", author: "Mark D.", role: "Realtor", rating: 5, category: "Business" },
        { quote: "The 90s yearbook pack is hilarious and weirdly accurate.", author: "Tom H.", role: "User", rating: 5, category: "Nostalgia" },
        { quote: "Finally a good profile pic where I'm actually smiling naturally.", author: "Lisa B.", role: "User", rating: 5, category: "Selfie" },
        { quote: "Super easy to use. Just uploaded one selfie and got 50 options.", author: "Kevin N.", role: "Dad", rating: 5, category: "Ease of Use" },
        { quote: "Background replacement is flawless. Put myself in a cyber city.", author: "Sam R.", role: "Gamer", rating: 5, category: "Creative" },
    ];

    return (
        <section id="social" className="py-24 relative bg-black overflow-hidden">
            {/* Background */}
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
            <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

            <div className="max-w-[1920px] mx-auto relative z-10">
                <div className="text-center mb-16 animate-fade-in px-6">
                    <Badge variant="outline" className="mb-6 border-white/10 text-white/60 px-4 py-1 text-sm bg-white/5">
                        Wall of Love
                    </Badge>
                    <h2 className="text-4xl md:text-5xl font-black mb-6 text-white tracking-tight">
                        What People Are <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">Saying</span>
                    </h2>
                    <p className="text-xl text-white/60 max-w-2xl mx-auto">
                        Join the community creating amazing photos every day.
                    </p>
                </div>

                {/* Marquee Row 1 (Left) */}
                <div className="relative w-full overflow-hidden mask-image-linear-to-r mb-8">
                    <div className="flex animate-scroll-left w-max hover:pause">
                        {[...testimonials1, ...testimonials1].map((t, i) => (
                            <TestimonialCard key={`r1-${i}`} {...t} />
                        ))}
                    </div>
                </div>

                {/* Marquee Row 2 (Right) */}
                <div className="relative w-full overflow-hidden mask-image-linear-to-r">
                    <div className="flex animate-scroll-right w-max hover:pause">
                        {[...testimonials2, ...testimonials2].map((t, i) => (
                            <TestimonialCard key={`r2-${i}`} {...t} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
