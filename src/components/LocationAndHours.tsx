import React, { useState } from 'react';
import { MapPin, Clock, Navigation, Compass, Copy, Check, Shield, Train, Bus, Car, ExternalLink, Calendar } from 'lucide-react';
import { LAWYER_INFO } from '../data/legalData';

interface LocationAndHoursProps {
  onOpenBooking: () => void;
}

export const LocationAndHours: React.FC<LocationAndHoursProps> = ({ onOpenBooking }) => {
  const [copied, setCopied] = useState(false);

  const fullAddress = `${LAWYER_INFO.address}, ${LAWYER_INFO.city}`;
  
  // Destination coordinates / query for routing
  const encodedDestination = encodeURIComponent('Av. Corrientes 1435, CABA, Argentina');
  const googleMapsRouteUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodedDestination}`;
  const wazeRouteUrl = `https://www.waze.com/ul?q=${encodedDestination}&navigate=yes`;
  const mapEmbedUrl = `https://maps.google.com/maps?q=Av.+Corrientes+1435,+C1042AAA+CABA,+Argentina&t=&z=16&ie=UTF8&iwloc=&output=embed`;

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(fullAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const scheduleItems = [
    {
      days: 'Lunes a Viernes',
      hours: '09:00 a 18:30 hs',
      note: 'Atención presencial en estudio con turno previo y consultas virtuales por videollamada.',
      status: 'Horario habitual',
      active: true,
    },
    {
      days: 'Sábados',
      hours: '09:00 a 13:00 hs',
      note: 'Consultas laborales virtuales y audiencias pactadas con anticipación.',
      status: 'Atención con cita',
      active: true,
    },
    {
      days: 'Domingos y Feriados',
      hours: 'Guardia Pasiva 24 hs',
      note: 'Recepción urgente de telegramas de despido, cartas documento y accidentes laborales vía WhatsApp.',
      status: 'Guardia activa',
      active: false,
    },
  ];

  return (
    <section id="ubicacion-horarios" className="py-20 lg:py-28 bg-[#FAF5EB] border-t border-[#D6BFA6] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#7A553A] mb-2">
            <span>Sede Central & Horarios</span>
            <span aria-hidden="true">·</span>
            <span>Tribunales · CABA</span>
          </div>

          <h2 className="font-classic text-3xl sm:text-4xl md:text-5xl font-bold text-[#433229] tracking-tight">
            Días, Horarios de Atención y Ubicación
          </h2>

          <div className="w-16 h-0.5 bg-[#B08968] mx-auto my-4" />

          <p className="text-base text-[#5A483E] leading-relaxed font-normal">
            Estamos ubicados en el corazón del distrito judicial de Buenos Aires.
            Coordiná tu visita presencial o accedé directamente a las indicaciones de llegada en tu GPS.
          </p>
        </div>

        {/* Main Grid: Schedule Cards (Left) and Interactive Map (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          
          {/* Left Column: Días y Horarios + Datos de Sede */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            {/* Schedule Container */}
            <div className="bg-[#FFFFFF] rounded-2xl p-6 sm:p-7 border border-[#D6BFA6] shadow-md">
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-[#EAE0D3]">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-lg bg-[#F3E9D7] border border-[#D6BFA6] flex items-center justify-center text-[#7A553A]">
                    <Clock className="w-5 h-5 text-[#B08968]" />
                  </div>
                  <div>
                    <h3 className="font-classic text-lg font-bold text-[#433229]">
                      Horarios de Atención
                    </h3>
                    <p className="text-xs text-[#7A6456]">
                      Atención personalizada por la Dra. Rita Raffaele
                    </p>
                  </div>
                </div>

                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#F3E9D7] border border-[#D6BFA6] text-[11px] font-semibold text-[#7A553A]">
                  <span className="w-2 h-2 rounded-full bg-[#B08968] animate-pulse" />
                  <span>Abierto</span>
                </span>
              </div>

              {/* Schedule List */}
              <div className="space-y-4">
                {scheduleItems.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-[#FAF5EB] border border-[#EAE0D3] hover:border-[#B08968] transition-colors"
                  >
                    <div className="flex items-baseline justify-between mb-1">
                      <span className="font-bold text-sm text-[#433229]">
                        {item.days}
                      </span>
                      <span className="text-xs font-bold text-[#B08968] font-mono">
                        {item.hours}
                      </span>
                    </div>
                    <p className="text-xs text-[#5A483E] leading-relaxed">
                      {item.note}
                    </p>
                  </div>
                ))}
              </div>

              {/* Schedule CTA */}
              <div className="mt-5 pt-4 border-t border-[#EAE0D3] flex items-center justify-between gap-3">
                <span className="text-xs text-[#7A6456]">
                  ¿Necesitás una cita fuera de hora?
                </span>
                <button
                  type="button"
                  onClick={onOpenBooking}
                  className="cursor-pointer text-xs font-bold text-[#B08968] hover:text-[#7A553A] flex items-center gap-1 underline underline-offset-4 decoration-[#D6BFA6]"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Agendar turno especial</span>
                </button>
              </div>
            </div>

            {/* Address & Public Transport Reference Card */}
            <div className="bg-[#FFFFFF] rounded-2xl p-6 sm:p-7 border border-[#D6BFA6] shadow-md space-y-4">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#F3E9D7] border border-[#D6BFA6] flex items-center justify-center text-[#7A553A] shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5 text-[#B08968]" />
                  </div>
                  <div>
                    <h4 className="font-classic text-base font-bold text-[#433229]">
                      Sede Tribunales (CABA)
                    </h4>
                    <p className="text-xs text-[#5A483E] font-medium leading-relaxed mt-0.5">
                      {LAWYER_INFO.address}
                    </p>
                    <p className="text-[11px] text-[#7A6456]">
                      Entre calle Uruguay y Talcahuano · Edificio de oficinas profesionales
                    </p>
                  </div>
                </div>

                {/* Copy Address Button */}
                <button
                  type="button"
                  onClick={handleCopyAddress}
                  className="cursor-pointer shrink-0 p-2 rounded-lg bg-[#FAF5EB] hover:bg-[#F3E9D7] text-[#7A553A] border border-[#D6BFA6] hover:border-[#B08968] transition-all flex items-center gap-1.5 text-xs font-medium"
                  title="Copiar dirección completa al portapapeles"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-700" />
                      <span className="text-emerald-800 font-bold text-[11px]">¡Copiado!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-[#B08968]" />
                      <span className="text-[11px] hidden sm:inline">Copiar</span>
                    </>
                  )}
                </button>
              </div>

              {/* Transit hints */}
              <div className="pt-3 border-t border-[#EAE0D3] grid grid-cols-3 gap-2 text-center text-[11px] text-[#5A483E]">
                <div className="p-2 rounded-lg bg-[#FAF5EB] border border-[#EAE0D3]">
                  <Train className="w-3.5 h-3.5 text-[#B08968] mx-auto mb-1" />
                  <span className="font-semibold block text-[#433229]">Subte B</span>
                  <span className="text-[10px] text-[#7A6456]">Est. Uruguay</span>
                </div>
                <div className="p-2 rounded-lg bg-[#FAF5EB] border border-[#EAE0D3]">
                  <Bus className="w-3.5 h-3.5 text-[#B08968] mx-auto mb-1" />
                  <span className="font-semibold block text-[#433229]">Líneas</span>
                  <span className="text-[10px] text-[#7A6456]">5, 24, 29, 39, 140</span>
                </div>
                <div className="p-2 rounded-lg bg-[#FAF5EB] border border-[#EAE0D3]">
                  <Car className="w-3.5 h-3.5 text-[#B08968] mx-auto mb-1" />
                  <span className="font-semibold block text-[#433229]">Cocheras</span>
                  <span className="text-[10px] text-[#7A6456]">A 50 metros</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Embedded Google Maps & Direct Routing Buttons (Google Maps / Waze) */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="bg-[#FFFFFF] rounded-2xl p-4 sm:p-5 border border-[#D6BFA6] shadow-md flex-1 flex flex-col justify-between">
              
              {/* Map Container with Overlay Header */}
              <div className="relative w-full h-[360px] sm:h-[420px] rounded-xl overflow-hidden border border-[#D6BFA6] bg-[#F3E9D7]/40 shadow-inner">
                {/* Embedded Google Maps iframe */}
                <iframe
                  title="Mapa de ubicación Estudio Jurídico Dra. Rita Raffaele"
                  src={mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full filter contrast-[1.03]"
                />

                {/* Floating Map Location Badge */}
                <div className="absolute top-3 left-3 bg-[#FAF5EB]/95 backdrop-blur-md px-3.5 py-2 rounded-xl shadow-md border border-[#D6BFA6] max-w-[280px] pointer-events-none">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-[#433229]">
                    <Shield className="w-3.5 h-3.5 text-[#B08968]" />
                    <span>Estudio Jurídico Dra. Rita Raffaele</span>
                  </div>
                  <p className="text-[11px] text-[#7A6456] truncate mt-0.5">
                    Av. Corrientes 1435, Piso 6 · Tribunales
                  </p>
                </div>
              </div>

              {/* Direct Route Action Bar for Phones and Desktop (Google Maps / Waze) */}
              <div className="mt-5 pt-4 border-t border-[#EAE0D3]">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mb-3">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#433229] block">
                      ¿Cómo llegar desde tu ubicación?
                    </span>
                    <span className="text-[11px] text-[#7A6456]">
                      Tocá un botón para abrir la ruta directa en el GPS de tu celular:
                    </span>
                  </div>

                  <span className="text-[10px] font-semibold text-[#7A553A] bg-[#F3E9D7] px-2.5 py-1 rounded border border-[#D6BFA6] hidden md:inline">
                    Navegación GPS Turn-by-Turn
                  </span>
                </div>

                {/* Direct GPS Action Buttons */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {/* Google Maps Route Button */}
                  <a
                    href={googleMapsRouteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer group flex items-center justify-center gap-2.5 py-3 px-4 rounded-xl bg-[#B08968] hover:bg-[#9E7757] active:scale-[0.98] text-[#FAF5EB] font-bold text-xs uppercase tracking-wider shadow-sm hover:shadow-md transition-all border border-[#C29F80]"
                  >
                    <Navigation className="w-4 h-4 text-[#F3E9D7] group-hover:rotate-45 transition-transform" />
                    <span>Abrir Ruta en Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5 opacity-80" />
                  </a>

                  {/* Waze Route Button */}
                  <a
                    href={wazeRouteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer group flex items-center justify-center gap-2.5 py-3 px-4 rounded-xl bg-[#FAF5EB] hover:bg-[#F3E9D7] active:scale-[0.98] text-[#433229] font-bold text-xs uppercase tracking-wider shadow-2xs hover:shadow-sm transition-all border border-[#D6BFA6] hover:border-[#B08968]"
                  >
                    <Compass className="w-4 h-4 text-[#B08968] group-hover:rotate-90 transition-transform" />
                    <span>Abrir Ruta en Waze</span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#7A6456]" />
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
