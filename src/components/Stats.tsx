import React, { useEffect, useState, useRef } from 'react';
import { GYM_DATA } from '@/src/config/gymData';

export const Stats: React.FC = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={containerRef} className="bg-[#080808] border-y border-white/10 py-16 sm:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 divide-y-2 sm:divide-y-0 lg:divide-x divide-white/5">
          {GYM_DATA.stats.map((stat, idx) => (
            <div key={idx} className={`pt-6 sm:pt-0 ${idx !== 0 ? 'lg:pl-8' : ''}`}>
              <div className="flex items-baseline gap-1">
                <span className="font-athletic text-5xl sm:text-6xl md:text-7xl font-black text-white tracking-tight tabular-nums">
                  <AnimatedNumber target={stat.value} trigger={hasAnimated} />
                </span>
                <span className="font-athletic text-3xl sm:text-4xl font-bold text-violet-400">
                  {stat.suffix}
                </span>
              </div>

              <div className="mt-2">
                <h4 className="text-xs sm:text-sm font-bold tracking-widest text-zinc-200 uppercase">
                  {stat.label}
                </h4>
                <p className="text-[12px] text-zinc-400 mt-0.5 leading-snug">
                  {stat.sublabel}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

interface AnimatedNumberProps {
  target: number;
  trigger: boolean;
}

const AnimatedNumber: React.FC<AnimatedNumberProps> = ({ target, trigger }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!trigger) return;

    let start = 0;
    const duration = 1600; // 1.6s
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // easeOutExpo
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const val = Math.floor(ease * target);
      setCurrent(val);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCurrent(target);
      }
    };

    requestAnimationFrame(animate);
  }, [trigger, target]);

  return <>{current}</>;
};
