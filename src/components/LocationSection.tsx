import React from 'react';
import { MapPin, Phone, MessageCircle, Clock, ShieldCheck, Navigation } from 'lucide-react';
import { GYM_DATA } from '@/src/config/gymData';

export const LocationSection: React.FC = () => {
  const whatsappUrl = `https://wa.me/${GYM_DATA.contact.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(GYM_DATA.contact.whatsappMessage)}`;

  return (
    <section id="location" className="py-24 sm:py-32 bg-[#080808] relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-violet-400 uppercase mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-violet-500" />
            <span>FACILITY LOCATION & ACCESS</span>
          </div>
          <h2 className="font-athletic text-4xl sm:text-6xl md:text-7xl text-white font-black leading-[0.9] tracking-tight uppercase">
            FIND US IN
            <br />
            <span className="text-zinc-400">VIJAY NAGAR.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left: Contact & Access Details */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6 bg-[#0e0e0e] p-7 sm:p-8 rounded-sm border border-white/10">
            <div>
              {/* Brand & Address */}
              <div className="mb-6">
                <div className="flex items-center gap-2 text-violet-400 text-xs font-bold uppercase tracking-widest mb-1.5">
                  <MapPin className="w-4 h-4 shrink-0" />
                  <span>CLUB LOCATION</span>
                </div>
                <h3 className="font-athletic text-2xl sm:text-3xl font-bold text-white uppercase mb-2">
                  {GYM_DATA.brand.name}
                </h3>
                <p className="text-sm text-zinc-300 leading-relaxed">
                  {GYM_DATA.contact.addressLine1}
                  <br />
                  {GYM_DATA.contact.addressLine2}
                </p>
                <p className="text-xs text-zinc-400 mt-1 italic">
                  Landmark: {GYM_DATA.contact.landmark}
                </p>
              </div>

              {/* Operating Hours */}
              <div className="mb-8 p-4 rounded-sm bg-black/60 border border-white/5 space-y-3">
                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-violet-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-bold text-white uppercase tracking-wider">
                      MEMBER ENTRY
                    </div>
                    <div className="text-xs text-zinc-300 font-mono">
                      {GYM_DATA.hours.memberAccess}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-2 border-t border-white/5">
                  <ShieldCheck className="w-4 h-4 text-violet-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-bold text-white uppercase tracking-wider">
                      STAFF & TOURS
                    </div>
                    <div className="text-xs text-zinc-400 font-mono">
                      {GYM_DATA.hours.staffHoursWeekdays}
                    </div>
                    <div className="text-xs text-zinc-400 font-mono">
                      {GYM_DATA.hours.staffHoursWeekends}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Connect Buttons */}
            <div className="space-y-3 pt-4 border-t border-white/10">
              <a
                href={`tel:${GYM_DATA.contact.phone}`}
                className="w-full py-3.5 px-4 bg-white/10 hover:bg-white/15 text-white text-xs font-bold tracking-widest uppercase rounded-sm border border-white/15 flex items-center justify-center gap-2.5 transition-colors"
              >
                <Phone className="w-4 h-4 text-violet-400" />
                <span>CALL RECEPTION ({GYM_DATA.contact.phoneDisplay})</span>
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 bg-emerald-950/40 hover:bg-emerald-900/60 text-emerald-300 hover:text-white text-xs font-bold tracking-widest uppercase rounded-sm border border-emerald-800/40 flex items-center justify-center gap-2.5 transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>CHAT ON WHATSAPP</span>
              </a>
            </div>
          </div>

          {/* Right: Interactive-looking Map Area */}
          <div className="lg:col-span-7 relative min-h-[380px] rounded-sm overflow-hidden border border-white/10 bg-[#0c0c0c] flex flex-col">
            {/* Embedded map iframe */}
            <iframe
              title="Anytime Fitness Vijay Nagar Jabalpur Location Map"
              src={GYM_DATA.contact.embedMapUrl}
              className="w-full flex-1 border-0 filter invert contrast-125 hue-rotate-180 opacity-80"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            {/* Map bottom bar with quick directions link */}
            <div className="p-4 bg-[#0a0a0a] border-t border-white/10 flex items-center justify-between">
              <div className="text-xs text-zinc-300">
                <span className="text-white font-semibold">Vijay Nagar, Jabalpur</span>
                <span className="text-zinc-500"> · </span>
                <span>Ample dedicated member parking available</span>
              </div>

              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(GYM_DATA.contact.mapQuery)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-violet-400 hover:text-violet-300 uppercase tracking-wider"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>GET DIRECTIONS</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
