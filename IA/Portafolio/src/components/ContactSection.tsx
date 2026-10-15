"use client";

import { useState } from "react";
import {
  Mail,
  Phone,
  Copy,
  Check,
  Send,
  ArrowUpRight,
  MessageCircle,
} from "lucide-react";
import { GithubIcon, InstagramIcon, WhatsAppIcon } from "@/components/Icons";

interface SocialItem {
  id: string;
  name: string;
  href: string;
  exactTooltip: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  accentBorder: string;
  isCopyable?: boolean;
  copyValue?: string;
}

const contactChannels: SocialItem[] = [
  {
    id: "github",
    name: "GitHub",
    href: "https://github.com/YoinserLeon",
    exactTooltip: "https://github.com/YoinserLeon",
    icon: GithubIcon,
    color: "from-slate-700 to-slate-900 text-slate-100",
    accentBorder: "hover:border-slate-400",
  },
  {
    id: "instagram",
    name: "Instagram",
    href: "https://www.instagram.com/leonyoinser/",
    exactTooltip: "https://www.instagram.com/leonyoinser/",
    icon: InstagramIcon,
    color: "from-pink-600/20 to-orange-500/20 text-pink-400",
    accentBorder: "hover:border-pink-500/50",
  },
  {
    id: "email",
    name: "Correo Electrónico",
    href: "mailto:Yoinser111@gmail.com",
    exactTooltip: "Yoinser111@gmail.com",
    icon: Mail,
    color: "from-amber-500/20 to-orange-500/20 text-amber-400",
    accentBorder: "hover:border-amber-500/50",
    isCopyable: true,
    copyValue: "Yoinser111@gmail.com",
  },
  {
    id: "phone",
    name: "Teléfono / WhatsApp",
    href: "https://wa.me/584122579540?text=Hola%20Yoinser,%20vi%20tu%20portafolio%20web%20y%20me%20gustar%C3%ADa%20conversar%20contigo.",
    exactTooltip: "(+58) 412-2579540",
    icon: WhatsAppIcon,
    color: "from-emerald-500/20 to-teal-500/20 text-emerald-400",
    accentBorder: "hover:border-emerald-500/50",
    isCopyable: true,
    copyValue: "(+58) 412-2579540",
  },
];

