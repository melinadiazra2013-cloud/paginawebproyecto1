import React, { useState, useEffect } from 'react';
import { X, MessageCircle, Calendar, MapPin, Video, CheckCircle2, ArrowRight, ShieldCheck, AlertCircle } from 'lucide-react';
import { LAWYER_INFO, SERVICES } from '../data/legalData';
import { sanitizeText, sanitizeMultilineText, sanitizePhone } from '../utils/sanitize';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultServiceId?: string;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
  defaultServiceId,
}) => {
  const [selectedService, setSelectedService] = useState(defaultServiceId || 'despidos');
  const [modality, setModality] = useState<'presencial' | 'virtual'>('presencial');
  const [timing, setTiming] = useState('urgente');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [details, setDetails] = useState('');
  const [validationError, setValidationError] = useState<string | null>(null);

  useEffect(() => {
    if (defaultServiceId) {
      setSelectedService(defaultServiceId);
    }
  }, [defaultServiceId]);

  if (!isOpen) return null;

  const currentServiceName =
    SERVICES.find((s) => s.id === selectedService)?.title || 'Asesoramiento Laboral General';

  const generateWhatsAppMessage = () => {
    const safeName = sanitizeText(name, 60);
    const safePhone = sanitizePhone(phone, 25);
    const safeDetails = sanitizeMultilineText(details, 300);

    let msg = `Hola Dra. Rita Raffaele, quiero agendar un turno de consulta laboral.\n\n`;
    msg += `📋 Motivo: ${currentServiceName}\n`;
    msg += `🏛 Modalidad: ${modality === 'presencial' ? 'Presencial (Estudio Tribunales, CABA)' : 'Virtual (Videollamada / Online)'}\n`;
    msg += `⏱ Disponibilidad: ${
      timing === 'urgente'
        ? 'Urgente / Primer turno disponible'
        : timing === 'semana'
        ? 'Esta semana'
        : 'Próxima semana'
    }\n`;
    if (safeName) msg += `👤 Nombre: ${safeName}\n`;
    if (safePhone) msg += `📞 Teléfono: ${safePhone}\n`;
    if (safeDetails) msg += `📝 Situación: ${safeDetails}\n`;
    msg += `\n¿Qué días y horarios tendrían disponibles para confirmar el turno? Gracias.`;
    return msg;
  };

  const handleOpenWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    setValidationError(null);

    // Sanitize values
    const safeName = sanitizeText(name, 60);
    const safePhone = sanitizePhone(phone, 25);
    const safeDetails = sanitizeMultilineText(details, 300);

    // Basic length/format validation
    if (name.trim().length > 0 && safeName.length === 0) {
      setValidationError('El nombre ingresado contiene caracteres no permitidos.');
      return;
    }

    if (phone.trim().length > 0 && safePhone.length === 0) {
      setValidationError('El número de teléfono contiene caracteres no permitidos.');
      return;
    }

    const text = generateWhatsAppMessage();
    const cleanPhone = LAWYER_INFO.phoneClean.replace(/[^\d]/g, '');
    const url = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(text)}`;

    window.open(url, '_blank', 'noopener,noreferrer');
    onClose();
  };

  const handleDirectWhatsApp = () => {
    const cleanPhone = LAWYER_INFO.phoneClean.replace(/[^\d]/g, '');
    const url = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(
      'Hola Dra. Rita Raffaele, deseo agendar un turno de consulta laboral con su estudio.'
    )}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div
        className="relative bg-[#FFFFFF] w-full max-w-2xl rounded-2xl shadow-2xl border border-[#D6BFA6] overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Modal Header: Café con chorrito de crema (#4E3B31) */}
        <div className="bg-[#4E3B31] px-6 py-5 text-[#FAF5EB] flex items-start justify-between border-b border-[#5C473C]">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#3E2F26] text-xs text-[#D6BFA6] font-medium mb-1.5 border border-[#5C473C]">
              <Calendar className="w-3.5 h-3.5 text-[#B08968]" />
              <span>Agenda de Turnos Directa</span>
            </div>
            <h3 id="modal-title" className="text-xl sm:text-2xl font-bold font-classic text-[#FAF5EB]">
              Agendá tu Turno con la Dra. Rita Raffaele
            </h3>
            <p className="text-xs text-[#D6BFA6] mt-0.5">
              Primera consulta de evaluación sin cargo · Atención en Tribunales o Virtual
            </p>
          </div>
          <button
            onClick={onClose}
            className="cursor-pointer p-1.5 rounded-lg text-[#D6BFA6] hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Cerrar ventana modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body / Form */}
        <form onSubmit={handleOpenWhatsApp} className="p-6 space-y-5 bg-[#FFFFFF]">
          {validationError && (
            <div className="p-3 rounded-lg bg-amber-50 border border-amber-300 text-amber-900 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-amber-700 shrink-0" />
              <span>{validationError}</span>
            </div>
          )}

          {/* Service Selector */}
          <div>
            <label className="block text-xs font-bold text-[#4E3B31] uppercase tracking-wider mb-2">
              1. Motivo principal de la consulta
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {SERVICES.map((srv) => (
                <button
                  type="button"
                  key={srv.id}
                  onClick={() => setSelectedService(srv.id)}
                  className={`text-left p-3 rounded-lg border text-xs font-medium transition-all flex items-start gap-2.5 ${
                    selectedService === srv.id
                      ? 'border-[#B08968] bg-[#F3E9D7] text-[#433229] font-semibold ring-1 ring-[#B08968]'
                      : 'border-[#D6BFA6] hover:border-[#B08968] text-[#5A483E] bg-[#FFFFFF]'
                  }`}
                >
                  <span
                    className={`mt-0.5 w-4 h-4 rounded-full flex items-center justify-center border text-[10px] shrink-0 ${
                      selectedService === srv.id
                        ? 'border-[#B08968] bg-[#B08968] text-white'
                        : 'border-[#D6BFA6] text-transparent'
                    }`}
                  >
                    ✓
                  </span>
                  <span className="line-clamp-2 leading-relaxed">{srv.title}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Modality & Timing */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-[#4E3B31] uppercase tracking-wider mb-2">
                2. Modalidad de atención
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setModality('presencial')}
                  className={`p-2.5 rounded-lg border text-xs font-medium flex flex-col items-center justify-center gap-1.5 transition-all ${
                    modality === 'presencial'
                      ? 'border-[#B08968] bg-[#F3E9D7] text-[#433229] font-semibold ring-1 ring-[#B08968]'
                      : 'border-[#D6BFA6] text-[#5A483E] hover:border-[#B08968]'
                  }`}
                >
                  <MapPin className="w-4 h-4 text-[#7A553A]" />
                  <span>Presencial (Tribunales)</span>
                </button>

                <button
                  type="button"
                  onClick={() => setModality('virtual')}
                  className={`p-2.5 rounded-lg border text-xs font-medium flex flex-col items-center justify-center gap-1.5 transition-all ${
                    modality === 'virtual'
                      ? 'border-[#B08968] bg-[#F3E9D7] text-[#433229] font-semibold ring-1 ring-[#B08968]'
                      : 'border-[#D6BFA6] text-[#5A483E] hover:border-[#B08968]'
                  }`}
                >
                  <Video className="w-4 h-4 text-[#7A553A]" />
                  <span>Videollamada / Online</span>
                </button>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#4E3B31] uppercase tracking-wider mb-2">
                3. Urgencia / Preferencia
              </label>
              <div className="grid grid-cols-3 gap-1.5">
                {[
                  { id: 'urgente', label: 'Urgente (Hoy)' },
                  { id: 'semana', label: 'Esta semana' },
                  { id: 'proxima', label: 'Próxima sem.' },
                ].map((t) => (
                  <button
                    type="button"
                    key={t.id}
                    onClick={() => setTiming(t.id)}
                    className={`p-2 rounded-lg border text-[11px] font-medium text-center transition-all ${
                      timing === t.id
                        ? 'border-[#B08968] bg-[#F3E9D7] text-[#433229] font-bold'
                        : 'border-[#D6BFA6] text-[#5A483E] hover:border-[#B08968]'
                    }`}
                  >
                    {t.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Contact inputs with XSS and injection sanitization */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label htmlFor="input-name" className="block text-xs font-semibold text-[#4E3B31] mb-1">
                Tu Nombre y Apellido
              </label>
              <input
                id="input-name"
                type="text"
                maxLength={60}
                autoComplete="name"
                placeholder="Ej. Juan Pérez"
                value={name}
                onChange={(e) => {
                  setName(sanitizeText(e.target.value, 60));
                  if (validationError) setValidationError(null);
                }}
                className="w-full text-xs px-3 py-2 border border-[#D6BFA6] rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#B08968] bg-[#FAF5EB] text-[#433229]"
              />
            </div>
            <div>
              <label htmlFor="input-phone" className="block text-xs font-semibold text-[#4E3B31] mb-1">
                Teléfono de contacto
              </label>
              <input
                id="input-phone"
                type="tel"
                maxLength={25}
                inputMode="tel"
                autoComplete="tel"
                placeholder="Ej. 11 4455-6677"
                value={phone}
                onChange={(e) => {
                  setPhone(sanitizePhone(e.target.value, 25));
                  if (validationError) setValidationError(null);
                }}
                className="w-full text-xs px-3 py-2 border border-[#D6BFA6] rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#B08968] bg-[#FAF5EB] text-[#433229]"
              />
            </div>
          </div>

          {/* Situation note with XSS protection */}
          <div>
            <label htmlFor="input-details" className="block text-xs font-semibold text-[#4E3B31] mb-1">
              Breve descripción del caso (opcional)
            </label>
            <textarea
              id="input-details"
              rows={2}
              maxLength={300}
              placeholder="Ej. Me enviaron telegrama de despido el viernes / Tuve un accidente en la fábrica..."
              value={details}
              onChange={(e) => {
                setDetails(sanitizeMultilineText(e.target.value, 300));
                if (validationError) setValidationError(null);
              }}
              className="w-full text-xs px-3 py-2 border border-[#D6BFA6] rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#B08968] bg-[#FAF5EB] text-[#433229] resize-none"
            />
          </div>

          {/* Message Preview Box */}
          <div className="bg-[#FAF5EB] border border-[#D6BFA6] rounded-xl p-3 text-xs text-[#5A483E]">
            <div className="flex items-center gap-1.5 font-semibold text-[#433229] mb-1 text-[11px]">
              <MessageCircle className="w-3.5 h-3.5 text-[#B08968]" />
              <span>Se abrirá WhatsApp con el siguiente mensaje listo:</span>
            </div>
            <p className="text-[11px] text-[#5A483E] italic line-clamp-3 bg-white p-2 rounded border border-[#E0D0BE] font-mono">
              {generateWhatsAppMessage()}
            </p>
          </div>

          {/* CTA Buttons: Botón en Marrón Clarito (#B08968) */}
          <div className="pt-2 flex flex-col sm:flex-row gap-3 items-center">
            <button
              type="submit"
              className="cursor-pointer w-full sm:flex-1 py-3 px-4 rounded-xl bg-[#B08968] hover:bg-[#9E7757] active:scale-[0.99] text-[#FAF5EB] font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 border border-[#C29F80]"
            >
              <MessageCircle className="w-4 h-4 fill-current text-[#F3E9D7]" />
              <span>Abrir WhatsApp y Coordinar Turno</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </button>

            <button
              type="button"
              onClick={handleDirectWhatsApp}
              className="cursor-pointer text-xs text-[#7A6456] hover:text-[#433229] underline decoration-[#D6BFA6] py-1 px-2"
            >
              Ir directo a WhatsApp sin completar
            </button>
          </div>

          {/* Legal guarantee note */}
          <div className="flex items-center justify-center gap-2 text-[11px] text-[#7A6456] pt-1">
            <ShieldCheck className="w-3.5 h-3.5 text-[#B08968]" />
            <span>Formulario seguro con sanitización de datos · Estricto secreto profesional</span>
          </div>
        </form>
      </div>
    </div>
  );
};
