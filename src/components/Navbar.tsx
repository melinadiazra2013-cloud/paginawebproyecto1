import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Menu, X, Shield, Clock } from 'lucide-react';
import { LAWYER_INFO } from '../data/legalData';

interface NavbarProps {
  onOpenBooking: (serviceId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Servicios', href: '#servicios' },
    { label: 'La Abogada', href: '#la-abogada' },
    { label: 'Calculadora', href: '#calculadora' },
    { label: 'Ubicación y Horarios', href: '#ubicacion-horarios' },
    { label: 'Preguntas', href: '#preguntas' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const directWhatsAppUrl = `https://wa.me/${LAWYER_INFO.phoneClean}?text=${encodeURIComponent(
    'Hola Dra. Rita Raffaele, me contacto desde su sitio web para solicitar un turno de asesoramiento legal laboral.'
  )}`;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Bar: Café con chorrito de crema (#4E3B31) con acentos en Creamy Latte */}
      <div className="bg-[#4E3B31] text-[#F3E9D7] text-xs py-1.5 px-4 border-b border-[#5C473C]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-4 text-[11px] sm:text-xs tracking-wide">
            <span className="flex items-center gap-1.5 text-[#F3E9D7]">
              <Shield className="w-3.5 h-3.5 text-[#D6BFA6]" />
              <span className="font-medium">Estudio Jurídico Especializado en Derecho del Trabajo</span>
            </span>
            <span className="hidden md:inline text-[#8D7364]">·</span>
            <span className="hidden md:flex items-center gap-1.5 text-[#D6BFA6]">
              <Clock className="w-3 h-3 text-[#B08968]" />
              <span>{LAWYER_INFO.hours}</span>
            </span>
          </div>

          <div className="flex items-center gap-4 text-[11px] sm:text-xs">
            <span className="text-[#D6BFA6] font-medium hidden sm:inline">
              Primera consulta de evaluación sin cargo
            </span>
            <a
              href={`tel:${LAWYER_INFO.phoneClean}`}
              className="flex items-center gap-1.5 text-[#F3E9D7] hover:text-[#D6BFA6] transition-colors"
            >
              <Phone className="w-3 h-3 text-[#B08968]" />
              <span>{LAWYER_INFO.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar: Creamy Latte (#FAF5EB) con bordes Warm Cappuccino (#D6BFA6) */}
      <nav
        className={`transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FAF5EB]/95 backdrop-blur-md shadow-xs border-b border-[#D6BFA6]'
            : 'bg-[#FAF5EB] border-b border-[#E0D0BE]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Brand Logo & Name */}
            <a
              href="#inicio"
              onClick={(e) => handleNavClick(e, '#inicio')}
              className="flex items-center gap-3.5 group text-left"
            >
              <div className="w-11 h-11 rounded-lg bg-[#4E3B31] text-[#F3E9D7] flex items-center justify-center shadow-xs border border-[#7A553A]/40 group-hover:bg-[#433229] transition-colors">
                {/* Classical Scales Emblem */}
                <svg
                  className="w-6 h-6 text-[#D6BFA6]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
                  <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
                  <path d="M7 21h10" />
                  <path d="M12 3v18" />
                  <path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2" />
                </svg>
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <span className="font-classic text-xl sm:text-2xl font-bold tracking-tight text-[#433229] group-hover:text-[#7A553A] transition-colors">
                    ESTUDIO RAFFAELE
                  </span>
                  <span className="text-[10px] tracking-widest uppercase font-semibold text-[#7A553A] bg-[#F3E9D7] px-2 py-0.5 rounded border border-[#D6BFA6] hidden sm:inline">
                    Laboral
                  </span>
                </div>
                <p className="text-xs text-[#7A6456] font-medium tracking-wide">
                  Dra. Rita Raffaele · Abogada Laboralista
                </p>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-7">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-xs font-semibold uppercase tracking-wider text-[#5A483E] hover:text-[#433229] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#B08968] hover:after:w-full after:transition-all"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Action CTA Buttons: Impecablemente alineados y proporcionados */}
            <div className="hidden sm:flex items-center gap-2.5">
              <button
                type="button"
                onClick={() => onOpenBooking()}
                className="cursor-pointer inline-flex items-center gap-2 h-10 px-4 rounded-xl bg-[#B08968] hover:bg-[#9E7757] text-[#FAF5EB] text-xs uppercase tracking-wider font-bold shadow-xs hover:shadow-md transition-all active:scale-[0.98] border border-[#C29F80]"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-current text-[#FAF5EB]" />
                <span>Agendar Turno</span>
              </button>

              <a
                href={directWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Abrir WhatsApp directo"
                className="cursor-pointer inline-flex items-center justify-center w-10 h-10 rounded-xl bg-[#FAF5EB] hover:bg-[#F3E9D7] text-[#7A553A] hover:text-[#433229] shadow-2xs hover:shadow-xs transition-colors border border-[#D6BFA6] hover:border-[#B08968]"
                title="Escribir por WhatsApp"
              >
                <MessageCircle className="w-4 h-4 text-[#B08968] fill-current" />
              </a>
            </div>

            {/* Mobile menu trigger */}
            <div className="flex sm:hidden items-center gap-2">
              <button
                type="button"
                onClick={() => onOpenBooking()}
                className="cursor-pointer inline-flex items-center gap-1.5 h-9 px-3 rounded-lg bg-[#B08968] text-white text-xs font-bold shadow-xs border border-[#C29F80]"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-current text-[#FAF5EB]" />
                <span>Turnos</span>
              </button>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="h-9 w-9 flex items-center justify-center rounded-lg text-[#433229] hover:bg-[#F3E9D7] border border-[#D6BFA6] focus:outline-hidden"
                aria-label="Alternar menú de navegación"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-[#D6BFA6] bg-[#FAF5EB] px-4 pt-3 pb-6 shadow-xl">
            <div className="flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="px-3 py-2 rounded-md text-sm font-semibold text-[#433229] hover:bg-[#F3E9D7] transition-colors"
                >
                  {link.label}
                </a>
              ))}

              <div className="pt-3 border-t border-[#D6BFA6] flex flex-col gap-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBooking();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-[#4E3B31] text-[#F3E9D7] text-xs uppercase tracking-wider font-semibold shadow-xs"
                >
                  <MessageCircle className="w-4 h-4 text-[#D6BFA6]" />
                  <span>Agendar Turno con la Dra. Raffaele</span>
                </button>

                <a
                  href={directWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-[#B08968] text-white text-xs font-semibold"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Directo ({LAWYER_INFO.phoneDisplay})</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
