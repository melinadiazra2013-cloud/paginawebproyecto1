import React from 'react';
import { MessageSquare, FileSearch, Scale, CheckCircle, ArrowRight } from 'lucide-react';
import { PROCESS_STEPS } from '../data/legalData';

interface ProcessStepsProps {
  onOpenBooking: () => void;
}

export const ProcessSteps: React.FC<ProcessStepsProps> = ({ onOpenBooking }) => {
  const getStepIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <MessageSquare className="w-5 h-5 text-[#7A553A]" />;
      case 1:
        return <FileSearch className="w-5 h-5 text-[#7A553A]" />;
      case 2:
        return <Scale className="w-5 h-5 text-[#7A553A]" />;
      case 3:
        return <CheckCircle className="w-5 h-5 text-[#B08968]" />;
      default:
        return <CheckCircle className="w-5 h-5 text-[#7A553A]" />;
    }
  };

  return (
    <section className="py-20 lg:py-24 bg-[#FAF5EB] border-t border-[#D6BFA6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#7A553A] mb-2">
            <span>Paso a Paso</span>
            <span aria-hidden="true">·</span>
            <span>Claridad Procesal</span>
          </div>

          <h2 className="font-classic text-3xl sm:text-4xl font-bold text-[#433229] tracking-tight">
            ¿Cómo Trabajamos en Tu Caso?
          </h2>

          <div className="w-16 h-0.5 bg-[#B08968] mx-auto my-4" />

          <p className="text-base text-[#5A483E] leading-relaxed font-normal">
            Un proceso transparente, previsible y riguroso, diseñado para brindarte serenidad desde el primer contacto.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROCESS_STEPS.map((step, idx) => (
            <div
              key={step.step}
              className="bg-[#FFFFFF] hover:bg-[#FAF5EB] rounded-2xl p-6 border border-[#D6BFA6] hover:border-[#B08968] transition-all hover:shadow-md relative group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#F3E9D7] border border-[#D6BFA6] flex items-center justify-center shadow-2xs group-hover:scale-105 transition-transform">
                    {getStepIcon(idx)}
                  </div>
                  <span className="font-classic text-2xl font-bold text-[#B08968] group-hover:text-[#7A553A] transition-colors">
                    0{step.step}
                  </span>
                </div>

                <h3 className="font-classic text-lg font-bold text-[#433229] mb-2 leading-snug">
                  {step.title}
                </h3>

                <p className="text-xs text-[#5A483E] leading-relaxed font-normal">
                  {step.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-[#EAE0D3] flex items-center text-[11px] font-semibold text-[#7A553A]">
                <span>Paso {step.step} de 4</span>
              </div>
            </div>
          ))}
        </div>

        {/* Central Action: Marrón Clarito (#B08968) */}
        <div className="mt-12 text-center">
          <button
            onClick={onOpenBooking}
            className="cursor-pointer inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#B08968] hover:bg-[#9E7757] text-[#FAF5EB] font-bold text-xs uppercase tracking-wider shadow-md transition-all active:scale-[0.98] border border-[#C29F80]"
          >
            <span>Iniciar el Paso 1: Agendar Turno en WhatsApp</span>
            <ArrowRight className="w-4 h-4 text-[#F3E9D7]" />
          </button>
        </div>
      </div>
    </section>
  );
};
