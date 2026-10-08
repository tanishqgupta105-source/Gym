/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Marquee } from './components/Marquee';
import { About } from './components/About';
import { Stats } from './components/Stats';
import { Programs } from './components/Programs';
import { Facilities } from './components/Facilities';
import { Trainers } from './components/Trainers';
import { Memberships } from './components/Memberships';
import { Testimonials } from './components/Testimonials';
import { CtaClimax } from './components/CtaClimax';
import { LocationSection } from './components/LocationSection';
import { LeadForm } from './components/LeadForm';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { MobileStickyBar } from './components/MobileStickyBar';

export default function App() {
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    plan?: string;
    goal?: string;
  }>({
    isOpen: false,
    plan: '',
    goal: 'Muscle Building',
  });

  const handleOpenBooking = (prefill?: { plan?: string; goal?: string }) => {
    setModalState({
      isOpen: true,
      plan: prefill?.plan || '',
      goal: prefill?.goal || 'Muscle Building',
    });
  };

  const handleCloseBooking = () => {
    setModalState((prev) => ({ ...prev, isOpen: false }));
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-violet-600 selection:text-white">
      {/* Sticky Top Navbar */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Main Content Area */}
      <main>
        {/* Full-Viewport Hero Section */}
        <Hero onOpenBooking={() => handleOpenBooking()} />

        {/* Premium Animated Horizontal Ticker */}
        <Marquee />

        {/* About Section - Split Layout with 3 Numbered Blocks */}
        <About onOpenBooking={() => handleOpenBooking()} />

        {/* Statistics Strip with Animated Counters */}
        <Stats />

        {/* Specialized Programs Section */}
        <Programs onOpenBooking={handleOpenBooking} />

        {/* Asymmetrical Performance Facilities Bento Gallery */}
        <Facilities />

        {/* Elite Trainers Editorial Cards */}
        <Trainers onOpenBooking={handleOpenBooking} />

        {/* High-Conversion Membership Plans */}
        <Memberships onOpenBooking={handleOpenBooking} />

        {/* Verified Transformations & Testimonials */}
        <Testimonials />

        {/* Climax Call to Action Section */}
        <CtaClimax onOpenBooking={() => handleOpenBooking()} />

        {/* Location, Access Hours & Interactive Map */}
        <LocationSection />

        {/* In-page Lead Capture Booking Section */}
        <section id="contact" className="py-24 sm:py-32 bg-[#050505] relative border-t border-white/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-violet-400 uppercase mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-violet-500" />
                <span>INQUIRIES & PASS RESERVATION</span>
              </div>
              <h2 className="font-athletic text-4xl sm:text-6xl text-white font-black leading-[0.9] tracking-tight uppercase mb-4">
                EXPERIENCE THE FACILITY FIRSTHAND.
              </h2>
              <p className="text-sm sm:text-base text-zinc-400 max-w-xl mx-auto">
                Fill out the quick form below to lock in your complimentary 1-Day VIP Guest Pass at Vijay Nagar, Jabalpur.
              </p>
            </div>

            <LeadForm />
          </div>
        </section>
      </main>

      {/* Luxury Dark Footer */}
      <Footer onOpenBooking={() => handleOpenBooking()} />

      {/* Interactive Global Tour Booking Modal */}
      <BookingModal
        isOpen={modalState.isOpen}
        onClose={handleCloseBooking}
        initialGoal={modalState.goal}
        initialPlan={modalState.plan}
      />

      {/* Mobile Floating Sticky Action Bar */}
      <MobileStickyBar onOpenBooking={() => handleOpenBooking()} />
    </div>
  );
}
