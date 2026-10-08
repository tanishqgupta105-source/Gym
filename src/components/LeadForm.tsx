import React, { useState } from 'react';
import { CheckCircle2, Shield, ArrowRight, MessageSquare, PhoneCall } from 'lucide-react';
import { GYM_DATA } from '@/src/config/gymData';

interface LeadFormProps {
  initialGoal?: string;
  initialPlan?: string;
  onSuccess?: () => void;
  isModal?: boolean;
}

export const LeadForm: React.FC<LeadFormProps> = ({
  initialGoal = 'Muscle Building',
  initialPlan = '',
  onSuccess,
  isModal = false,
}) => {
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [fitnessGoal, setFitnessGoal] = useState(initialGoal);
  const [preferredTime, setPreferredTime] = useState('Evening (5 PM - 9 PM)');
  const [selectedPlan] = useState(initialPlan);

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [confirmationCode, setConfirmationCode] = useState('');

  const goalsList = [
    'Muscle Building',
    'Fat Loss',
    'Strength',
    'Personal Training',
    'General Fitness',
  ];

  const timeSlots = [
    'Morning (6 AM - 10 AM)',
    'Midday (11 AM - 4 PM)',
    'Evening (5 PM - 9 PM)',
    'Night (9 PM - 11 PM)',
  ];

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!fullName.trim()) {
      errs.fullName = 'Please enter your full name';
    }
    const cleanPhone = phoneNumber.replace(/[^0-9]/g, '');
    if (!cleanPhone || cleanPhone.length < 10) {
      errs.phoneNumber = 'Please enter a valid 10-digit mobile number';
    }
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errs.email = 'Please enter a valid email address';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Generate demo VIP pass code
    const randomCode = `AF-JBP-${Math.floor(1000 + Math.random() * 9000)}`;
    setConfirmationCode(randomCode);
    setIsSubmitted(true);
    if (onSuccess) {
      onSuccess();
    }
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFullName('');
    setPhoneNumber('');
    setEmail('');
  };

  if (isSubmitted) {
    const whatsappTourMsg = encodeURIComponent(
      `Hello Anytime Fitness Vijay Nagar, I just booked my VIP Tour Pass [${confirmationCode}].\nName: ${fullName}\nGoal: ${fitnessGoal}\nPhone: ${phoneNumber}`
    );
    const whatsappTourUrl = `https://wa.me/${GYM_DATA.contact.whatsappNumber.replace(/[^0-9]/g, '')}?text=${whatsappTourMsg}`;

    return (
      <div className="bg-[#0e0e0e] border border-violet-500/50 rounded-sm p-8 text-center animate-in fade-in">
        <div className="w-16 h-16 bg-violet-950/80 border border-violet-600 rounded-full flex items-center justify-center mx-auto mb-5 text-violet-400">
          <CheckCircle2 className="w-8 h-8" />
        </div>

        <div className="text-xs font-mono uppercase tracking-widest text-violet-400 mb-1">
          VIP PASS CONFIRMED
        </div>

        <h3 className="font-athletic text-3xl sm:text-4xl font-bold text-white uppercase mb-2">
          YOU&apos;RE ON THE GUEST LIST!
        </h3>

        <p className="text-sm text-zinc-300 max-w-md mx-auto mb-6">
          Thank you, <strong className="text-white">{fullName}</strong>. Your complimentary 1-Day VIP Facility Pass has been issued for Anytime Fitness Vijay Nagar.
        </p>

        {/* Pass Voucher Card */}
        <div className="max-w-xs mx-auto p-4 rounded-sm bg-black/80 border border-white/10 mb-6 text-left">
          <div className="text-[10px] text-zinc-400 uppercase tracking-wider mb-1">
            PASS VOUCHER ID
          </div>
          <div className="font-mono text-xl font-bold text-violet-400 tracking-wider">
            {confirmationCode}
          </div>
          <div className="text-xs text-zinc-400 mt-2">
            Target Goal: <span className="text-white font-medium">{fitnessGoal}</span>
          </div>
          <div className="text-xs text-zinc-400">
            Preferred Window: <span className="text-white font-medium">{preferredTime}</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
          <a
            href={whatsappTourUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-3 px-4 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold uppercase tracking-widest rounded-sm flex items-center justify-center gap-2 transition-colors"
          >
            <MessageSquare className="w-4 h-4" />
            <span>CONFIRM ON WHATSAPP</span>
          </a>

          <button
            onClick={handleReset}
            className="py-3 px-4 bg-white/5 hover:bg-white/10 text-zinc-300 text-xs font-semibold uppercase tracking-wider rounded-sm border border-white/10"
          >
            BOOK ANOTHER
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={`bg-[#0e0e0e] rounded-sm border border-white/10 ${isModal ? 'p-6 sm:p-8' : 'p-8 sm:p-10 shadow-2xl'}`}>
      {!isModal && (
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-violet-400 uppercase mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-violet-500" />
            <span>COMPLIMENTARY VIP ACCESS</span>
          </div>
          <h3 className="font-athletic text-3xl sm:text-4xl text-white font-black tracking-wide uppercase mb-2">
            CLAIM YOUR FREE 1-DAY PASS
          </h3>
          <p className="text-xs sm:text-sm text-zinc-400">
            Experience our imported equipment, consult with a certified coach, and feel the high-energy club atmosphere before making any commitment.
          </p>
        </div>
      )}

      {selectedPlan && (
        <div className="mb-6 p-3 bg-violet-950/40 border border-violet-800/40 rounded-sm text-xs text-violet-200 flex items-center justify-between">
          <span>Inquiring for: <strong className="text-white uppercase">{selectedPlan}</strong></span>
          <span className="text-[10px] uppercase font-mono text-violet-400">Selected Plan</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5" noValidate>
        {/* Full Name */}
        <div>
          <label className="block text-[11px] font-bold text-zinc-300 uppercase tracking-wider mb-1.5">
            FULL NAME <span className="text-violet-400">*</span>
          </label>
          <input
            type="text"
            required
            value={fullName}
            onChange={(e) => {
              setFullName(e.target.value);
              if (errors.fullName) setErrors({ ...errors, fullName: '' });
            }}
            placeholder="e.g. Vikramaditya Singh"
            className="w-full px-4 py-3 bg-black/60 border border-white/15 focus:border-violet-500 focus:outline-none rounded-sm text-sm text-white placeholder-zinc-600 transition-colors"
          />
          {errors.fullName && (
            <p className="text-rose-400 text-xs mt-1">{errors.fullName}</p>
          )}
        </div>

        {/* Phone Number */}
        <div>
          <label className="block text-[11px] font-bold text-zinc-300 uppercase tracking-wider mb-1.5">
            PHONE NUMBER (WHATSAPP ENABLED) <span className="text-violet-400">*</span>
          </label>
          <div className="relative">
            <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-xs font-mono text-zinc-500">
              +91
            </span>
            <input
              type="tel"
              required
              value={phoneNumber}
              onChange={(e) => {
                setPhoneNumber(e.target.value);
                if (errors.phoneNumber) setErrors({ ...errors, phoneNumber: '' });
              }}
              placeholder="98260 XXXXX"
              className="w-full pl-12 pr-4 py-3 bg-black/60 border border-white/15 focus:border-violet-500 focus:outline-none rounded-sm text-sm text-white placeholder-zinc-600 font-mono transition-colors"
            />
          </div>
          {errors.phoneNumber && (
            <p className="text-rose-400 text-xs mt-1">{errors.phoneNumber}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="block text-[11px] font-bold text-zinc-300 uppercase tracking-wider mb-1.5">
            EMAIL ADDRESS <span className="text-zinc-500 font-normal">(Optional for pass voucher)</span>
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (errors.email) setErrors({ ...errors, email: '' });
            }}
            placeholder="name@example.com"
            className="w-full px-4 py-3 bg-black/60 border border-white/15 focus:border-violet-500 focus:outline-none rounded-sm text-sm text-white placeholder-zinc-600 transition-colors"
          />
          {errors.email && (
            <p className="text-rose-400 text-xs mt-1">{errors.email}</p>
          )}
        </div>

        {/* Two-column: Goal & Preferred Time */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-[11px] font-bold text-zinc-300 uppercase tracking-wider mb-1.5">
              PRIMARY FITNESS GOAL
            </label>
            <select
              value={fitnessGoal}
              onChange={(e) => setFitnessGoal(e.target.value)}
              className="w-full px-3.5 py-3 bg-black/60 border border-white/15 focus:border-violet-500 focus:outline-none rounded-sm text-xs sm:text-sm text-white transition-colors"
            >
              {goalsList.map((g) => (
                <option key={g} value={g} className="bg-black text-white">
                  {g}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-[11px] font-bold text-zinc-300 uppercase tracking-wider mb-1.5">
              PREFERRED TOUR TIME
            </label>
            <select
              value={preferredTime}
              onChange={(e) => setPreferredTime(e.target.value)}
              className="w-full px-3.5 py-3 bg-black/60 border border-white/15 focus:border-violet-500 focus:outline-none rounded-sm text-xs sm:text-sm text-white transition-colors"
            >
              {timeSlots.map((s) => (
                <option key={s} value={s} className="bg-black text-white">
                  {s}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-4 px-6 bg-violet-600 hover:bg-violet-500 active:scale-[0.98] text-white text-xs sm:text-sm font-bold tracking-widest uppercase rounded-sm shadow-xl shadow-violet-950 flex items-center justify-center gap-2.5 transition-all duration-200 mt-2"
        >
          <span>BOOK MY FREE TOUR</span>
          <ArrowRight className="w-4 h-4" />
        </button>

        <div className="flex items-center justify-center gap-2 text-[11px] text-zinc-500 pt-1">
          <Shield className="w-3.5 h-3.5 text-zinc-400" />
          <span>Zero spam guaranteed. We only contact you to schedule your pass.</span>
        </div>
      </form>
    </div>
  );
};
