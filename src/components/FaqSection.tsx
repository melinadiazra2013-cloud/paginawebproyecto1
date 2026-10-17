import React, { useState } from 'react';
import { ChevronDown, MessageCircle } from 'lucide-react';
import { FAQS, LAWYER_INFO } from '../data/legalData';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  const directWhatsAppUrl = `https://wa.me/${LAWYER_INFO.phoneClean}?text=${encodeURIComponent(
    'Hola Dra. Rita Raffaele, tengo una duda específica sobre mi situación laboral y quisiera consultarles.'
  )}`;

  return (
    <section id="preguntas" className="py-20 lg:py-24 bg-[#FAF5EB] border-t border-[#D6BFA6]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#7A553A] mb-2">
            <span>Respuestas Claras</span>
            <span aria-hidden="true">·</span>
            <span>Preguntas Frecuentes</span>
          </div>

          <h2 className="font-classic text-3xl sm:text-4xl font-bold text-[#433229] tracking-tight">
            Dudas Habituales sobre Derecho Laboral
          </h2>

          <div className="w-16 h-0.5 bg-[#B08968] mx-auto my-4" />

          <p className="text-base text-[#5A483E] leading-relaxed font-normal">
            Conocé tus derechos fundamentales ante despidos, intimaciones y reclamos.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'border-[#B08968] bg-[#FFFFFF] shadow-2xs'
                    : 'border-[#D6BFA6] bg-[#FFFFFF] hover:border-[#B08968]'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="cursor-pointer w-full text-left p-5 flex items-center justify-between gap-4 focus:outline-hidden"
                  aria-expanded={isOpen}
                >
                  <span className="font-classic text-base sm:text-lg font-bold text-[#433229]">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen
                        ? 'bg-[#4E3B31] text-white rotate-180'
                        : 'bg-[#F3E9D7] text-[#7A553A]'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#5A483E] leading-relaxed border-t border-[#F3E9D7] animate-in fade-in duration-150">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Extra question helper */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-[#FFFFFF] border border-[#D6BFA6] flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xs">
          <div className="text-left">
            <h4 className="font-classic text-lg font-bold text-[#433229]">
              ¿Tenés otra consulta que no figura aquí?
            </h4>
            <p className="text-xs text-[#7A6456]">
              Escribinos directamente para responderte de forma puntual y personalizada.
            </p>
          </div>

          <a
            href={directWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#B08968] hover:bg-[#9E7757] text-[#FAF5EB] text-xs font-bold uppercase tracking-wider transition-all shadow-xs shrink-0 border border-[#C29F80]"
          >
            <MessageCircle className="w-4 h-4 fill-current text-[#F3E9D7]" />
            <span>Consultar por WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
