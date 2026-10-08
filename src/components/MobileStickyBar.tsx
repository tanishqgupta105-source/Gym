import React from 'react';
import { Calendar, MessageCircle } from 'lucide-react';
import { GYM_DATA } from '@/src/config/gymData';

interface MobileStickyBarProps {
  onOpenBooking: () => void;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({ onOpenBooking }) => {
  const whatsappUrl = `https://wa.me/${GYM_DATA.contact.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(GYM_DATA.contact.whatsappMessage)}`;

  return (
    <aside
      aria-label="Mobile quick actions"
      className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#070707]/95 backdrop-blur-md border-t border-white/10 px-3 py-2 flex items-center gap-2 shadow-2xl h-14"
    >
      <button
        onClick={onOpenBooking}
        className="flex-1 h-10 bg-violet-600 hover:bg-violet-500 active:scale-[0.98] text-white text-[11px] font-bold tracking-wider uppercase rounded-sm flex items-center justify-center gap-1.5 shadow-md shadow-violet-950 transition-all"
      >
        <Calendar className="w-3.5 h-3.5" />
        <span>BOOK A FREE TOUR</span>
      </button>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 bg-emerald-600 hover:bg-emerald-500 active:scale-[0.98] text-white rounded-sm flex items-center justify-center shrink-0 shadow-md transition-all"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-5 h-5" />
      </a>
    </aside>
  );
};
