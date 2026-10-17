import React from 'react';
import { Scale, ShieldAlert, FileText, AlertCircle, CheckCircle2, MessageCircle, Clock, ArrowRight } from 'lucide-react';
import { SERVICES, LAWYER_INFO, ServiceItem } from '../data/legalData';

interface ServicesProps {
  onOpenBooking: (serviceId?: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onOpenBooking }) => {
  const getIcon = (iconName: ServiceItem['iconName']) => {
    switch (iconName) {
      case 'Scale':
        return <Scale className="w-5 h-5 text-[#7A553A] group-hover:text-[#B08968] transition-colors" />;
      case 'ShieldAlert':
        return <ShieldAlert className="w-5 h-5 text-[#7A553A] group-hover:text-[#B08968] transition-colors" />;
      case 'FileText':
        return <FileText className="w-5 h-5 text-[#7A553A] group-hover:text-[#B08968] transition-colors" />;
      case 'AlertCircle':
        return <AlertCircle className="w-5 h-5 text-[#7A553A] group-hover:text-[#B08968] transition-colors" />;
      default:
        return <Scale className="w-5 h-5 text-[#7A553A] group-hover:text-[#B08968] transition-colors" />;
    }
  };

  // WhatsApp click handler with the exact requested preloaded message
  const handleConsultar = (e: React.MouseEvent) => {
    e.preventDefault();
    const message = 'Hola, quiero preguntar por la consulta del estudio jurídico';
    const url = `https://wa.me/${LAWYER_INFO.phoneClean}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="servicios" className="py-20 lg:py-28 bg-[#FFFFFF] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Classical Typography */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#7A553A] mb-2">
            <span>Áreas de Práctica Jurídica</span>
            <span aria-hidden="true">·</span>
            <span>Derecho Laboral</span>
          </div>

          <h2 className="font-classic text-3xl sm:text-4xl md:text-5xl font-bold text-[#433229] tracking-tight">
            Nuestros 4 Servicios Especializados
          </h2>

          <div className="w-16 h-0.5 bg-[#B08968] mx-auto my-4" />

          <p className="text-base text-[#5A483E] leading-relaxed font-normal">
            Enfocamos el 100% de nuestra práctica en la protección rigurosa de los trabajadores.
            Tarjetas interactivas de asesoramiento para conocer la duración y consultar directamente a nuestro equipo legal.
          </p>
        </div>

        {/* Interactive Services Cards Grid (with Hover Effects) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {SERVICES.map((srv) => (
            <div
              key={srv.id}
              className="group relative bg-[#FAF5EB] hover:bg-[#FFFFFF] rounded-2xl p-7 sm:p-8 border border-[#D6BFA6] hover:border-[#B08968] shadow-xs hover:shadow-2xl hover:shadow-[#B08968]/15 transform transition-all duration-300 ease-out hover:-translate-y-2 flex flex-col justify-between cursor-default overflow-hidden"
            >
              {/* Subtle top accent line revealed on hover */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#D6BFA6] via-[#B08968] to-[#D6BFA6] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div>
                {/* Header: Icon, Number, Title & Badge */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-4">
                    {/* Interactive Icon Container */}
                    <div className="w-13 h-13 rounded-xl bg-[#F3E9D7] border border-[#D6BFA6] flex items-center justify-center group-hover:scale-110 group-hover:bg-[#FAF5EB] group-hover:border-[#B08968] transition-all duration-300 shadow-2xs">
                      {getIcon(srv.iconName)}
                    </div>

                    <div>
                      <span className="font-classic text-xs font-bold text-[#7A553A] tracking-widest block">
                        SERVICIO {srv.number}
                      </span>
                      <h3 className="font-classic text-xl sm:text-2xl font-bold text-[#433229] leading-snug group-hover:text-[#7A553A] transition-colors">
                        {srv.title}
                      </h3>
                    </div>
                  </div>

                  <span className="text-[11px] font-semibold text-[#5A483E] bg-[#F3E9D7] px-2.5 py-1 rounded-md border border-[#D6BFA6] shrink-0 hidden sm:inline">
                    {srv.badge}
                  </span>
                </div>

                {/* Brief Description */}
                <div className="mb-4">
                  <p className="text-sm font-medium text-[#433229] leading-relaxed mb-2">
                    {srv.shortDesc}
                  </p>
                  <p className="text-xs text-[#5A483E] leading-relaxed font-normal">
                    {srv.fullDesc}
                  </p>
                </div>

                {/* Estimated Duration (Duración estimada) */}
                <div className="mb-5 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#F3E9D7] border border-[#D6BFA6] group-hover:border-[#B08968]/60 transition-colors">
                  <Clock className="w-3.5 h-3.5 text-[#B08968]" />
                  <span className="text-xs font-semibold text-[#4E3B31]">
                    Duración estimada: <strong className="text-[#7A553A] font-bold">{srv.estimatedDuration}</strong>
                  </span>
                </div>

                {/* Features Checklist */}
                <div className="space-y-2 pb-6 border-b border-[#EAE0D3]">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#4E3B31] block mb-1">
                    Incluye en este servicio:
                  </span>
                  {srv.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-[#5A483E]">
                      <CheckCircle2 className="w-4 h-4 text-[#B08968] shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card CTA Actions: Botón 'Consultar' (WhatsApp precargado) */}
              <div className="pt-6 flex flex-col sm:flex-row items-center gap-3">
                {/* Primary Button 'Consultar' with required pre-filled WhatsApp message */}
                <button
                  type="button"
                  onClick={handleConsultar}
                  className="cursor-pointer w-full sm:flex-1 py-3 px-5 rounded-xl bg-[#B08968] hover:bg-[#9E7757] active:scale-[0.98] text-[#FAF5EB] text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-xs hover:shadow-md flex items-center justify-center gap-2 border border-[#C29F80] group/btn"
                  title="Abrir WhatsApp para consultar por este servicio"
                >
                  <MessageCircle className="w-4 h-4 fill-current text-[#F3E9D7] group-hover/btn:scale-110 transition-transform" />
                  <span>Consultar</span>
                </button>

                {/* Secondary Appointment Modal Trigger */}
                <button
                  type="button"
                  onClick={() => onOpenBooking(srv.id)}
                  className="cursor-pointer w-full sm:w-auto py-3 px-4 rounded-xl bg-[#FFFFFF] hover:bg-[#FAF5EB] text-[#433229] text-xs font-semibold border border-[#D6BFA6] hover:border-[#B08968] transition-colors flex items-center justify-center gap-1.5"
                  title="Agendar turno en el calendario"
                >
                  <span>Agendar Turno</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#7A553A]" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Reassurance Banner under Services: Café con chorrito de crema (#4E3B31) */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-[#4E3B31] text-[#F3E9D7] flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg border border-[#5C473C]">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="font-classic text-xl sm:text-2xl font-bold text-[#FAF5EB]">
              ¿Tu situación no encaja en estos cuatro puntos o tenés dudas?
            </h4>
            <p className="text-xs sm:text-sm text-[#D6BFA6] max-w-2xl font-normal">
              Cada relación de trabajo tiene particularidades. Escribinos un mensaje en WhatsApp y la Dra. Rita Raffaele evaluará tu caso con absoluta confidencialidad y rigor jurídico.
            </p>
          </div>

          <button
            type="button"
            onClick={handleConsultar}
            className="cursor-pointer shrink-0 inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#F3E9D7] text-[#433229] hover:bg-[#FAF5EB] font-bold text-xs uppercase tracking-wider shadow-md transition-all active:scale-[0.98] border border-[#D6BFA6]"
          >
            <MessageCircle className="w-4 h-4 text-[#B08968] fill-current" />
            <span>Consultar</span>
          </button>
        </div>
      </div>
    </section>
  );
};
