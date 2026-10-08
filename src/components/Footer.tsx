import React from 'react';
import { Phone, Mail, MapPin, Instagram, Facebook, Youtube, Shield } from 'lucide-react';
import { GYM_DATA } from '@/src/config/gymData';

interface FooterProps {
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  return (
    <footer className="bg-[#030303] text-zinc-400 border-t border-white/10 pt-16 pb-24 sm:pb-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-white/5">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-sm bg-violet-600 flex items-center justify-center font-bold text-white text-base tracking-tighter">
                AF
              </div>
              <div className="flex flex-col">
                <span className="font-athletic text-2xl tracking-wider text-white font-bold leading-none">
                  {GYM_DATA.brand.name}
                </span>
                <span className="text-[10px] tracking-widest text-zinc-500 font-semibold uppercase -mt-0.5">
                  {GYM_DATA.brand.subname}
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-6 max-w-sm">
              Anytime Fitness Vijay Nagar Jabalpur delivers 24/7 global access, Olympic-standard strength equipment, biomechanical machines, and elite certified coaching to help you build your strongest self.
            </p>

            <div className="flex items-center gap-3">
              <a
                href="#"
                aria-label="Instagram"
                className="w-8 h-8 rounded-sm bg-white/5 hover:bg-violet-600 text-zinc-400 hover:text-white flex items-center justify-center transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="w-8 h-8 rounded-sm bg-white/5 hover:bg-violet-600 text-zinc-400 hover:text-white flex items-center justify-center transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="w-8 h-8 rounded-sm bg-white/5 hover:bg-violet-600 text-zinc-400 hover:text-white flex items-center justify-center transition-colors"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-2">
            <h4 className="font-athletic text-base font-bold text-white tracking-widest uppercase mb-4">
              EXPLORE
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#about" className="hover:text-violet-400 transition-colors">
                  About the Club
                </a>
              </li>
              <li>
                <a href="#programs" className="hover:text-violet-400 transition-colors">
                  Programs & Training
                </a>
              </li>
              <li>
                <a href="#facilities" className="hover:text-violet-400 transition-colors">
                  Facility Tour
                </a>
              </li>
              <li>
                <a href="#trainers" className="hover:text-violet-400 transition-colors">
                  Certified Trainers
                </a>
              </li>
              <li>
                <a href="#memberships" className="hover:text-violet-400 transition-colors">
                  Plans & Pricing
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-violet-400 transition-colors">
                  Location & Map
                </a>
              </li>
            </ul>
          </div>

          {/* Programs Column */}
          <div className="lg:col-span-3">
            <h4 className="font-athletic text-base font-bold text-white tracking-widest uppercase mb-4">
              TRAINING DISCIPLINES
            </h4>
            <ul className="space-y-2.5 text-xs">
              {GYM_DATA.programs.slice(0, 5).map((p) => (
                <li key={p.id}>
                  <a href="#programs" className="hover:text-violet-400 transition-colors">
                    {p.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Hours Column */}
          <div className="lg:col-span-3">
            <h4 className="font-athletic text-base font-bold text-white tracking-widest uppercase mb-4">
              CLUB ACCESS
            </h4>
            <div className="space-y-3 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-violet-400 shrink-0 mt-0.5" />
                <span>
                  {GYM_DATA.brand.locationName}, {GYM_DATA.brand.city}, {GYM_DATA.brand.state}
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-violet-400 shrink-0" />
                <a href={`tel:${GYM_DATA.contact.phone}`} className="hover:text-white">
                  {GYM_DATA.contact.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-violet-400 shrink-0" />
                <a href={`mailto:${GYM_DATA.contact.email}`} className="hover:text-white">
                  {GYM_DATA.contact.email}
                </a>
              </div>

              <div className="pt-2">
                <div className="text-[11px] font-bold text-zinc-300 uppercase tracking-wider">
                  24/7/365 KEYFOB ENTRY
                </div>
                <div className="text-[11px] text-zinc-500">
                  Staffed: Mon–Sat 6AM–10PM · Sun 7AM–8PM
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-400 gap-4">
          <div>
            © 2026 Anytime Fitness Vijay Nagar, Jabalpur. All Rights Reserved.
          </div>

          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <span className="text-zinc-600">·</span>
            <a href="#" className="hover:text-white transition-colors">Terms of Membership</a>
            <span className="text-zinc-600">·</span>
            <button
              onClick={onOpenBooking}
              className="text-violet-400 hover:text-violet-300 font-bold uppercase tracking-wider"
            >
              Book Free Tour
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
