import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { SeveranceCalculator } from './components/SeveranceCalculator';
import { AboutLawyer } from './components/AboutLawyer';
import { ProcessSteps } from './components/ProcessSteps';
import { Testimonials } from './components/Testimonials';
import { FaqSection } from './components/FaqSection';
import { LocationAndHours } from './components/LocationAndHours';
import { Footer } from './components/Footer';
import { AppointmentModal } from './components/AppointmentModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedServiceId, setSelectedServiceId] = useState<string | undefined>(undefined);

  const handleOpenBooking = (serviceId?: string) => {
    setSelectedServiceId(serviceId);
    setBookingModalOpen(true);
  };

  const handleCloseBooking = () => {
    setBookingModalOpen(false);
    setSelectedServiceId(undefined);
  };

  const handleScrollToCalculator = () => {
    const calcElement = document.getElementById('calculadora');
    if (calcElement) {
      calcElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF5EB] flex flex-col font-sans-body text-[#433229]">
      {/* Fixed Navigation Bar */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section with Engaging Headline & Credentials */}
        <Hero
          onOpenBooking={handleOpenBooking}
          onScrollToCalculator={handleScrollToCalculator}
        />

        {/* 4 Basic Legal Services with Icons & Direct WhatsApp Actions */}
        <Services onOpenBooking={handleOpenBooking} />

        {/* Interactive Labor Severance Calculator */}
        <SeveranceCalculator />

        {/* Lawyer Profile & Philosophy */}
        <AboutLawyer onOpenBooking={() => handleOpenBooking()} />

        {/* 4 Steps Working Method */}
        <ProcessSteps onOpenBooking={() => handleOpenBooking()} />

        {/* Real Cases & Client Reviews */}
        <Testimonials />

        {/* Frequently Asked Questions */}
        <FaqSection />

        {/* Schedule & Location with Embedded Google Maps and GPS Navigation */}
        <LocationAndHours onOpenBooking={() => handleOpenBooking()} />
      </main>

      {/* Footer with Office Info, Legal Disclaimers & Contact */}
      <Footer onOpenBooking={() => handleOpenBooking()} />

      {/* Sticky Floating WhatsApp Button */}
      <FloatingWhatsApp onOpenBooking={handleOpenBooking} />

      {/* Interactive Appointment Booking Modal */}
      <AppointmentModal
        isOpen={bookingModalOpen}
        onClose={handleCloseBooking}
        defaultServiceId={selectedServiceId}
      />
    </div>
  );
}
