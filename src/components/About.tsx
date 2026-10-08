import React, { useState } from 'react';
import { Check, ArrowRight, Shield, Zap, Sparkles } from 'lucide-react';
import { GYM_DATA } from '@/src/config/gymData';

interface AboutProps {
  onOpenBooking: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenBooking }) => {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      num: '01',
      title: '24/7 BIOMETRIC ACCESS',
      shortDesc: 'Your schedule should never limit your ambition.',
      fullDesc:
        'Biometric keyfob access 24 hours a day, 365 days a year. Train before sunrise, late at night, or on holidays without waiting for doors to unlock.',
      benefit: 'Worldwide reciprocity across 5,000+ Anytime Fitness clubs globally.',
      icon: Shield,
    },
    {
      num: '02',
      title: 'WORLD-CLASS BIOMECHANICS',
      shortDesc: 'Engineered for maximum tension and joint longevity.',
      fullDesc:
        'Imported selectorized pin-loaded stacks, calibrated Olympic power platforms, and dumbbells up to 50kg. Every machine is meticulously aligned to natural anatomical curves.',
      benefit: 'Hammer Strength, Eleiko, and Life Fitness competition-grade equipment.',
      icon: Zap,
    },
    {
      num: '03',
      title: 'PERSONALIZED COACHING',
      shortDesc: 'No cookie-cutter routines or generic advice.',
      fullDesc:
        'Every body requires tailored stimulus. Our certified coaches build customized progressive overload routines, correct postural asymmetries, and audit your recovery weekly.',
      benefit: 'Integrated Fit3D body scans and dedicated WhatsApp coach direct line.',
      icon: Sparkles,
    },
  ];

  return (
    <section id="about" className="py-24 sm:py-32 bg-[#050505] relative overflow-hidden">
      {/* Subtle background ambient glow */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-violet-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Large Cinematic Gym Image */}
          <div className="lg:col-span-6 relative">
            <div className="relative group rounded-sm overflow-hidden border border-white/10 shadow-2xl bg-[#0b0b0b]">
              <div className="aspect-[4/3] sm:aspect-[16/11] overflow-hidden">
                <img
                  src={GYM_DATA.facilities[2]?.image || GYM_DATA.hero.image}
                  alt="Anytime Fitness Vijay Nagar immaculate modern equipment floor"
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105 filter brightness-90"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              </div>

              {/* Scrim Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

              {/* Architectural Accent Tag */}
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-xs text-zinc-300 font-medium">
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-violet-400 font-bold">CLUB ENVIRONMENT</div>
                  <div className="text-white font-semibold">Vijay Nagar, Jabalpur Facility</div>
                </div>
                <div className="px-2.5 py-1 bg-black/70 border border-white/10 rounded text-[11px] font-mono tabular-nums text-zinc-300">
                  EST. 2026
                </div>
              </div>
            </div>

            {/* Subtle decorative frame element */}
            <div className="absolute -bottom-4 -right-4 w-28 h-28 border-r-2 border-b-2 border-violet-600/40 pointer-events-none hidden sm:block" />
          </div>

          {/* Right Column: Copy & Feature Blocks */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Small Label */}
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-violet-400 uppercase mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-violet-500" />
              <span>WHY ANYTIME FITNESS</span>
            </div>

            {/* Massive Heading */}
            <h2 className="font-athletic text-4xl sm:text-5xl md:text-6xl text-white font-black leading-[0.95] tracking-tight uppercase mb-6">
              MORE THAN A GYM.
              <br />
              <span className="text-violet-400">IT&apos;S YOUR NEXT LEVEL.</span>
            </h2>

            {/* Paragraph */}
            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed mb-8">
              Anytime Fitness Vijay Nagar is designed for people who want serious results, premium equipment, expert guidance, and a motivating training environment. No crowds fighting over weights, no broken machines, and no uncertified trainers.
            </p>

            {/* Three Premium Feature Blocks */}
            <div className="space-y-4 mb-8">
              {features.map((feat, idx) => {
                const isSelected = activeFeature === idx;
                return (
                  <div
                    key={feat.num}
                    onClick={() => setActiveFeature(idx)}
                    className={`cursor-pointer p-4 sm:p-5 rounded-sm transition-all duration-200 border ${
                      isSelected
                        ? 'bg-[#111111] border-violet-500/60 shadow-lg shadow-violet-950/20'
                        : 'bg-[#0b0b0b] border-white/5 hover:border-white/15'
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      {/* Editorial Number */}
                      <span className="font-athletic text-2xl sm:text-3xl font-black text-violet-400 shrink-0">
                        {feat.num}
                      </span>

                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h3 className="font-heading text-sm sm:text-base font-bold text-white tracking-wide uppercase">
                            {feat.title}
                          </h3>
                          <span className="text-[11px] text-zinc-500 font-mono hidden sm:inline">
                            {feat.shortDesc}
                          </span>
                        </div>

                        <p className="text-xs sm:text-sm text-zinc-400 mt-1.5 leading-relaxed">
                          {feat.fullDesc}
                        </p>

                        {isSelected && (
                          <div className="mt-3 pt-3 border-t border-white/10 flex items-center gap-2 text-xs text-violet-300 font-medium animate-in fade-in">
                            <Check className="w-3.5 h-3.5 text-violet-400 shrink-0" />
                            <span>{feat.benefit}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Section CTA */}
            <div>
              <button
                onClick={onOpenBooking}
                className="group inline-flex items-center gap-2.5 px-6 py-3 bg-white/5 hover:bg-violet-600 text-white text-xs font-bold tracking-widest uppercase rounded-sm border border-white/15 hover:border-violet-500 transition-all duration-200"
              >
                <span>BOOK A FREE FACILITY WALKTHROUGH</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
