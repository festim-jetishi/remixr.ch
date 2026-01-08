
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Heart, Briefcase, Clock, Palette, Star, Home, Sparkles, FolderOpen } from 'lucide-react';

interface Pack {
    id: string;
    title: string;
    description: string;
    image: string;
    count: number;
    popular?: boolean;
}

interface Category {
    id: string;
    name: string;
    icon: React.ReactNode;
    packs: Pack[];
}

const PackCard: React.FC<{ pack: Pack; index: number }> = ({ pack, index }) => {
    return (
        <div
            className={cn(
                "group relative rounded-3xl overflow-hidden aspect-[4/5] cursor-pointer border border-white/5 bg-gray-900 transition-all duration-500 hover:shadow-2xl hover:shadow-remixr-magenta/30 hover:-translate-y-2",
                "animate-in fade-in zoom-in-50 duration-500 fill-mode-backwards"
            )}
            style={{
                animationDelay: `${index * 0.1}s`,
                background: '#111',
                transform: 'translateZ(0)', // GPU acceleration fix for Safari border-radius
                WebkitMaskImage: '-webkit-radial-gradient(white, black)' // Fix for border-radius clipping during animation
            }}
        >
            <img
                src={pack.image}
                alt={pack.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:brightness-110"
                loading="lazy"
            />

            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-70 transition-opacity duration-500" />

            {/* Content */}
            <div className="absolute inset-x-0 bottom-0 p-6 transform transition-transform duration-500">
                <div className="flex items-center gap-2 mb-3">
                    {pack.popular && (
                        <span className="px-2.5 py-1 rounded-full bg-remixr-magenta text-white text-[10px] font-bold uppercase tracking-wider shadow-lg">
                            Trending
                        </span>
                    )}
                    <span className="px-2.5 py-1 rounded-full bg-white/10 backdrop-blur-md text-white/90 text-[10px] font-medium border border-white/10">
                        {pack.count} Styles
                    </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-2 leading-tight group-hover:text-remixr-blueviolet transition-colors duration-300">
                    {pack.title}
                </h3>

                <p className="text-white/70 text-sm leading-relaxed line-clamp-2 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-75">
                    {pack.description}
                </p>
            </div>

            {/* Top Right Icon */}
            <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center border border-white/10 opacity-0 group-hover:opacity-100 transition-all duration-500 rotate-45 group-hover:rotate-0">
                <Sparkles size={16} className="text-white" />
            </div>
        </div>
    );
};

export default function Packs() {
    const [activeCategory, setActiveCategory] = useState("dating");

    const categories: Category[] = [
        {
            id: "dating",
            name: "Dating",
            icon: <Heart size={16} />,
            packs: [
                { id: "tinder", title: "Tinder Gold", description: "Stand out with approachable, attractive photos designed for high match rates.", image: "/packs/pack_tinder_01/after_1.png", count: 6, popular: true },
                { id: "hinge", title: "Hinge Standout", description: "Personality-driven shots that spark conversation and show your best self.", image: "/packs/pack_hinge_01/after_3.png", count: 6 },
                { id: "bumble", title: "Bumble Best", description: "Confident and friendly portraits perfect for making the first move.", image: "/packs/pack_bumble_01/after_2.png", count: 6 },
                { id: "firstdate", title: "Dt Night Ready", description: "Look your absolute best for that first impression.", image: "/packs/pack_firstdate_01/after_1.png", count: 6 },
            ]
        },
        {
            id: "professional",
            name: "Career",
            icon: <Briefcase size={16} />,
            packs: [
                { id: "linkedin", title: "LinkedIn Pro", description: "Polished, professional photos that scream 'Hired'.", image: "/packs/pack_linkedin_01/after_1.png", count: 8, popular: true },
                { id: "corporate", title: "Executive", description: "High-end corporate style for leadership roles and board members.", image: "/packs/pack_serious_01/after_2.png", count: 8 },
                { id: "creative", title: "Creative Studio", description: "Artistic yet professional portraits for designers and artists.", image: "/packs/pack_contentcreator_01/after_1.png", count: 8 },
                { id: "speaker", title: "Keynote Speaker", description: "Commanding stage presence for your portfolio and press kit.", image: "/packs/pack_linkedin_nocr_01/after_3.png", count: 8 },
            ]
        },
        {
            id: "time_travel",
            name: "Time Travel",
            icon: <Clock size={16} />,
            packs: [
                { id: "90s", title: "90s Yearbook", description: "The classic high school throwback look everyone loves.", image: "/packs/pack_90s_01/after_1.png", count: 12, popular: true },
                { id: "y2k", title: "Y2K Pop Star", description: "Futuristic 2000s music video vibes.", image: "/packs/pack_y2k_01/after_1.png", count: 12 },
                { id: "80s", title: "80s Retro", description: "Neon lights, synthwave, and big hair.", image: "/packs/pack_80s_01/after_2.png", count: 12 },
                { id: "60s", title: "60s Vintage", description: "Classic film look from the swinging sixties.", image: "/packs/pack_60s_01/after_1.png", count: 12 },
            ]
        },
        {
            id: "art",
            name: "Art Styles",
            icon: <Palette size={16} />,
            packs: [
                { id: "ghibli", title: "Anime World", description: "Turn yourself into a character from a magical world.", image: "/packs/pack_ghibli_01/after_1.png", count: 10, popular: true },
                { id: "pixar", title: "3D Animation", description: "High-quality 3D character style fit for the big screen.", image: "/packs/pack_pixar_01/after_1.png", count: 10 },
                { id: "anime", title: "Shonen Hero", description: "Epic action protagonist transformations.", image: "/packs/pack_anime_01/after_1.png", count: 10 },
                { id: "sketch", title: "Pencil Sketch", description: "Hand-drawn artistic portraits with incredible detail.", image: "/packs/pack_sketch_01/after_1.png", count: 10 },
            ]
        },
        {
            id: "interior",
            name: "Interiors",
            icon: <Home size={16} />,
            packs: [
                { id: "realestate", title: "Virtual Staging", description: "Furnish empty rooms virtually to sell faster.", image: "/packs/pack_realestate_01/after_1.png", count: 5 },
                { id: "glowup", title: "Room Glow Up", description: "Modernize your living space instantly with AI.", image: "/packs/pack_roomglowup_01/after_1.png", count: 5, popular: true },
                { id: "rental", title: "Rental Friendly", description: "Design ideas that don't require renovation.", image: "/packs/pack_rentroom_01/after_1.png", count: 5 },
            ]
        }
    ];

    const activeCategoryData = categories.find(c => c.id === activeCategory);

    return (
        <section id="packs" className="py-32 px-6 relative bg-remixr-dark overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-remixr-blueviolet/10 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="max-w-[1800px] mx-auto relative z-10">
                <div className="flex flex-col items-center mb-20 animate-fade-in text-center max-w-4xl mx-auto">
                    <div className="flex items-center gap-2 mb-6">
                        <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/60 text-xs font-mono uppercase tracking-widest">
                            Library v2
                        </span>
                    </div>
                    <h2 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter text-white">
                        <span className="gradient-text">Infinite</span> Possibilities
                    </h2>

                    {/* Category Switcher - Centered & Larger */}
                    <div className="flex flex-wrap justify-center gap-4 mb-4">
                        {categories.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => setActiveCategory(cat.id)}
                                className={cn(
                                    "flex items-center space-x-3 px-8 py-4 rounded-full text-base font-bold transition-all duration-300 border",
                                    activeCategory === cat.id
                                        ? "bg-white text-black border-white shadow-[0_0_30px_rgba(255,255,255,0.2)] scale-105"
                                        : "bg-white/5 border-white/5 text-white/60 hover:text-white hover:bg-white/10 hover:border-white/10"
                                )}
                            >
                                {cat.icon}
                                <span>{cat.name}</span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Grid - Wider and punchier */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8 animate-fade-in pb-12">
                    {activeCategoryData?.packs.map((pack, idx) => (
                        // Using the generic PackCard defined above, ensuring it fits the new layout
                        <PackCard key={pack.id} pack={pack} index={idx} />
                    ))}
                </div>

                {/* Removed the "View All" button block entirely */}
            </div>
        </section>
    );
}
