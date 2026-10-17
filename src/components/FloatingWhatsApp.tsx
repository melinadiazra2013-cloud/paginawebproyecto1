import React, { useState } from 'react';
import { MessageCircle, X, Calendar, Scale, ShieldAlert, ArrowRight } from 'lucide-react';
import { LAWYER_INFO } from '../data/legalData';

interface FloatingWhatsAppProps {
  onOpenBooking: (serviceId?: string) => void;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ onOpenBooking }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const directWhatsApp = (message: string) => {
    const url = `https://wa.me/${LAWYER_INFO.phoneClean}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    setMenuOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {/* Quick Menu Popover in Classic Coffee & Cream Styling */}
      {menuOpen && (
        <div className="mb-3 w-80 bg-[#FFFFFF] rounded-2xl shadow-2xl border border-[#D6BFA6] p-4 animate-in fade-in slide-in-from-bottom-4 duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-[#EAE0D3]">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-[#B08968] animate-pulse" />
              <span className="text-xs font-bold text-[#433229]">
                Dra. Rita Raffaele en Línea
              </span>
            </div>
            <button
              onClick={() => setMenuOpen(false)}
              className="text-[#7A6456] hover:text-[#433229] p-1"
              aria-label="Cerrar opciones de WhatsApp"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-xs text-[#5A483E] py-3 leading-relaxed">
            Hola, ¿en qué podemos ayudarte hoy? Elegí una opción para escribirnos directo por WhatsApp:
          </p>

          <div className="space-y-2">
            <button
              onClick={() => {
                setMenuOpen(false);
                onOpenBooking();
              }}
              className="cursor-pointer w-full p-2.5 rounded-lg bg-[#FAF5EB] hover:bg-[#F3E9D7] text-[#433229] text-xs font-semibold text-left flex items-center justify-between transition-colors border border-[#D6BFA6]"
            >
              <span className="flex items-center gap-2">
                <Calendar className="w-3.5 h-3.5 text-[#B08968]" />
                <span>Agendar Turno de Consulta</span>
              </span>
              <ArrowRight className="w-3.5 h-3.5 text-[#7A553A]" />
            </button>

            <button
              onClick={() =>
                directWhatsApp(
                  'Hola Dra. Rita Raffaele, me enviaron un telegrama de despido y necesito asesoramiento urgente.'
                )
              }
              className="cursor-pointer w-full p-2.5 rounded-lg bg-[#FAF5EB] hover:bg-[#F3E9D7] text-[#5A483E] text-xs font-medium text-left flex items-center justify-between transition-colors border border-[#D6BFA6]"
            >
              <span className="flex items-center gap-2">
                <Scale className="w-3.5 h-3.5 text-[#B08968]" />
                <span>Urgencia por Despido / Telegrama</span>
              </span>
              <ArrowRight className="w-3.5 h-3.5 text-[#A8988B]" />
            </button>

            <button
              onClick={() =>
                directWhatsApp(
                  'Hola Dra. Rita Raffaele, sufrí un accidente laboral y tengo un reclamo contra mi ART.'
                )
              }
              className="cursor-pointer w-full p-2.5 rounded-lg bg-[#FAF5EB] hover:bg-[#F3E9D7] text-[#5A483E] text-xs font-medium text-left flex items-center justify-between transition-colors border border-[#D6BFA6]"
            >
              <span className="flex items-center gap-2">
                <ShieldAlert className="w-3.5 h-3.5 text-[#B08968]" />
                <span>Accidente de Trabajo / ART</span>
              </span>
              <ArrowRight className="w-3.5 h-3.5 text-[#A8988B]" />
            </button>

            {/* Direct chat button: Marrón Clarito (#B08968) */}
            <button
              onClick={() =>
                directWhatsApp(
                  'Hola Dra. Rita Raffaele, quisiera hacer una consulta laboral general.'
                )
              }
              className="cursor-pointer w-full p-2.5 rounded-lg bg-[#B08968] hover:bg-[#9E7757] text-[#FAF5EB] text-xs font-bold uppercase tracking-wider text-center transition-colors shadow-xs flex items-center justify-center gap-2 border border-[#C29F80]"
            >
              <MessageCircle className="w-4 h-4 fill-current text-[#F3E9D7]" />
              <span>Chatear Directamente</span>
            </button>
          </div>
        </div>
      )}

      {/* Floating Main Button in Marrón Clarito (#B08968 - Caramel Roast) */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="cursor-pointer group relative flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#B08968] hover:bg-[#9E7757] text-[#FAF5EB] shadow-lg hover:shadow-xl transition-all duration-300 active:scale-95 border-2 border-[#FAF5EB]"
        aria-label="Abrir WhatsApp para agendar turnos"
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-60"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#FAF5EB]"></span>
        </span>

        <MessageCircle className="w-5 h-5 fill-current text-[#FAF5EB]" />

        <span className="text-xs font-bold uppercase tracking-wider hidden sm:inline pr-1">
          {menuOpen ? 'Cerrar' : 'Agendar Turno'}
        </span>
      </button>
    </div>
  );
};
