import React, { useState } from 'react';
import { MessageCircle, Info, RotateCcw } from 'lucide-react';
import { LAWYER_INFO } from '../data/legalData';
import { sanitizeNumber } from '../utils/sanitize';

export const SeveranceCalculator: React.FC = () => {
  const [grossSalary, setGrossSalary] = useState<number>(650000);
  const [years, setYears] = useState<number>(3);
  const [months, setMonths] = useState<number>(4);
  const [preavisoNotified, setPreavisoNotified] = useState<boolean>(false);
  const [causeType, setCauseType] = useState<'incausado' | 'renuncia' | 'acuerdo'>('incausado');

  // Calculation Logic (Standard Argentine Labor Law LCT rules)
  const computedYears = months > 3 ? years + 1 : Math.max(1, years);
  const art245Compensation = causeType === 'incausado' ? grossSalary * computedYears : 0;

  const preavisoMonths = computedYears > 5 ? 2 : 1;
  const preavisoCompensation =
    causeType === 'incausado' && !preavisoNotified ? grossSalary * preavisoMonths : 0;

  const proportionalItems = Math.round(grossSalary * 0.45);
  const totalEstimated = art245Compensation + preavisoCompensation + proportionalItems;

  const handleSendCalculationToWhatsApp = () => {
    let text = `Hola Dra. Rita Raffaele, realicé el cálculo orientativo de indemnización en su sitio web:\n\n`;
    text += `💰 Sueldo bruto aproximado: $${grossSalary.toLocaleString('es-AR')}\n`;
    text += `⏱ Antigüedad: ${years} años y ${months} meses\n`;
    text += `📜 Tipo de situación: ${
      causeType === 'incausado'
        ? 'Despido sin causa / Despido indirecto'
        : causeType === 'renuncia'
        ? 'Renuncia / Liquidación final'
        : 'Acuerdo voluntario / Mutuo acuerdo'
    }\n`;
    text += `🔔 ¿Otorgaron preaviso?: ${preavisoNotified ? 'Sí' : 'No (corresponde indemnización)'}\n`;
    text += `📊 Monto estimado resultante: $${totalEstimated.toLocaleString('es-AR')}\n\n`;
    text += `Quisiera agendar un turno o enviarles mis recibos de sueldo para que la Dra. Raffaele audite la liquidación exacta. Muchas gracias.`;

    const url = `https://wa.me/${LAWYER_INFO.phoneClean}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleReset = () => {
    setGrossSalary(650000);
    setYears(3);
    setMonths(4);
    setPreavisoNotified(false);
    setCauseType('incausado');
  };

  return (
    <section id="calculadora" className="py-20 lg:py-24 bg-[#F3E9D7]/50 border-y border-[#D6BFA6] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#7A553A] mb-2">
            <span>Herramienta Orientativa</span>
            <span aria-hidden="true">·</span>
            <span>Derecho Laboral</span>
          </div>

          <h2 className="font-classic text-3xl sm:text-4xl md:text-5xl font-bold text-[#433229] tracking-tight">
            Calculadora de Indemnización Laboral
          </h2>

          <div className="w-16 h-0.5 bg-[#B08968] mx-auto my-4" />

          <p className="text-base text-[#5A483E] leading-relaxed font-normal">
            Calculá un estimado preliminar de lo que te correspondería cobrar según la Ley de Contrato de Trabajo.
            Luego podés enviar el resumen a la Dra. Rita Raffaele para una revisión confidencial y sin costo.
          </p>
        </div>

        {/* Calculator Main Box */}
        <div className="max-w-4xl mx-auto bg-[#FFFFFF] rounded-2xl shadow-xl border border-[#D6BFA6] overflow-hidden">
          <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Input Controls */}
            <div className="lg:col-span-7 space-y-5">
              {/* Gross Salary */}
              <div>
                <div className="flex justify-between items-center mb-1.5">
                  <label className="text-xs font-bold text-[#4E3B31] uppercase tracking-wider">
                    Mejor Sueldo Bruto Mensual (Normal y Habitual)
                  </label>
                  <span className="text-xs font-bold text-[#7A553A]">
                    ${grossSalary.toLocaleString('es-AR')}
                  </span>
                </div>
                <div className="relative">
                  <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#7A6456] font-semibold text-sm">
                    $
                  </span>
                  <input
                    type="number"
                    min="100000"
                    step="10000"
                    value={grossSalary}
                    onChange={(e) => setGrossSalary(sanitizeNumber(e.target.value, 0, 500000000, 650000))}
                    className="w-full pl-8 pr-4 py-2.5 rounded-lg border border-[#D6BFA6] focus:outline-hidden focus:ring-2 focus:ring-[#B08968] text-[#433229] text-sm font-semibold bg-[#FAF5EB]"
                  />
                </div>
                <p className="text-[11px] text-[#7A6456] mt-1">
                  Tomá el sueldo bruto más alto de los últimos 12 meses (sin deducciones de aportes).
                </p>
              </div>

              {/* Seniority: Years & Months */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#4E3B31] uppercase tracking-wider mb-1.5">
                    Años Trabajados
                  </label>
                  <input
                    type="number"
                    min="0"
                    max="45"
                    value={years}
                    onChange={(e) => setYears(sanitizeNumber(e.target.value, 0, 45, 0))}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#D6BFA6] focus:outline-hidden focus:ring-2 focus:ring-[#B08968] text-[#433229] text-sm font-semibold bg-[#FAF5EB]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#4E3B31] uppercase tracking-wider mb-1.5">
                    Meses adicionales
                  </label>
                  <input
                    type="number"
                    min="0"
                    max="11"
                    value={months}
                    onChange={(e) => setMonths(sanitizeNumber(e.target.value, 0, 11, 0))}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#D6BFA6] focus:outline-hidden focus:ring-2 focus:ring-[#B08968] text-[#433229] text-sm font-semibold bg-[#FAF5EB]"
                  />
                </div>
              </div>

              {/* Cause Type Selector */}
              <div>
                <label className="block text-xs font-bold text-[#4E3B31] uppercase tracking-wider mb-2">
                  Motivo de Desvinculación
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'incausado', label: 'Despido sin causa / Indirecto' },
                    { id: 'renuncia', label: 'Renuncia voluntaria' },
                    { id: 'acuerdo', label: 'Acuerdo mutuo' },
                  ].map((c) => (
                    <button
                      type="button"
                      key={c.id}
                      onClick={() => setCauseType(c.id as any)}
                      className={`p-2.5 rounded-lg border text-xs font-medium text-center transition-all ${
                        causeType === c.id
                          ? 'border-[#B08968] bg-[#F3E9D7] text-[#433229] font-bold ring-1 ring-[#B08968]'
                          : 'border-[#D6BFA6] text-[#5A483E] hover:border-[#B08968] bg-[#FFFFFF]'
                      }`}
                    >
                      {c.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Preaviso Toggle */}
              {causeType === 'incausado' && (
                <div className="bg-[#FAF5EB] p-3.5 rounded-lg border border-[#D6BFA6] flex items-center justify-between">
                  <div className="text-xs text-[#4E3B31]">
                    <span className="font-semibold block">¿Te notificaron el preaviso por escrito?</span>
                    <span className="text-[#7A6456] text-[11px]">
                      Si no te preavisaron formalmente, te corresponde la indemnización sustitutiva.
                    </span>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer ml-4">
                    <input
                      type="checkbox"
                      checked={preavisoNotified}
                      onChange={(e) => setPreavisoNotified(e.target.checked)}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-[#D6BFA6] peer-focus:outline-hidden rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#B08968]"></div>
                  </label>
                </div>
              )}

              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={handleReset}
                  className="cursor-pointer inline-flex items-center gap-1.5 text-xs text-[#7A6456] hover:text-[#433229]"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Restablecer valores</span>
                </button>
              </div>
            </div>

            {/* Results Output Box: Café con chorrito de crema (#4E3B31) */}
            <div className="lg:col-span-5 bg-[#4E3B31] text-[#F3E9D7] rounded-xl p-6 flex flex-col justify-between shadow-md border border-[#5C473C]">
              <div>
                <div className="flex items-center justify-between border-b border-[#5C473C] pb-3 mb-4">
                  <span className="text-xs uppercase tracking-wider text-[#D6BFA6] font-semibold">
                    Liquidación Estimada
                  </span>
                  <span className="text-[11px] bg-[#3E2F26] text-[#F3E9D7] px-2 py-0.5 rounded font-mono border border-[#5C473C]">
                    Art. 245 LCT
                  </span>
                </div>

                {/* Subtotals Breakdown */}
                <div className="space-y-3 text-xs">
                  <div className="flex justify-between items-center text-[#F3E9D7]">
                    <span>Indemnización Antigüedad ({computedYears} períodos)</span>
                    <span className="font-semibold text-white">
                      ${art245Compensation.toLocaleString('es-AR')}
                    </span>
                  </div>

                  {causeType === 'incausado' && (
                    <div className="flex justify-between items-center text-[#F3E9D7]">
                      <span>
                        Falta de Preaviso ({preavisoNotified ? 'Notificado' : `${preavisoMonths} mes/es`})
                      </span>
                      <span className="font-semibold text-white">
                        ${preavisoCompensation.toLocaleString('es-AR')}
                      </span>
                    </div>
                  )}

                  <div className="flex justify-between items-center text-[#F3E9D7]">
                    <span>SAC Proporcional y Vacaciones (estimado)</span>
                    <span className="font-semibold text-white">
                      ${proportionalItems.toLocaleString('es-AR')}
                    </span>
                  </div>
                </div>

                {/* Prominent Estimated Total */}
                <div className="mt-6 pt-4 border-t border-[#5C473C]">
                  <span className="text-xs text-[#D6BFA6] font-medium block mb-1">
                    Total Estimativo Orientativo:
                  </span>
                  <div className="text-3xl sm:text-4xl font-bold font-classic text-[#FAF5EB]">
                    ${totalEstimated.toLocaleString('es-AR')}
                  </div>
                </div>

                {/* Warning note */}
                <div className="mt-4 p-2.5 rounded-lg bg-[#3E2F26]/70 border border-[#5C473C] text-[11px] text-[#D6BFA6] leading-snug flex items-start gap-2">
                  <Info className="w-4 h-4 text-[#B08968] shrink-0 mt-0.5" />
                  <span>
                    El cálculo no contempla multas por empleo mal registrado, horas extras ni diferencias salariales, que suelen elevar sustancialmente el reclamo final.
                  </span>
                </div>
              </div>

              {/* Direct WhatsApp Action in Marrón Clarito (#B08968) */}
              <div className="mt-6">
                <button
                  type="button"
                  onClick={handleSendCalculationToWhatsApp}
                  className="cursor-pointer w-full py-3 px-4 rounded-xl bg-[#B08968] hover:bg-[#9E7757] active:scale-[0.99] text-[#FAF5EB] font-bold text-xs shadow-md transition-all flex items-center justify-center gap-2 border border-[#C29F80]"
                >
                  <MessageCircle className="w-4 h-4 fill-current text-[#F3E9D7]" />
                  <span>Enviar cálculo a la Dra. Raffaele por WhatsApp</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
