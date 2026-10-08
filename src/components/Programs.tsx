import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle2, ChevronRight, Sparkles } from 'lucide-react';
import { GYM_DATA } from '@/src/config/gymData';

interface ProgramsProps {
  onOpenBooking: (prefill?: { plan?: string; goal?: string }) => void;
}

export const Programs: React.FC<ProgramsProps> = ({ onOpenBooking }) => {
  const [selectedProgram, setSelectedProgram] = useState<string | null>(null);

  const activeModalProgram = GYM_DATA.programs.find((p) => p.id === selectedProgram);

  return (
    <section id="programs" className="py-24 sm:py-32 bg-[#050505] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-violet-400 uppercase mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-violet-500" />
              <span>SPECIALIZED CURRICULUM</span>
            </div>
            <h2 className="font-athletic text-4xl sm:text-6xl md:text-7xl text-white font-black leading-[0.9] tracking-tight uppercase">
              TRAIN FOR
              <br />
              <span className="text-zinc-400">WHAT YOU WANT.</span>
            </h2>
          </div>

          <p className="text-sm sm:text-base text-zinc-400 max-w-md font-normal leading-relaxed">
            Every physique goal demands tailored stimulus, volume management, and recovery protocols. Choose the discipline engineered for your outcome.
          </p>
        </div>

        {/* 6 Program Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {GYM_DATA.programs.map((program) => (
            <div
              key={program.id}
              onClick={() => setSelectedProgram(program.id)}
              className="group relative h-[420px] rounded-sm overflow-hidden border border-white/10 hover:border-violet-500/70 transition-all duration-300 cursor-pointer bg-[#0c0c0c] flex flex-col justify-between p-6 sm:p-7 shadow-xl hover:shadow-2xl hover:shadow-violet-950/40"
            >
              {/* Background Image with Hover Scale */}
              <div className="absolute inset-0 z-0 overflow-hidden">
                <img
                  src={program.bgImage}
                  alt={program.title}
                  className="w-full h-full object-cover object-center filter brightness-[0.38] contrast-125 transition-transform duration-700 ease-out group-hover:scale-110 group-hover:brightness-[0.45]"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-transparent" />
                <div className="absolute inset-0 bg-violet-950/10 group-hover:bg-violet-900/20 transition-colors duration-300" />
              </div>

              {/* Card Header Content */}
              <div className="relative z-10 flex items-start justify-between">
                <span className="font-athletic text-3xl font-black text-violet-400 tracking-wider">
                  {program.num}
                </span>

                <div className="text-[11px] font-semibold tracking-wider uppercase text-zinc-300 bg-black/60 px-2.5 py-1 rounded-sm border border-white/10 backdrop-blur-sm">
                  {program.tag}
                </div>
              </div>

              {/* Card Bottom Content */}
              <div className="relative z-10">
                <div className="text-[11px] text-violet-300 font-mono mb-1 tracking-wider uppercase">
                  {program.duration} · {program.level}
                </div>

                <h3 className="font-athletic text-2xl sm:text-3xl font-bold text-white tracking-wide uppercase mb-2 group-hover:text-violet-300 transition-colors">
                  {program.title}
                </h3>

                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-4 line-clamp-3">
                  {program.description}
                </p>

                <div className="flex items-center justify-between pt-3 border-t border-white/10 text-xs font-bold text-white group-hover:text-violet-400 transition-colors">
                  <span className="tracking-widest uppercase">EXPLORE PROGRAM</span>
                  <div className="w-8 h-8 rounded-sm bg-white/10 group-hover:bg-violet-600 flex items-center justify-center text-white transition-all duration-200">
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Program Detail Modal */}
      {activeModalProgram && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in">
          <div className="relative w-full max-w-xl bg-[#0e0e0e] border border-violet-500/40 rounded-sm p-6 sm:p-8 shadow-2xl">
            <button
              onClick={() => setSelectedProgram(null)}
              className="absolute top-4 right-4 p-2 text-zinc-400 hover:text-white rounded focus:outline-none"
              aria-label="Close details"
            >
              ✕
            </button>

            <div className="text-xs font-mono text-violet-400 uppercase tracking-widest mb-1">
              PROGRAM {activeModalProgram.num} · {activeModalProgram.tag}
            </div>

            <h3 className="font-athletic text-3xl sm:text-4xl text-white font-black tracking-wide uppercase mb-3">
              {activeModalProgram.title}
            </h3>

            <p className="text-sm text-zinc-300 leading-relaxed mb-6">
              {activeModalProgram.description}
            </p>

            <div className="mb-6">
              <h4 className="text-xs font-bold tracking-wider uppercase text-zinc-200 mb-3 flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-violet-400" />
                <span>INCLUDED PROTOCOLS & AMENITIES</span>
              </h4>
              <div className="space-y-2.5">
                {activeModalProgram.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-xs text-zinc-300">
                    <CheckCircle2 className="w-4 h-4 text-violet-400 shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-white/10">
              <button
                onClick={() => {
                  const goalName = activeModalProgram.title;
                  setSelectedProgram(null);
                  onOpenBooking({ goal: goalName });
                }}
                className="flex-1 py-3 px-4 bg-violet-600 hover:bg-violet-500 text-white text-xs font-bold tracking-wider uppercase rounded-sm flex items-center justify-center gap-2"
              >
                <span>BOOK SESSION FOR THIS PROGRAM</span>
                <ChevronRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => setSelectedProgram(null)}
                className="py-3 px-4 bg-white/5 hover:bg-white/10 text-zinc-300 text-xs font-semibold uppercase rounded-sm border border-white/10"
              >
                CLOSE
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
