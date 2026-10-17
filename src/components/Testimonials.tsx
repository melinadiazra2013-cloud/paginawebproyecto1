import React from 'react';
import { Star, Quote, ShieldCheck } from 'lucide-react';
import { TESTIMONIALS } from '../data/legalData';

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonios" className="py-20 lg:py-28 bg-[#FFFFFF] border-t border-[#D6BFA6] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#7A553A] mb-2">
            <span>Experiencias Reales</span>
            <span aria-hidden="true">·</span>
            <span>Casos Resueltos</span>
          </div>

          <h2 className="font-classic text-3xl sm:text-4xl md:text-5xl font-bold text-[#433229] tracking-tight">
            La Confianza de Nuestros Clientes
          </h2>

          <div className="w-16 h-0.5 bg-[#B08968] mx-auto my-4" />

          <p className="text-base text-[#5A483E] leading-relaxed font-normal">
            Opiniones de trabajadores que confiaron en la Dra. Rita Raffaele para defender su dignidad laboral y su legítima indemnización.
          </p>

          {/* Social Proof Aggregate Badge */}
          <div className="mt-6 inline-flex flex-wrap items-center justify-center gap-3 px-4 py-2 rounded-full bg-[#FAF5EB] border border-[#D6BFA6] text-xs text-[#4E3B31]">
            <div className="flex items-center gap-1 text-[#B08968]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <span className="font-bold text-[#433229]">4.9 / 5.0</span>
            <span className="text-[#C2A992]">·</span>
            <span className="text-[#5A483E]">Basado en más de 340 casos laborales patrocinados</span>
            <span className="text-[#C2A992]">·</span>
            <span className="inline-flex items-center gap-1 text-[#7A553A] font-semibold">
              <ShieldCheck className="w-3.5 h-3.5 text-[#B08968]" />
              100% Clientes Reales
            </span>
          </div>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="bg-[#FAF5EB] hover:bg-[#FFFFFF] rounded-2xl p-6 sm:p-7 border border-[#D6BFA6] hover:border-[#B08968] shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Rating stars & Quote icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-[#B08968]">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-[#D6BFA6]" />
                </div>

                <p className="text-xs sm:text-sm text-[#4E3B31] leading-relaxed italic mb-6">
                  “{t.text}”
                </p>
              </div>

              <div className="pt-4 border-t border-[#EAE0D3] flex items-center justify-between">
                <div>
                  <h4 className="font-classic text-base font-bold text-[#433229]">
                    {t.name}
                  </h4>
                  <p className="text-[11px] text-[#7A6456] font-medium">
                    {t.role}
                  </p>
                </div>
                <span className="text-[10px] text-[#7A553A] bg-[#F3E9D7] px-2.5 py-0.5 rounded font-medium border border-[#D6BFA6]">
                  {t.city}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
