import React from 'react';
import { Award, Instagram, Linkedin, MessageSquare, ArrowUpRight } from 'lucide-react';
import { GYM_DATA } from '@/src/config/gymData';

interface TrainersProps {
  onOpenBooking: (prefill?: { plan?: string; goal?: string }) => void;
}

export const Trainers: React.FC<TrainersProps> = ({ onOpenBooking }) => {
  return (
    <section id="trainers" className="py-24 sm:py-32 bg-[#050505] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-violet-400 uppercase mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-violet-500" />
              <span>ELITE COACHING ROSTER</span>
            </div>
            <h2 className="font-athletic text-4xl sm:text-6xl md:text-7xl text-white font-black leading-[0.9] tracking-tight uppercase">
              MEET THE PEOPLE
              <br />
              <span className="text-zinc-400">WHO PUSH YOU FURTHER.</span>
            </h2>
          </div>

          <p className="text-sm sm:text-base text-zinc-400 max-w-md font-normal leading-relaxed">
            Our coaches don&apos;t just count reps. They hold internationally accredited certifications, analyze movement patterns, and build periodized protocols for real humans with busy schedules.
          </p>
        </div>

        {/* 3 Editorial Trainer Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {GYM_DATA.trainers.map((trainer) => (
            <div
              key={trainer.id}
              className="group bg-[#0c0c0c] rounded-sm overflow-hidden border border-white/10 hover:border-violet-500/60 transition-all duration-300 flex flex-col justify-between shadow-xl"
            >
              {/* Image Container with 3:4 Aspect Ratio */}
              <div className="relative aspect-[3/4] overflow-hidden bg-black">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="w-full h-full object-cover object-top filter grayscale contrast-115 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />

                {/* Scrim Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0c] via-transparent to-transparent pointer-events-none" />

                {/* Experience Tag */}
                <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-md border border-white/10 px-2.5 py-1 rounded text-[11px] font-mono text-zinc-300">
                  {trainer.experience}
                </div>
              </div>

              {/* Editorial Card Body */}
              <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between -mt-6 relative z-10">
                <div>
                  <div className="text-[11px] font-bold tracking-widest text-violet-400 uppercase mb-1">
                    {trainer.specialty}
                  </div>

                  <h3 className="font-athletic text-2xl sm:text-3xl font-bold text-white tracking-wide uppercase mb-2">
                    {trainer.name}
                  </h3>

                  <div className="text-xs text-zinc-400 font-medium mb-4">
                    {trainer.role}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-xs text-zinc-300 italic mb-5 border-l-2 border-violet-500/60 pl-3 leading-relaxed">
                    &ldquo;{trainer.quote}&rdquo;
                  </blockquote>

                  {/* Certifications list */}
                  <div className="mb-6 space-y-1.5">
                    <div className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider">
                      CREDENTIALS
                    </div>
                    {trainer.certifications.map((cert, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-zinc-300">
                        <Award className="w-3 h-3 text-violet-400 shrink-0" />
                        <span>{cert}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Row */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-2.5 text-zinc-400">
                    <span className="p-2 rounded bg-white/5 hover:bg-violet-600/30 hover:text-white transition-colors cursor-pointer" title="Social">
                      <Instagram className="w-3.5 h-3.5" />
                    </span>
                    <span className="p-2 rounded bg-white/5 hover:bg-violet-600/30 hover:text-white transition-colors cursor-pointer" title="Professional profile">
                      <Linkedin className="w-3.5 h-3.5" />
                    </span>
                  </div>

                  <button
                    onClick={() => onOpenBooking({ goal: `Coaching with ${trainer.name}` })}
                    className="group/btn inline-flex items-center gap-1.5 text-xs font-bold text-white hover:text-violet-400 uppercase tracking-wider transition-colors"
                  >
                    <span>CONSULT COACH</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
