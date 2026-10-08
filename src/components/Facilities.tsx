import React, { useState } from 'react';
import { ArrowUpRight, Maximize2 } from 'lucide-react';
import { GYM_DATA } from '@/src/config/gymData';

export const Facilities: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('ALL');
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const categories = ['ALL', 'STRENGTH & POWER', 'FUNCTIONAL TURF', 'TARGETED ISOLATION'];

  const filteredFacilities =
    activeFilter === 'ALL'
      ? GYM_DATA.facilities
      : GYM_DATA.facilities.filter(
          (f) => f.category.toUpperCase().includes(activeFilter) || activeFilter.includes(f.category.toUpperCase())
        );

  return (
    <section id="facilities" className="py-24 sm:py-32 bg-[#080808] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-violet-400 uppercase mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-violet-500" />
              <span>FACILITY & INFRASTRUCTURE</span>
            </div>
            <h2 className="font-athletic text-4xl sm:text-6xl md:text-7xl text-white font-black leading-[0.9] tracking-tight uppercase">
              ENGINEERED
              <br />
              <span className="text-zinc-400">FOR PERFORMANCE.</span>
            </h2>
          </div>

          {/* Interactive Filter Tabs (Buttons with click handlers per constitution) */}
          <div className="flex flex-wrap items-center gap-2 bg-[#111111] p-1.5 rounded-sm border border-white/5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-3 py-1.5 text-[11px] font-bold tracking-wider uppercase rounded-sm transition-all whitespace-nowrap ${
                  activeFilter === cat
                    ? 'bg-violet-600 text-white shadow-md shadow-violet-900/50'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Asymmetrical Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {filteredFacilities.map((facility, index) => {
            // Asymmetrical layout: first item takes col-span-7, second col-span-5, third col-span-5, fourth col-span-7
            const isWide = index % 3 === 0;
            const colSpanClass = isWide ? 'md:col-span-7' : 'md:col-span-5';

            return (
              <div
                key={facility.id}
                onClick={() => setLightboxImage(facility.image)}
                className={`${colSpanClass} group relative h-[380px] sm:h-[440px] rounded-sm overflow-hidden border border-white/10 hover:border-violet-500/60 transition-all duration-300 bg-[#0d0d0d] cursor-pointer shadow-xl`}
              >
                {/* Image with zoom on hover */}
                <img
                  src={facility.image}
                  alt={facility.title}
                  className="w-full h-full object-cover object-center filter brightness-[0.70] group-hover:brightness-[0.85] group-hover:scale-105 transition-all duration-700 ease-out"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />

                {/* Dark Scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10 group-hover:from-black/85 transition-colors" />

                {/* Top Overlay Badge */}
                <div className="absolute top-5 left-5 right-5 flex items-center justify-between z-10">
                  <span className="text-[10px] font-bold tracking-widest uppercase text-violet-300 bg-black/60 px-2.5 py-1 rounded-sm border border-white/10 backdrop-blur-sm">
                    {facility.category}
                  </span>

                  <div className="w-8 h-8 rounded-sm bg-black/60 border border-white/10 flex items-center justify-center text-zinc-300 group-hover:text-white group-hover:bg-violet-600 group-hover:border-violet-500 transition-all">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Bottom Overlay Content */}
                <div className="absolute bottom-5 left-5 right-5 z-10 transform transition-transform duration-300">
                  <h3 className="font-athletic text-2xl sm:text-3xl font-bold text-white tracking-wide uppercase mb-1.5 group-hover:text-violet-300 transition-colors">
                    {facility.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-zinc-300 mb-3 max-w-xl line-clamp-2">
                    {facility.description}
                  </p>

                  <div className="flex items-center justify-between pt-2.5 border-t border-white/10 text-xs text-zinc-400">
                    <span className="font-mono text-[11px] text-zinc-300">{facility.specs}</span>
                    <span className="flex items-center gap-1 font-bold text-violet-400 uppercase tracking-wider text-[11px] opacity-0 group-hover:opacity-100 transition-opacity">
                      <span>VIEW FULL</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Preview */}
      {lightboxImage && (
        <div
          onClick={() => setLightboxImage(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-lg animate-in fade-in"
        >
          <div className="relative max-w-5xl max-h-[90vh] overflow-hidden rounded-sm border border-white/20">
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute top-4 right-4 z-10 px-3 py-1.5 bg-black/70 text-white rounded text-xs font-bold hover:bg-violet-600 transition-colors"
            >
              CLOSE ✕
            </button>
            <img
              src={lightboxImage}
              alt="Facility preview high-res"
              className="max-h-[85vh] w-auto object-contain"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      )}
    </section>
  );
};
