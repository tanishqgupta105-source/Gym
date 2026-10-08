import React from 'react';
import { Quote, Star, CheckCircle } from 'lucide-react';
import { GYM_DATA } from '@/src/config/gymData';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 bg-[#050505] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-violet-400 uppercase mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-violet-500" />
              <span>PROVEN TRANSFORMATIONS</span>
            </div>
            <h2 className="font-athletic text-4xl sm:text-6xl md:text-7xl text-white font-black leading-[0.9] tracking-tight uppercase">
              REAL PEOPLE.
              <br />
              <span className="text-zinc-400">REAL PROGRESS.</span>
            </h2>
          </div>

          <p className="text-sm sm:text-base text-zinc-400 max-w-md font-normal leading-relaxed">
            No synthetic hype. Real members from Vijay Nagar and Jabalpur who committed to the process, showed up consistently, and rebuilt their lives.
          </p>
        </div>

        {/* 3 Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {GYM_DATA.testimonials.map((test) => (
            <div
              key={test.id}
              className="bg-[#0b0b0b] rounded-sm p-7 sm:p-8 border border-white/10 hover:border-violet-500/50 transition-all duration-300 flex flex-col justify-between shadow-xl relative group"
            >
              {/* Quote Icon */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-1 text-violet-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current text-violet-400" />
                  ))}
                </div>
                <Quote className="w-7 h-7 text-white/10 group-hover:text-violet-500/30 transition-colors" />
              </div>

              {/* Quote Text */}
              <blockquote className="text-sm text-zinc-300 leading-relaxed mb-6 font-normal">
                &ldquo;{test.quote}&rdquo;
              </blockquote>

              {/* Verified Outcome & Person Info */}
              <div className="pt-6 border-t border-white/10">
                {/* Metric pill replacement with clean unboxed text */}
                <div className="flex items-center gap-2 text-xs font-mono text-violet-300 mb-3">
                  <span className="font-bold">{test.achievement}</span>
                  <span className="text-zinc-600">·</span>
                  <span className="text-zinc-400">{test.metric}</span>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-athletic text-lg font-bold text-white tracking-wide uppercase">
                      {test.name}
                    </h4>
                    <div className="text-xs text-zinc-400">{test.location}</div>
                  </div>

                  <div className="flex items-center gap-1 text-[11px] text-zinc-400 font-medium">
                    <CheckCircle className="w-3.5 h-3.5 text-violet-400" />
                    <span>Verified</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
