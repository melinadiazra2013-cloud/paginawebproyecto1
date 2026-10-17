import React from 'react';
import { MapPin, Phone, Mail, Clock, Shield, Scale, MessageCircle } from 'lucide-react';
import { LAWYER_INFO } from '../data/legalData';

interface FooterProps {
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  const currentYear = 2026;

  const directWhatsAppUrl = `https://wa.me/${LAWYER_INFO.phoneClean}?text=${encodeURIComponent(
    'Hola Dra. Rita Raffaele, me contacto desde el sitio web para solicitar asesoramiento legal.'
  )}`;

  return (
    <footer id="contacto" className="bg-[#4E3B31] text-[#F3E9D7] border-t border-[#5C473C]">
      {/* Upper Footer: Contact & Office Details */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Col 1: Law Firm Identity */}
          <div className="lg:col-span-4 space-y-4 text-left">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#3E2F26] text-[#D6BFA6] flex items-center justify-center border border-[#7A553A]/40">
                <Scale className="w-5 h-5" />
              </div>
              <div>
                <span className="font-classic text-xl font-bold tracking-tight text-[#FAF5EB] block">
                  ESTUDIO RAFFAELE & ASOC.
                </span>
                <span className="text-[11px] text-[#D6BFA6] tracking-wider uppercase font-semibold">
                  Derecho Laboral y de la Seguridad Social
                </span>
              </div>
            </div>

            <p className="text-xs text-[#E8DCCF] leading-relaxed font-normal">
              Estudio jurídico dedicado a la defensa integral de los derechos de los trabajadores y empleados. Especialistas en despidos, accidentes laborales y negociaciones ante SECLO y fueros judiciales.
            </p>

            <div className="pt-2 text-xs text-[#D6BFA6] space-y-1">
              <div><strong>Titular:</strong> {LAWYER_INFO.name}</div>
              <div><strong>Matrícula:</strong> {LAWYER_INFO.credentials[1]}</div>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-2 space-y-3 text-left">
            <h4 className="text-xs uppercase tracking-widest font-semibold text-[#D6BFA6]">
              Navegación
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#inicio" className="hover:text-white transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-white transition-colors">
                  Servicios Laborales
                </a>
              </li>
              <li>
                <a href="#la-abogada" className="hover:text-white transition-colors">
                  Dra. Rita Raffaele
                </a>
              </li>
              <li>
                <a href="#calculadora" className="hover:text-white transition-colors">
                  Calculadora de Indemnización
                </a>
              </li>
              <li>
                <a href="#ubicacion-horarios" className="hover:text-white transition-colors">
                  Ubicación y Horarios
                </a>
              </li>
              <li>
                <a href="#preguntas" className="hover:text-white transition-colors">
                  Preguntas Frecuentes
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Practical Office Location & Hours */}
          <div className="lg:col-span-3 space-y-3 text-left">
            <h4 className="text-xs uppercase tracking-widest font-semibold text-[#D6BFA6]">
              Sede y Horarios
            </h4>
            <ul className="space-y-3 text-xs text-[#E8DCCF]">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#D6BFA6] shrink-0 mt-0.5" />
                <span>{LAWYER_INFO.address}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#D6BFA6] shrink-0 mt-0.5" />
                <div>
                  <span className="block font-medium text-white">{LAWYER_INFO.hours}</span>
                  <span className="text-[11px] text-[#D6BFA6]">{LAWYER_INFO.emergencyNote}</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Col 4: Direct WhatsApp & Phone CTAs */}
          <div className="lg:col-span-3 space-y-4 text-left">
            <h4 className="text-xs uppercase tracking-widest font-semibold text-[#D6BFA6]">
              Canales Directos
            </h4>
            <div className="space-y-2.5">
              <a
                href={directWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-3.5 rounded-lg bg-[#B08968] hover:bg-[#9E7757] text-[#FAF5EB] text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 shadow-xs border border-[#C29F80]"
              >
                <MessageCircle className="w-4 h-4 fill-current text-[#F3E9D7]" />
                <span>WhatsApp: {LAWYER_INFO.phoneDisplay}</span>
              </a>

              <a
                href={`tel:${LAWYER_INFO.phoneClean}`}
                className="w-full py-2 px-3 rounded-lg bg-[#3E2F26] hover:bg-[#4A392F] text-[#FAF5EB] text-xs font-medium transition-colors flex items-center justify-center gap-2 border border-[#5C473C]"
              >
                <Phone className="w-3.5 h-3.5 text-[#D6BFA6]" />
                <span>Llamar al Estudio</span>
              </a>

              <div className="flex items-center gap-2 text-xs text-[#D6BFA6] pt-1 justify-center">
                <Mail className="w-3.5 h-3.5 text-[#D6BFA6]" />
                <span className="text-[11px]">{LAWYER_INFO.email}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Disclaimer & Ethical Notice */}
        <div className="mt-12 pt-8 border-t border-[#5C473C] text-left">
          <div className="flex items-start gap-3 p-4 rounded-xl bg-[#3E2F26] border border-[#5C473C] text-[11px] text-[#D6BFA6] leading-relaxed">
            <Shield className="w-5 h-5 text-[#B08968] shrink-0 mt-0.5" />
            <div>
              <strong className="text-[#FAF5EB] block mb-1">
                Aviso Legal y Deontológico:
              </strong>
              La información contenida en este sitio web tiene carácter estrictamente orientativo y divulgativo, no constituyendo asesoramiento formal hasta tanto medie patrocinio letrado suscripto. En materia laboral rige el principio protectorio del trabajador (art. 14 bis CN y Ley 20.744). Los telegramas laborales ley 23.789 son gratuitos para el trabajador ante el Correo Oficial. Ejercicio profesional matriculado ante el Colegio Público de la Abogacía de la Capital Federal (CPACF) y Colegio de Abogados de San Isidro (CASI), sujeto a sus respectivos códigos de ética.
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-[#5C473C] flex flex-col sm:flex-row items-center justify-between text-xs text-[#D6BFA6] gap-4">
          <p>© {currentYear} Estudio Jurídico Dra. Rita Raffaele. Todos los derechos reservados.</p>
          <div className="flex items-center gap-4 text-xs">
            <span>Secreto Profesional Garantizado</span>
            <span>·</span>
            <span>Atención CABA y GBA</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
