import React from 'react';
import { ArrowUpRight, ChevronDown, ShieldCheck, Clock, Award } from 'lucide-react';
import { GYM_DATA } from '@/src/config/gymData';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#050505] pt-20 pb-16">
      {/* Cinematic Background Image with Measured Gradient Scrims */}
      <div className="absolute inset-0 z-0">
        <img
          src={GYM_DATA.hero.image}
          alt="Athlete strength training with barbell in luxury dark gym"
          className="w-full h-full object-cover object-center scale-105 animate-[pulse_10s_ease-in-out_infinite] filter brightness-[0.62] contrast-[1.12]"
          referrerPolicy="no-referrer"
          loading="eager"
        />
        {/* Multi-layered measured contrast scrim */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/70 to-[#050505]/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/90 via-[#050505]/50 to-transparent" />
        {/* Subtle radial violet accent glow */}
        <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-violet-600/15 rounded-full blur-[140px] pointer-events-none" />
      </div>

      {/* Main Hero Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-12 md:pt-16">
        <div className="max-w-4xl">
          {/* Small Location Label */}
          <div className="inline-flex items-center gap-2 mb-4 sm:mb-6 text-xs sm:text-sm font-semibold tracking-widest text-violet-400 uppercase">
            <span className="w-2 h-2 rounded-full bg-violet-500 animate-ping" />
            <span>{GYM_DATA.brand.locationName}</span>
            <span className="text-zinc-500">·</span>
            <span className="text-zinc-300">{GYM_DATA.brand.city}</span>
            <span className="text-zinc-500">·</span>
            <span className="text-zinc-400">MADHYA PRADESH</span>
          </div>

          {/* Main Massive Headline */}
          <h1 className="font-athletic text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-white font-black leading-[0.88] tracking-tight uppercase mb-6 sm:mb-8 drop-shadow-2xl">
            {GYM_DATA.hero.headlinePart1}
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-violet-300">
              {GYM_DATA.hero.headlinePart2}
            </span>
          </h1>

          {/* Supporting Text */}
          <p className="text-base sm:text-lg md:text-xl text-zinc-300 max-w-2xl font-normal leading-relaxed mb-8 sm:mb-10 text-balance">
            {GYM_DATA.hero.subheadline}
          </p>

          {/* Action Button Row */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-5 mb-12 sm:mb-16">
            <button
              onClick={onOpenBooking}
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-violet-600 hover:bg-violet-500 active:scale-[0.98] text-white text-sm font-bold tracking-widest uppercase rounded-sm shadow-xl shadow-violet-950/60 hover:shadow-violet-600/30 transition-all duration-200"
            >
              <span>START YOUR JOURNEY</span>
              <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </button>

            <a
              href="#facilities"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/10 active:scale-[0.98] text-zinc-200 hover:text-white text-sm font-bold tracking-widest uppercase rounded-sm border border-white/10 hover:border-white/20 backdrop-blur-sm transition-all duration-200"
            >
              <span>EXPLORE THE GYM</span>
            </a>
          </div>

          {/* Floating Mini-Stat Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 max-w-2xl">
            <div className="flex items-center gap-3 p-3.5 rounded-sm bg-black/60 border border-white/10 backdrop-blur-md hover:border-violet-500/40 transition-colors">
              <div className="p-2 rounded bg-violet-950/60 text-violet-400">
                <Clock className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-white tracking-wider">24/7 ACCESS</div>
                <div className="text-[11px] text-zinc-400">Train on your schedule</div>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3.5 rounded-sm bg-black/60 border border-white/10 backdrop-blur-md hover:border-violet-500/40 transition-colors">
              <div className="p-2 rounded bg-violet-950/60 text-violet-400">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-white tracking-wider">PREMIUM GEAR</div>
                <div className="text-[11px] text-zinc-400">Hammer Strength & Eleiko</div>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3.5 rounded-sm bg-black/60 border border-white/10 backdrop-blur-md hover:border-violet-500/40 transition-colors">
              <div className="p-2 rounded bg-violet-950/60 text-violet-400">
                <Award className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-white tracking-wider">EXPERT COACHES</div>
                <div className="text-[11px] text-zinc-400">CSCS & ACE certified</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle Animated Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden sm:flex flex-col items-center gap-1.5 opacity-60 hover:opacity-100 transition-opacity">
        <span className="text-[10px] tracking-widest uppercase text-zinc-400 font-semibold">SCROLL</span>
        <div className="w-5 h-9 rounded-full border border-white/20 flex items-start justify-center p-1">
          <div className="w-1.5 h-2 rounded-full bg-violet-400 animate-bounce" />
        </div>
      </div>
    </section>
  );
};
