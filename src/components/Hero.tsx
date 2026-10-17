import React from 'react';
import { MessageCircle, Calculator, Award, CheckCircle, Scale, Clock, ArrowRight } from 'lucide-react';
import { LAWYER_INFO } from '../data/legalData';

interface HeroProps {
  onOpenBooking: (serviceId?: string) => void;
  onScrollToCalculator: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onScrollToCalculator }) => {
  const directWhatsAppUrl = `https://wa.me/${LAWYER_INFO.phoneClean}?text=${encodeURIComponent(
    'Hola Dra. Rita Raffaele, me comunico desde la web para agendar una consulta sobre un tema laboral.'
  )}`;

  return (
    <section id="inicio" className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 bg-[#FAF5EB] overflow-hidden border-b border-[#D6BFA6]">
      {/* Subtle classical architectural grid watermark */}
      <div 
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#4E3B31 1px, transparent 1px)`,
          backgroundSize: '28px 28px',
        }}
      />

      {/* Gentle warm creamy ambient glow */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[650px] h-[320px] bg-[#F3E9D7]/80 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline, Value Proposition & Legal Seriousness */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Accreditation Header Note */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#F3E9D7] border border-[#D6BFA6] text-[#4E3B31] text-xs font-semibold tracking-wide">
              <span className="w-2 h-2 rounded-full bg-[#B08968]" />
              <span>Dra. Rita Raffaele · Mat. CPACF T° 108 F° 742</span>
              <span className="text-[#C2A992]">|</span>
              <span className="text-[#7A553A] font-medium hidden sm:inline">Defensa del Trabajador</span>
            </div>

            {/* Main Catchy Headline */}
            <h1 className="font-classic text-3xl sm:text-4xl md:text-5xl lg:text-[3.35rem] font-bold text-[#433229] tracking-tight leading-[1.14]">
              Defendemos tus derechos laborales con{' '}
              <span className="text-[#B08968] italic underline decoration-[#D6BFA6] decoration-2 underline-offset-6">
                firmeza
              </span>
              , excelencia y vocación humana.
            </h1>

            {/* Clear Subtitle */}
            <p className="text-base sm:text-lg text-[#5A483E] leading-relaxed max-w-2xl font-normal">
              Estudio jurídico especializado en derecho del trabajo. Asesoramiento riguroso frente a{' '}
              <strong className="text-[#433229] font-semibold">despidos</strong>,{' '}
              <strong className="text-[#433229] font-semibold">accidentes laborales (ART)</strong>,{' '}
              <strong className="text-[#433229] font-semibold">trabajo no registrado</strong> y{' '}
              <strong className="text-[#433229] font-semibold">liquidaciones</strong>. Primera consulta de evaluación sin cargo.
            </p>

            {/* Trust Highlights Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-xs sm:text-sm text-[#4E3B31] font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#B08968] shrink-0" />
                <span>Honorarios a resultado (pacto de cuota litis)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#B08968] shrink-0" />
                <span>Telegramas de ley gratuitos en el día</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#B08968] shrink-0" />
                <span>Atención directa y exclusiva por la abogada</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#B08968] shrink-0" />
                <span>Audiencias en Tribunales / SECLO y Virtual</span>
              </div>
            </div>

            {/* Prominent CTAs: Botones alineados, misma altura y prolijidad visual */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              {/* Primary Direct WhatsApp CTA in Marrón Clarito */}
              <button
                type="button"
                onClick={() => onOpenBooking()}
                className="cursor-pointer group inline-flex items-center justify-center gap-2.5 h-13 px-6 rounded-xl bg-[#B08968] hover:bg-[#9E7757] active:scale-[0.98] text-[#FAF5EB] text-sm font-bold tracking-wide shadow-md hover:shadow-lg transition-all duration-200 border border-[#C29F80]"
              >
                <MessageCircle className="w-4 h-4 fill-current text-[#FAF5EB]" />
                <span>Agendar Turno por WhatsApp</span>
                <ArrowRight className="w-4 h-4 text-[#FAF5EB]/80 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Secondary Interactive Calculator CTA */}
              <button
                type="button"
                onClick={onScrollToCalculator}
                className="cursor-pointer inline-flex items-center justify-center gap-2.5 h-13 px-6 rounded-xl bg-[#FFFFFF] hover:bg-[#F3E9D7] active:scale-[0.98] text-[#433229] text-sm font-bold tracking-wide border border-[#D6BFA6] hover:border-[#B08968] shadow-xs hover:shadow-sm transition-all"
              >
                <Calculator className="w-4 h-4 text-[#7A553A]" />
                <span>Calcular Mi Liquidación</span>
              </button>
            </div>

            {/* Quick emergency note */}
            <p className="text-xs text-[#7A6456] pt-1 flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#B08968] shrink-0" />
              <span>
                ¿Recibiste un telegrama o carta documento? Los plazos corren:{' '}
                <a
                  href={directWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#433229] font-semibold hover:underline decoration-[#B08968]"
                >
                  Consultá con urgencia
                </a>
              </span>
            </p>
          </div>

          {/* Right Column: Distinguished Lawyer Portrait & Firm Credentials Card */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Classical decorative background frame in warm caramel and cappuccino */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-[#B08968] via-[#D6BFA6] to-[#F3E9D7] rounded-3xl opacity-30 blur-md transform -rotate-1" />

              {/* Card Container */}
              <div className="relative bg-[#FFFFFF] rounded-2xl shadow-lg border border-[#D6BFA6] p-6 sm:p-7 overflow-hidden">
                {/* Top Badge: Office Status */}
                <div className="flex items-center justify-between pb-5 border-b border-[#EAE0D3]">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#4E3B31]">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#B08968]" />
                    <span>Estudio Jurídico Matriculado</span>
                  </div>
                  <span className="text-[11px] font-mono text-[#7A553A] font-semibold bg-[#F3E9D7] px-2.5 py-0.5 rounded border border-[#D6BFA6]">
                    Tribunales · CABA
                  </span>
                </div>

                {/* Lawyer Bio & Portrait Presentation */}
                <div className="py-6 flex flex-col items-center text-center">
                  {/* Portrait Avatar in Café con chorrito de crema (#4E3B31) */}
                  <div className="relative mb-4">
                    <div className="w-28 h-28 rounded-full bg-gradient-to-tr from-[#4E3B31] to-[#7A553A] p-1 shadow-sm">
                      <div className="w-full h-full rounded-full bg-[#4E3B31] flex flex-col items-center justify-center text-white relative overflow-hidden border border-[#D6BFA6]">
                        {/* Elegant Lawyer Monogram */}
                        <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-0.5">
                          <Scale className="w-6 h-6 text-[#D6BFA6]" />
                        </div>
                        <span className="text-[9px] tracking-widest font-classic uppercase font-bold text-[#F3E9D7]">
                          Dra. Raffaele
                        </span>
                      </div>
                    </div>

                    {/* Official Seal Badge */}
                    <div className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full bg-[#B08968] text-white flex items-center justify-center shadow-md border-2 border-white" title="Abogada Matriculada">
                      <Award className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="font-classic text-2xl font-bold text-[#433229]">
                    Dra. Rita Raffaele
                  </h3>
                  <p className="text-xs font-bold uppercase tracking-wider text-[#7A553A] mt-0.5">
                    Abogada Laboralista Especialista
                  </p>
                  <p className="text-xs text-[#7A6456] mt-1 max-w-xs font-medium">
                    Universidad de Buenos Aires (UBA) · CPACF T° 108 F° 742
                  </p>

                  {/* Classical Legal Quote */}
                  <div className="mt-5 p-4 rounded-xl bg-[#F3E9D7] border border-[#D6BFA6] text-xs text-[#4E3B31] italic relative">
                    <span className="text-[#B08968] font-serif text-3xl absolute top-0 left-2 select-none">“</span>
                    <p className="pl-3 pr-2 leading-relaxed">
                      El trabajador nunca debe negociar sus derechos en desventaja. Nuestra misión es garantizar un trato digno y la máxima reparación de ley.
                    </p>
                  </div>
                </div>

                {/* Credential Counters */}
                <div className="grid grid-cols-3 gap-2 pt-4 border-t border-[#EAE0D3] text-center">
                  <div className="p-2.5 rounded-lg bg-[#FAF5EB] border border-[#D6BFA6]">
                    <div className="text-base sm:text-lg font-bold text-[#4E3B31] font-classic">
                      {LAWYER_INFO.yearsExperience}
                    </div>
                    <div className="text-[10px] text-[#7A6456] font-medium uppercase tracking-wide">
                      Años Exp.
                    </div>
                  </div>

                  <div className="p-2.5 rounded-lg bg-[#FAF5EB] border border-[#D6BFA6]">
                    <div className="text-base sm:text-lg font-bold text-[#4E3B31] font-classic">
                      {LAWYER_INFO.workersDefended}
                    </div>
                    <div className="text-[10px] text-[#7A6456] font-medium uppercase tracking-wide">
                      Trabajadores
                    </div>
                  </div>

                  <div className="p-2.5 rounded-lg bg-[#FAF5EB] border border-[#D6BFA6]">
                    <div className="text-base sm:text-lg font-bold text-[#B08968] font-classic">
                      {LAWYER_INFO.resultsStat}
                    </div>
                    <div className="text-[10px] text-[#7A6456] font-medium uppercase tracking-wide">
                      Favorables
                    </div>
                  </div>
                </div>

                {/* Card Direct Booking Button in Marrón Clarito */}
                <div className="mt-5">
                  <button
                    type="button"
                    onClick={() => onOpenBooking()}
                    className="cursor-pointer w-full h-11 px-4 rounded-xl bg-[#B08968] hover:bg-[#9E7757] active:scale-[0.98] text-[#FAF5EB] text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-xs hover:shadow-md border border-[#C29F80]"
                  >
                    <MessageCircle className="w-4 h-4 fill-current text-[#F3E9D7]" />
                    <span>Coordinar Consulta con la Dra. Raffaele</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
