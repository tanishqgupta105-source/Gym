import React from 'react';
import { X } from 'lucide-react';
import { LeadForm } from './LeadForm';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialGoal?: string;
  initialPlan?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialGoal = 'Muscle Building',
  initialPlan = '',
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in">
      <div className="relative w-full max-w-xl bg-[#0e0e0e] border border-violet-500/50 rounded-sm shadow-2xl max-h-[95vh] overflow-y-auto">
        <div className="sticky top-0 right-0 z-20 flex justify-between items-center px-6 py-4 bg-[#0e0e0e]/95 backdrop-blur-md border-b border-white/10">
          <div>
            <div className="text-[10px] uppercase font-mono tracking-widest text-violet-400 font-bold">
              VIP GUEST ACCESS
            </div>
            <h3 className="font-athletic text-2xl text-white font-black tracking-wide uppercase">
              BOOK YOUR FREE FACILITY TOUR
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-sm bg-white/5 hover:bg-white/15 text-zinc-400 hover:text-white transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-4 sm:p-6">
          <LeadForm
            initialGoal={initialGoal}
            initialPlan={initialPlan}
            isModal={true}
            onSuccess={() => {}}
          />
        </div>
      </div>
    </div>
  );
};