export default function ContactSection() {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);

  // Form states for interactive feedback
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    mensaje: "",
  });
  const [formSent, setFormSent] = useState(false);

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => {
      setCopiedId(null);
    }, 2500);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.nombre || !formData.correo || !formData.mensaje) return;

    // Build mailto link with encoded message
    const subject = encodeURIComponent(`Contacto desde Portafolio - ${formData.nombre}`);
    const body = encodeURIComponent(
      `Hola Yoinser,\n\nMi nombre es ${formData.nombre} (${formData.correo}).\n\nMensaje:\n${formData.mensaje}\n\nEnviado desde el Portafolio Web.`
    );
    window.location.href = `mailto:Yoinser111@gmail.com?subject=${subject}&body=${body}`;

    setFormSent(true);
    setTimeout(() => {
      setFormSent(false);
      setFormData({ nombre: "", correo: "", mensaje: "" });
    }, 4000);
  };

  return (
    <section id="contacto" className="py-24 relative overflow-hidden bg-[#060910]">
      {/* Background ambient sunset glows */}
      <div className="absolute top-1/4 right-1/3 w-[550px] h-[550px] bg-gradient-to-br from-amber-600/15 via-orange-500/10 to-transparent rounded-full blur-[160px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold tracking-wider uppercase mb-3">
            <MessageCircle className="w-3.5 h-3.5 text-amber-400" />
            <span>Contacto &amp; Redes Sociales</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            ¿Tienes un proyecto en <span className="sunset-gradient-text">mente?</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400">
            Ponte en contacto conmigo para discutir nuevas oportunidades, proyectos innovadores o colaboraciones de desarrollo web.
          </p>
        </div>

        {/* Main Grid: Interactive Contact Cards + Direct Messaging Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-20">
          {/* Left Column: Interactive Contact Media with Tooltips */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                Medios de Contacto Directo
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mb-6">
                Pasa el mouse sobre cada canal para ver el dato exacto en el tooltip o haz clic para interactuar directamente:
              </p>
            </div>

            <div className="space-y-4">
              {contactChannels.map((channel) => {
                const IconComponent = channel.icon;
                const isCopied = copiedId === channel.id;
                const isHovered = activeTooltip === channel.id;

                return (
                  <div
                    key={channel.id}
                    onMouseEnter={() => setActiveTooltip(channel.id)}
                    onMouseLeave={() => setActiveTooltip(null)}
                    className="relative group"
                  >
                    {/* Tooltip Balloon */}
                    <div
                      role="tooltip"
                      className={`absolute -top-11 left-6 z-30 px-3.5 py-1.5 rounded-lg bg-slate-950 text-amber-300 text-xs font-mono font-bold border border-amber-400 shadow-[0_5px_20px_rgba(0,0,0,0.8)] pointer-events-none transition-all duration-200 transform ${
                        isHovered
                          ? "opacity-100 translate-y-0 scale-100"
                          : "opacity-0 translate-y-2 scale-95"
                      }`}
                    >
                      <div className="flex items-center gap-1.5">
                        <span className="text-slate-400 font-sans text-[10px]">Dato:</span>
                        <span>{channel.exactTooltip}</span>
                      </div>
                      {/* Arrow */}
                      <div className="absolute top-full left-6 -translate-x-1/2 w-0 h-0 border-x-4 border-x-transparent border-t-4 border-t-amber-400" />
                    </div>

                    {/* Interactive Item Container */}
                    <div
                      className={`p-4 rounded-xl bg-[#0b0f1b]/90 border border-slate-800 ${channel.accentBorder} hover:bg-[#111728] transition-all duration-300 shadow-md hover:shadow-[0_8px_25px_-5px_rgba(245,158,11,0.2)] flex items-center justify-between gap-4`}
                    >
                      {/* Icon & Label & Exact Data */}
                      <a
                        href={channel.href}
                        target={channel.href.startsWith("http") ? "_blank" : undefined}
                        rel={channel.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="flex items-center gap-3.5 flex-1 min-w-0"
                      >
                        <div
                          className={`w-11 h-11 rounded-xl bg-gradient-to-br ${channel.color} border border-slate-700/60 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform`}
                        >
                          <IconComponent className="w-5 h-5" />
                        </div>
                        <div className="min-w-0">
                          <p className="text-xs font-bold text-slate-400 group-hover:text-amber-400 transition-colors uppercase tracking-wider">
                            {channel.name}
                          </p>
                          <p className="text-sm font-semibold text-white truncate font-mono">
                            {channel.exactTooltip}
                          </p>
                        </div>
                      </a>

                      {/* Action buttons (Copy / Open) */}
                      <div className="flex items-center gap-1.5 shrink-0">
                        {channel.isCopyable && (
                          <button
                            type="button"
                            onClick={() => handleCopy(channel.copyValue || channel.exactTooltip, channel.id)}
                            title={`Copiar ${channel.exactTooltip}`}
                            aria-label={`Copiar ${channel.name}`}
                            className={`p-2 rounded-lg text-xs font-medium transition-all ${
                              isCopied
                                ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/40"
                                : "bg-slate-900 text-slate-400 hover:text-amber-300 hover:bg-slate-800 border border-slate-800"
                            }`}
                          >
                            {isCopied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                          </button>
                        )}

                        <a
                          href={channel.href}
                          target={channel.href.startsWith("http") ? "_blank" : undefined}
                          rel={channel.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          title={`Abrir ${channel.name}`}
                          aria-label={`Abrir ${channel.name}`}
                          className="p-2 rounded-lg bg-slate-900 text-slate-400 hover:text-amber-400 hover:bg-slate-800 border border-slate-800 transition-all"
                        >
                          <ArrowUpRight className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Quick WhatsApp Direct Chat CTA */}
            <div className="pt-2">
              <a
                href="https://wa.me/584122579540?text=Hola%20Yoinser,%20vi%20tu%20portafolio%20web%20y%20me%20gustar%C3%ADa%20conversar%20contigo."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-bold text-sm text-slate-950 bg-gradient-to-r from-emerald-400 via-emerald-500 to-teal-400 hover:from-emerald-300 hover:to-teal-300 transition-all shadow-[0_0_20px_-3px_rgba(16,185,129,0.4)]"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>Conversar por WhatsApp directo: (+58) 412-2579540</span>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Quick Message Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0b0f1b]/95 border border-slate-800 shadow-xl relative overflow-hidden">
              <div className="mb-6">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
                  Envíame un Mensaje
                </h3>
                <p className="text-xs sm:text-sm text-slate-400">
                  Completa el formulario y se abrirá directamente tu cliente de correo con el mensaje estructurado listo para enviar.
                </p>
              </div>

              {formSent && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs sm:text-sm flex items-center gap-2">
                  <Check className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span>¡Listo! Abriendo tu cliente de correo electrónico para enviar el mensaje a Yoinser111@gmail.com</span>
                </div>
              )}

              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="nombre" className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Tu Nombre Completo *
                    </label>
                    <input
                      type="text"
                      id="nombre"
                      required
                      placeholder="Ej: Carlos Silva"
                      value={formData.nombre}
                      onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="correo" className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Tu Correo Electrónico *
                    </label>
                    <input
                      type="email"
                      id="correo"
                      required
                      placeholder="ejemplo@correo.com"
                      value={formData.correo}
                      onChange={(e) => setFormData({ ...formData, correo: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="mensaje" className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Mensaje o Propuesta *
                  </label>
                  <textarea
                    id="mensaje"
                    rows={4}
                    required
                    placeholder="Escribe aquí tu mensaje, idea de proyecto o propuesta de trabajo..."
                    value={formData.mensaje}
                    onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl font-semibold text-sm text-slate-950 bg-gradient-to-r from-amber-400 via-amber-500 to-orange-500 hover:from-amber-300 hover:to-orange-400 transition-all shadow-[0_0_20px_-3px_rgba(245,158,11,0.5)] cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Enviar Mensaje a Yoinser León</span>
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="pt-10 border-t border-slate-800/80 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <p className="text-sm font-bold text-white flex items-center justify-center md:justify-start gap-1.5">
              <span>Yoinser León</span>
              <span className="text-amber-400">•</span>
              <span className="text-slate-400 font-normal">Programador Web Full-Stack</span>
            </p>
            <p className="text-xs text-slate-500 mt-1">
              © 2026 Yoinser León. Todos los derechos reservados.
            </p>
          </div>

          <div className="flex items-center gap-4 text-xs text-slate-400">
            <a href="#inicio" className="hover:text-amber-400 transition-colors">Inicio</a>
            <span>•</span>
            <a href="#sobre-mi" className="hover:text-amber-400 transition-colors">Sobre mí</a>
            <span>•</span>
            <a href="#conocimientos" className="hover:text-amber-400 transition-colors">Conocimientos</a>
            <span>•</span>
            <a href="#proyectos" className="hover:text-amber-400 transition-colors">Proyectos</a>
            <span>•</span>
            <a href="#contacto" className="hover:text-amber-400 transition-colors">Contacto</a>
          </div>
        </footer>
      </div>
    </section>
  );
}
