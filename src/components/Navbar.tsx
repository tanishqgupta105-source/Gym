import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, ArrowUpRight } from 'lucide-react';
import { GYM_DATA } from '@/src/config/gymData';

interface NavbarProps {
  onOpenBooking: (prefill?: { plan?: string; goal?: string }) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'ABOUT', href: '#about' },
    { label: 'PROGRAMS', href: '#programs' },
    { label: 'FACILITIES', href: '#facilities' },
    { label: 'TRAINERS', href: '#trainers' },
    { label: 'MEMBERSHIPS', href: '#memberships' },
    { label: 'LOCATION', href: '#location' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#050505]/90 backdrop-blur-md border-b border-white/10 py-3.5 shadow-2xl shadow-black/80'
          : 'bg-transparent py-5 border-b border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Wordmark (Single text element according to Top Bar Contract) */}
          <a
            href="#"
            className="group flex items-center gap-2.5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 rounded"
          >
            <div className="w-8 h-8 rounded-sm bg-violet-600 flex items-center justify-center font-bold text-white text-base tracking-tighter group-hover:bg-violet-500 transition-colors shadow-lg shadow-violet-900/40">
              AF
            </div>
            <div className="flex flex-col">
              <span className="font-athletic text-2xl tracking-wider text-white font-bold leading-none">
                {GYM_DATA.brand.name}
              </span>
              <span className="text-[10px] tracking-widest text-zinc-400 font-semibold uppercase -mt-0.5">
                {GYM_DATA.brand.subname}
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links (Zone 2) */}
          <nav className="hidden lg:flex items-center gap-8 text-xs font-semibold tracking-wider text-zinc-300">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="relative py-1 hover:text-white transition-colors duration-200 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-violet-500 hover:after:w-full after:transition-all after:duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Actions (Zone 3) */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={`tel:${GYM_DATA.contact.phone}`}
              className="flex items-center gap-2 text-xs font-medium text-zinc-400 hover:text-white transition-colors px-2 py-1"
              title="Call gym reception"
            >
              <Phone className="w-3.5 h-3.5 text-violet-400" />
              <span>{GYM_DATA.contact.phoneDisplay}</span>
            </a>

            <button
              onClick={() => onOpenBooking()}
              className="group relative inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-bold tracking-wider uppercase text-white bg-violet-600 hover:bg-violet-500 active:scale-[0.98] transition-all duration-200 rounded-sm shadow-lg shadow-violet-950/50 hover:shadow-violet-600/25"
            >
              <span>START YOUR JOURNEY</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => onOpenBooking()}
              className="px-3 py-1.5 text-[11px] font-bold tracking-wider uppercase bg-violet-600 text-white rounded-sm hover:bg-violet-500 active:scale-95 transition-all"
            >
              START
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-zinc-300 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 rounded"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[60px] bg-[#070707]/98 backdrop-blur-xl border-b border-white/10 px-6 py-6 shadow-2xl transition-all duration-300 ease-out animate-in fade-in slide-in-from-top-4">
          <div className="flex flex-col space-y-4">
            <div className="text-[11px] font-semibold text-zinc-500 tracking-wider">
              {GYM_DATA.brand.fullLocationLabel}
            </div>

            <nav className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-semibold text-zinc-200 hover:text-violet-400 transition-colors py-1 border-b border-white/5"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="pt-2 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3 text-center text-xs font-bold tracking-widest uppercase bg-violet-600 hover:bg-violet-500 text-white rounded-sm shadow-lg shadow-violet-900/50 flex items-center justify-center gap-2"
              >
                <span>BOOK A FREE TOUR</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <div className="flex items-center justify-between text-xs text-zinc-400 pt-1">
                <a
                  href={`tel:${GYM_DATA.contact.phone}`}
                  className="flex items-center gap-1.5 hover:text-white"
                >
                  <Phone className="w-3.5 h-3.5 text-violet-400" />
                  <span>Call Gym</span>
                </a>
                <span className="text-zinc-600">·</span>
                <span>24/7 Biometric Access</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
