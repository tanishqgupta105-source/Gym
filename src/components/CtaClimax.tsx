import React from 'react';
import { ArrowUpRight, Calendar, Sparkles } from 'lucide-react';
import { GYM_DATA } from '@/src/config/gymData';

interface CtaClimaxProps {
  onOpenBooking: () => void;
}

export const CtaClimax: React.FC<CtaClimaxProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative py-28 sm:py-36 bg-[#050505] overflow-hidden border-t border-white/10">
      {/* Background Cinematic Photo with Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src={GYM_DATA.hero.image}
          alt="Anytime Fitness intense training atmosphere"
          className="w-full h-full object-cover object-center filter brightness-[0.28] contrast-125"
          referrerPolicy="no-referrer"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#050505]/75 to-[#050505]" />
        {/* Subtle Violet Center Halo */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-violet-600/20 rounded-full blur-[180px] pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Label */}
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-violet-950/60 border border-violet-700/40 rounded-sm text-xs font-bold tracking-widest text-violet-300 uppercase mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          <span>JOIN ANYTIME FITNESS VIJAY NAGAR</span>
        </div>

        {/* Climax Headline */}
        <h2 className="font-athletic text-5xl sm:text-7xl md:text-8xl text-white font-black leading-[0.88] tracking-tight uppercase mb-6 drop-shadow-2xl">
          READY TO BECOME
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-200 via-white to-violet-400">
            YOUR STRONGEST SELF?
          </span>
        </h2>

        {/* Subheading */}
        <p className="text-base sm:text-xl text-zinc-300 max-w-xl mx-auto mb-10 font-normal leading-relaxed text-balance">
          Your first step is only one workout away. Tour our Vijay Nagar facility, test our Olympic equipment, and consult with our head coach—completely free.
        </p>

        {/* Two High-Conversion Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5">
          <button
            onClick={onOpenBooking}
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 px-9 py-4 bg-violet-600 hover:bg-violet-500 active:scale-[0.98] text-white text-sm font-bold tracking-widest uppercase rounded-sm shadow-2xl shadow-violet-950 hover:shadow-violet-600/40 transition-all duration-200"
          >
            <span>START YOUR JOURNEY</span>
            <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </button>

          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-white/10 hover:bg-white/15 active:scale-[0.98] text-white text-sm font-bold tracking-widest uppercase rounded-sm border border-white/20 backdrop-blur-md transition-all duration-200"
          >
            <Calendar className="w-4 h-4 text-violet-400" />
            <span>BOOK A FREE TOUR</span>
          </button>
        </div>

        {/* Reassurance text */}
        <div className="mt-8 text-xs text-zinc-500 flex items-center justify-center gap-4 flex-wrap">
          <span>✓ No High-Pressure Sales</span>
          <span>✓ 100% Free VIP Day Pass</span>
          <span>✓ Complete Machine Walkthrough</span>
        </div>
      </div>
    </section>
  );
};
