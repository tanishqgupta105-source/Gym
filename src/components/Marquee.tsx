import React from 'react';

export const Marquee: React.FC = () => {
  const tickerItems = [
    'TRAIN HARD',
    'STAY CONSISTENT',
    'GET STRONGER',
    'NEVER SETTLE',
    '24/7 GLOBAL ACCESS',
    'WORLD-CLASS EQUIPMENT',
    'VIJAY NAGAR JABALPUR',
    'DISCIPLINE OVER MOTIVATION',
  ];

  return (
    <div className="relative w-full overflow-hidden bg-[#0a0a0a] border-y border-white/10 py-4 select-none">
      {/* Edge gradient masks */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10 pointer-events-none" />

      <div className="animate-marquee flex items-center">
        {/* Render twice for continuous loop */}
        {[...tickerItems, ...tickerItems].map((item, idx) => (
          <div key={idx} className="flex items-center mx-6 sm:mx-8 shrink-0">
            <span className="font-athletic text-xl sm:text-2xl text-zinc-300 font-bold tracking-widest uppercase hover:text-violet-400 transition-colors">
              {item}
            </span>
            <span className="ml-6 sm:ml-8 w-2 h-2 rounded-full bg-violet-600 shrink-0" />
          </div>
        ))}
      </div>
    </div>
  );
};
