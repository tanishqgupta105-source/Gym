import React, { useState } from 'react';
import { Check, Zap, ArrowRight, Shield } from 'lucide-react';
import { GYM_DATA } from '@/src/config/gymData';

interface MembershipsProps {
  onOpenBooking: (prefill?: { plan?: string; goal?: string }) => void;
}

export const Memberships: React.FC<MembershipsProps> = ({ onOpenBooking }) => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'quarterly' | 'annual'>('monthly');

  const plans = GYM_DATA.memberships[billingCycle];

  return (
    <section id="memberships" className="py-24 sm:py-32 bg-[#080808] relative">
      {/* Background ambient glow behind highlighted card */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-violet-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-violet-400 uppercase mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-violet-500" />
            <span>TRANSPARENT VALUE</span>
          </div>

          <h2 className="font-athletic text-4xl sm:text-6xl md:text-7xl text-white font-black leading-[0.9] tracking-tight uppercase mb-6">
            CHOOSE YOUR
            <br />
            <span className="text-zinc-400">COMMITMENT.</span>
          </h2>

          <p className="text-sm sm:text-base text-zinc-300 font-normal leading-relaxed">
            No hidden maintenance charges. No lock-in traps. Every membership grants clean facilities, biometric keyfob security, and world-class equipment standards.
          </p>

          {/* Billing Interval Toggle (Buttons per constitution) */}
          <div className="mt-8 inline-flex items-center p-1 bg-[#121212] rounded-sm border border-white/10">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-4 py-2 text-xs font-bold tracking-wider uppercase rounded-sm transition-all ${
                billingCycle === 'monthly'
                  ? 'bg-violet-600 text-white shadow-md'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              MONTHLY
            </button>
            <button
              onClick={() => setBillingCycle('quarterly')}
              className={`px-4 py-2 text-xs font-bold tracking-wider uppercase rounded-sm transition-all flex items-center gap-1.5 ${
                billingCycle === 'quarterly'
                  ? 'bg-violet-600 text-white shadow-md'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <span>QUARTERLY</span>
              <span className="text-[10px] text-violet-300 font-mono">SAVE 15%</span>
            </button>
            <button
              onClick={() => setBillingCycle('annual')}
              className={`px-4 py-2 text-xs font-bold tracking-wider uppercase rounded-sm transition-all flex items-center gap-1.5 ${
                billingCycle === 'annual'
                  ? 'bg-violet-600 text-white shadow-md'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <span>ANNUAL</span>
              <span className="text-[10px] text-violet-300 font-mono">SAVE 25%</span>
            </button>
          </div>
        </div>

        {/* 3 Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {plans.map((plan) => {
            const isPopular = !!plan.popular;

            return (
              <div
                key={plan.id}
                className={`relative flex flex-col justify-between rounded-sm transition-all duration-300 ${
                  isPopular
                    ? 'bg-[#111111] border-2 border-violet-500 shadow-2xl shadow-violet-950/50 lg:-translate-y-2'
                    : 'bg-[#0d0d0d] border border-white/10 hover:border-white/20'
                } p-7 sm:p-8`}
              >
                {/* Most Popular Ribbon */}
                {isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 bg-violet-600 text-white text-[10px] font-black uppercase tracking-widest rounded-sm shadow-md flex items-center gap-1">
                    <Zap className="w-3 h-3 fill-current" />
                    <span>MOST POPULAR</span>
                  </div>
                )}

                <div>
                  {/* Plan Name */}
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-athletic text-2xl sm:text-3xl font-black text-white tracking-wide uppercase">
                      {plan.name}
                    </h3>
                    {'discountText' in plan && (
                      <span className="text-[11px] font-mono text-violet-400 font-semibold bg-violet-950/60 px-2 py-0.5 rounded border border-violet-800/40">
                        {plan.discountText}
                      </span>
                    )}
                  </div>

                  {/* Price */}
                  <div className="flex items-baseline gap-1.5 mb-4">
                    <span className="text-xl sm:text-2xl font-bold text-zinc-400">₹</span>
                    <span className="font-athletic text-5xl sm:text-6xl font-black text-white tracking-tight tabular-nums">
                      {plan.price.toLocaleString('en-IN')}
                    </span>
                    <span className="text-xs text-zinc-400 font-semibold uppercase">
                      {plan.period}
                    </span>
                  </div>

                  <p className="text-xs text-zinc-400 mb-6 leading-relaxed">
                    {plan.description}
                  </p>

                  <div className="h-[1px] w-full bg-white/10 mb-6" />

                  {/* Feature Checklist */}
                  <div className="space-y-3 mb-8">
                    <div className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">
                      INCLUDED PRIVILEGES
                    </div>
                    {plan.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs text-zinc-300">
                        <Check className="w-4 h-4 text-violet-400 shrink-0 mt-0.5" />
                        <span className="leading-snug">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Plan CTA */}
                <div>
                  <button
                    onClick={() => onOpenBooking({ plan: `${plan.name} (${billingCycle.toUpperCase()})` })}
                    className={`w-full py-3.5 px-4 text-xs font-bold tracking-widest uppercase rounded-sm flex items-center justify-center gap-2 transition-all duration-200 ${
                      isPopular
                        ? 'bg-violet-600 hover:bg-violet-500 active:scale-[0.98] text-white shadow-lg shadow-violet-900/60'
                        : 'bg-white/10 hover:bg-white/20 active:scale-[0.98] text-white border border-white/10'
                    }`}
                  >
                    <span>SELECT {plan.name}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <div className="mt-3 text-center text-[10px] text-zinc-400 flex items-center justify-center gap-1">
                    <Shield className="w-3 h-3 text-zinc-400" />
                    <span>Cancel or freeze anytime with 15 days notice</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
