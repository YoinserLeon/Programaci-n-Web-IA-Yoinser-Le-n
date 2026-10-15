"use client";

import Link from "next/link";
import { ArrowUpRight, FileText, Sparkles, ChevronDown } from "lucide-react";

const techBadges = [
  { name: "HTML5", color: "from-orange-500/20 to-amber-500/10", border: "border-orange-500/30", text: "text-orange-400" },
  { name: "CSS3", color: "from-blue-500/20 to-cyan-500/10", border: "border-blue-500/30", text: "text-blue-400" },
  { name: "JavaScript", color: "from-yellow-500/20 to-amber-500/10", border: "border-yellow-500/30", text: "text-yellow-400" },
  { name: "TypeScript", color: "from-sky-500/20 to-blue-500/10", border: "border-sky-500/30", text: "text-sky-400" },
  { name: "React", color: "from-cyan-500/20 to-teal-500/10", border: "border-cyan-500/30", text: "text-cyan-400" },
  { name: "Next.js", color: "from-slate-500/20 to-slate-400/10", border: "border-slate-500/30", text: "text-slate-200" },
  { name: "Tailwind CSS", color: "from-teal-500/20 to-cyan-500/10", border: "border-teal-500/30", text: "text-teal-400" },
  { name: "Node.js", color: "from-emerald-500/20 to-green-500/10", border: "border-emerald-500/30", text: "text-emerald-400" },
  { name: "Bases SQL", color: "from-amber-500/20 to-orange-500/10", border: "border-amber-500/30", text: "text-amber-400" },
  { name: "Git", color: "from-orange-600/20 to-red-500/10", border: "border-orange-600/30", text: "text-orange-500" },
];

export default function HeaderHero() {
  return (
    <section
      id="inicio"
      className="relative min-h-[92vh] flex flex-col justify-center items-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Warm Sunset Ambient Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[800px] h-[450px] bg-gradient-to-tr from-amber-600/20 via-orange-500/15 to-transparent rounded-full blur-[120px] pointer-events-none -z-10 animate-warm-pulse" />
      <div className="absolute top-1/3 left-1/4 w-[350px] h-[350px] bg-amber-500/10 rounded-full blur-[100px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-1/4 w-[400px] h-[300px] bg-orange-600/10 rounded-full blur-[110px] pointer-events-none -z-10" />

      {/* Subtle Background Geometric Grid */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none -z-10"
        style={{
          backgroundImage:
            "linear-gradient(to right, #f59e0b 1px, transparent 1px), linear-gradient(to bottom, #f59e0b 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-5xl mx-auto text-center flex flex-col items-center">
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs sm:text-sm font-medium tracking-wide mb-8 shadow-[0_0_20px_-3px_rgba(245,158,11,0.25)] hover:border-amber-400 transition-all">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-500"></span>
          </span>
          <span className="font-semibold text-slate-200">Programador Web Full-Stack</span>
          <span className="text-amber-500/60">•</span>
          <span className="text-amber-400 flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5" /> Disponible para proyectos
          </span>
        </div>

        {/* Name Title & Professional Role */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-6 leading-tight">
          Hola, soy{" "}
          <span className="sunset-gradient-text drop-shadow-[0_5px_25px_rgba(245,158,11,0.35)]">
            Yoinser León
          </span>
        </h1>

        <div className="inline-block mb-6">
          <p className="text-xl sm:text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-orange-400 tracking-wide">
            Programador Web Full-Stack
          </p>
        </div>

        {/* Bio Pitch */}
        <p className="max-w-3xl text-base sm:text-lg md:text-xl text-slate-300/90 leading-relaxed font-normal mb-10">
          Diseño y desarrollo soluciones web escalables, intuitivas y de alto rendimiento.
          Fusiono la precisión técnica en frontend y backend con una estética moderna, limpia y
          optimizada para resultados comerciales e ingeniería de primer nivel.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          <Link
            href="#proyectos"
            className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm sm:text-base font-semibold text-slate-950 bg-gradient-to-r from-amber-400 via-amber-500 to-orange-500 hover:from-amber-300 hover:to-orange-400 shadow-[0_0_30px_-5px_rgba(245,158,11,0.55)] hover:shadow-[0_0_40px_-2px_rgba(245,158,11,0.8)] transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <span>Ver Mis Proyectos</span>
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>

          <Link
            href="#contacto"
            className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm sm:text-base font-semibold text-slate-200 bg-slate-900/80 hover:bg-slate-800/90 border border-amber-500/30 hover:border-amber-400/80 shadow-lg hover:shadow-[0_0_25px_-5px_rgba(245,158,11,0.3)] transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <FileText className="w-4 h-4 text-amber-400 transition-transform duration-300 group-hover:rotate-6" />
            <span>Contáctame / Datos</span>
          </Link>
        </div>

        {/* Technologies I Work With Bar (Reference Design Element) */}
        <div className="w-full max-w-4xl pt-6 border-t border-slate-800/80">
          <p className="text-xs uppercase tracking-widest text-slate-400 font-semibold mb-4 text-center">
            Tecnologías y herramientas que domino
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
            {techBadges.map((tech) => (
              <span
                key={tech.name}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-900/70 border ${tech.border} ${tech.text} shadow-sm backdrop-blur-sm hover:scale-105 transition-transform cursor-default`}
              >
                {tech.name}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Down Chevron indicator */}
      <Link
        href="#sobre-mi"
        aria-label="Ir a sección Sobre Mí"
        className="mt-10 p-2 text-slate-400 hover:text-amber-400 transition-colors animate-bounce"
      >
        <ChevronDown className="w-6 h-6" />
      </Link>
    </section>
  );
}
