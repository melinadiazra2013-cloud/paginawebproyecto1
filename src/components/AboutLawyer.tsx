import React from 'react';
import { Award, GraduationCap, Scale, ShieldCheck, CheckCircle2, MessageCircle } from 'lucide-react';
import { LAWYER_INFO } from '../data/legalData';

interface AboutLawyerProps {
  onOpenBooking: () => void;
}

export const AboutLawyer: React.FC<AboutLawyerProps> = ({ onOpenBooking }) => {
  return (
    <section id="la-abogada" className="py-20 lg:py-28 bg-[#FFFFFF] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Visual representation & credentials */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md">
              {/* Outer classic frame in Creamy Latte */}
              <div className="p-3 bg-[#F3E9D7] rounded-3xl border border-[#D6BFA6] shadow-md">
                <div className="bg-[#4E3B31] text-[#FAF5EB] rounded-2xl p-8 relative overflow-hidden border border-[#5C473C]">
                  {/* Subtle seal watermark */}
                  <div className="absolute -right-8 -bottom-8 w-44 h-44 text-white/5 pointer-events-none">
                    <Scale className="w-full h-full" />
                  </div>

                  <div className="flex flex-col items-center text-center relative z-10">
                    <div className="w-24 h-24 rounded-full bg-[#3E2F26] border-2 border-[#D6BFA6]/60 p-2 flex items-center justify-center mb-4 shadow-inner">
                      <Scale className="w-12 h-12 text-[#D6BFA6]" />
                    </div>

                    <span className="text-[11px] uppercase tracking-widest text-[#D6BFA6] font-semibold mb-1">
                      Directora del Estudio
                    </span>

                    <h3 className="font-classic text-3xl font-bold text-[#FAF5EB] mb-1">
                      Dra. Rita Raffaele
                    </h3>

                    <p className="text-xs text-[#D6BFA6] font-medium mb-6">
                      Abogada Laboralista · Mat. CPACF T° 108 F° 742
                    </p>

                    {/* Pillars box */}
                    <div className="w-full space-y-2.5 pt-4 border-t border-[#5C473C] text-left text-xs">
                      <div className="flex items-center gap-2.5 text-[#F3E9D7]">
                        <GraduationCap className="w-4 h-4 text-[#D6BFA6] shrink-0" />
                        <span>Graduada con Honores — Fac. de Derecho (UBA)</span>
                      </div>
                      <div className="flex items-center gap-2.5 text-[#F3E9D7]">
                        <Award className="w-4 h-4 text-[#D6BFA6] shrink-0" />
                        <span>Especialista en Litigación Laboral y SECLO</span>
                      </div>
                      <div className="flex items-center gap-2.5 text-[#F3E9D7]">
                        <ShieldCheck className="w-4 h-4 text-[#D6BFA6] shrink-0" />
                        <span>Miembro de la Asoc. de Abogados Laboralistas</span>
                      </div>
                    </div>

                    {/* Direct Contact Button */}
                    <button
                      onClick={onOpenBooking}
                      className="cursor-pointer mt-7 w-full py-2.5 px-4 rounded-xl bg-[#F3E9D7] hover:bg-[#FAF5EB] text-[#433229] font-bold text-xs uppercase tracking-wider shadow-md transition-colors flex items-center justify-center gap-2 border border-[#D6BFA6]"
                    >
                      <MessageCircle className="w-4 h-4 text-[#B08968]" />
                      <span>Solicitar Turno Personalizado</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative, philosophy, commitment */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#7A553A]">
              <span>Trayectoria y Filosofía</span>
              <span aria-hidden="true">·</span>
              <span>Compromiso con el Trabajador</span>
            </div>

            <h2 className="font-classic text-3xl sm:text-4xl font-bold text-[#433229] leading-tight">
              Una abogada cercana, con la firmeza jurídica que exige tu caso.
            </h2>

            <p className="text-base text-[#5A483E] leading-relaxed font-normal">
              Con más de 10 años de ejercicio ininterrumpido en los Tribunales del Trabajo de la Capital Federal y la Provincia de Buenos Aires, la Dra. Rita Raffaele ha defendido a miles de dependientes frente a las más diversas situaciones de vulneración de derechos laborales.
            </p>

            <p className="text-base text-[#5A483E] leading-relaxed font-normal">
              A diferencia de las corporaciones masivas donde los casos son delegados a intermediarios impersonales, en nuestro estudio cada consulta, cada telegrama y cada audiencia son diseñados y seguidos directamente por la Dra. Raffaele, combinando empatía humana con precisión procesal.
            </p>

            {/* Key commitments */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-[#FAF5EB] border border-[#D6BFA6]">
                <div className="flex items-center gap-2 font-bold text-sm text-[#433229] mb-1">
                  <CheckCircle2 className="w-4 h-4 text-[#B08968]" />
                  <span>Honorarios a Resultado</span>
                </div>
                <p className="text-xs text-[#7A6456] leading-relaxed">
                  No solicitamos sumas de inicio. Nuestro compromiso está alineado con tu éxito: cobramos solo si vos cobrás.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#FAF5EB] border border-[#D6BFA6]">
                <div className="flex items-center gap-2 font-bold text-sm text-[#433229] mb-1">
                  <CheckCircle2 className="w-4 h-4 text-[#B08968]" />
                  <span>Respuesta Inmediata</span>
                </div>
                <p className="text-xs text-[#7A6456] leading-relaxed">
                  En materia laboral, 48 horas pueden definir la vigencia de un reclamo. Redactamos tus telegramas de ley en el día.
                </p>
              </div>
            </div>

            {/* Quote box in Creamy Latte & Caramel rule */}
            <div className="p-4 rounded-xl border-l-4 border-[#B08968] bg-[#F3E9D7] text-[#433229] text-sm italic">
              “La justicia laboral no es una dádiva; es una garantía constitucional que debe hacerse respetar sin vacilaciones.”
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
