
import React from 'react';
import { Check, X } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Comparison() {
    const comparisonData = [
        { feature: "Dating-specific packs", remixr: true, others: false, avatar: false },
        { feature: "Reference image matching", remixr: true, others: false, avatar: false },
        { feature: "Virtual outfit try-on", remixr: true, others: "Limited", avatar: false },
        { feature: "Background replacement", remixr: true, others: true, avatar: "Some" },
        { feature: "4K quality output", remixr: true, others: "Varies", avatar: false },
        { feature: "Interior design mode", remixr: true, others: false, avatar: false },
        { feature: "50+ specialized tools", remixr: true, others: "Generic filters", avatar: false },
        { feature: "Curated pack system", remixr: true, others: false, avatar: "Some" },
        { feature: "One-tap Quick Actions", remixr: true, others: false, avatar: false },
    ];

    const renderValue = (val: boolean | string) => {
        if (val === true) return <Check className="text-green-500 mx-auto" size={24} />;
        if (val === false) return <X className="text-red-500/50 mx-auto" size={24} />;
        return <span className="text-white/60 text-sm">{val}</span>;
    };

    return (
        <section className="py-24 px-6 relative bg-remixr-darker border-y border-white/5">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-16 animate-fade-in">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Why <span className="gradient-text">Remixr</span>?
                    </h2>
                    <p className="text-xl text-white/70 max-w-2xl mx-auto">
                        See how we stack up against basic photo editors and avatar generators.
                    </p>
                </div>

                <div className="overflow-x-auto rounded-3xl border border-white/10 shadow-2xl bg-black/40 backdrop-blur-sm">
                    <table className="w-full text-center border-collapse">
                        <thead>
                            <tr className="bg-white/5 border-b border-white/10">
                                <th className="p-6 text-left text-lg font-medium text-white/80 w-1/3 min-w-[200px]">Feature</th>
                                <th className="p-6 text-xl font-bold text-white bg-remixr-blueviolet/10 border-x border-remixr-blueviolet/20 w-1/4 min-w-[150px]">
                                    <span className="gradient-text">Remixr</span>
                                </th>
                                <th className="p-6 text-lg font-medium text-white/60 w-1/4 min-w-[150px]">Generic Editors</th>
                                <th className="p-6 text-lg font-medium text-white/60 w-1/4 min-w-[150px]">Avatar Apps</th>
                            </tr>
                        </thead>
                        <tbody>
                            {comparisonData.map((row, index) => (
                                <tr key={index} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                                    <td className="p-5 text-left text-white/90 font-medium">{row.feature}</td>
                                    <td className="p-5 bg-remixr-blueviolet/5 border-x border-remixr-blueviolet/10 relative">
                                        {row.remixr === true && (
                                            <div className="absolute inset-0 bg-remixr-blueviolet/5 z-0"></div>
                                        )}
                                        <div className="relative z-10">{renderValue(row.remixr)}</div>
                                    </td>
                                    <td className="p-5 text-white/60">{renderValue(row.others)}</td>
                                    <td className="p-5 text-white/60">{renderValue(row.avatar)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
}
