"use client";

import { useState } from "react";
import {
  Code2,
  FileCode2,
  Cpu,
  Layers,
  Server,
  GitBranch,
  Database,
  Flame,
  CheckCircle,
  Sparkles,
} from "lucide-react";

interface SkillItem {
  name: string;
  category: "Frontend" | "Backend & Datos" | "Herramientas";
  percentage: number;
  level: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  iconColor: string;
  borderColor: string;
  accentBg: string;
}

const skillsData: SkillItem[] = [
  {
    name: "HTML",
    category: "Frontend",
    percentage: 95,
    level: "Avanzado / Experto",
    description: "Semántica HTML5 estricta, accesibilidad web (WCAG), SEO técnico estructurado y arquitectura limpia.",
    icon: FileCode2,
    iconColor: "text-orange-400",
    borderColor: "border-orange-500/30",
    accentBg: "from-orange-500/20 to-amber-500/5",
  },
  {
    name: "CSS",
    category: "Frontend",
    percentage: 92,
    level: "Avanzado / Experto",
    description: "Diseño responsive multidispositivo, CSS Grid, Flexbox, micro-animaciones, Tailwind CSS y variables personalizadas.",
    icon: Layers,
    iconColor: "text-blue-400",
    borderColor: "border-blue-500/30",
    accentBg: "from-blue-500/20 to-sky-500/5",
  },
  {
    name: "JavaScript",
    category: "Frontend",
    percentage: 94,
    level: "Avanzado / Experto",
    description: "ES6+, programación asíncrona (Promises, Async/Await), manipulación avanzada del DOM, eventos e interactividad compleja.",
    icon: Cpu,
    iconColor: "text-amber-300",
    borderColor: "border-amber-400/30",
    accentBg: "from-yellow-500/20 to-amber-500/5",
  },
  {
    name: "React",
    category: "Frontend",
    percentage: 90,
    level: "Avanzado",
    description: "Componentes funcionales, React Hooks personalizados, gestión eficiente del estado, ciclo de vida y patrones UI modernos.",
    icon: Code2,
    iconColor: "text-cyan-400",
    borderColor: "border-cyan-500/30",
    accentBg: "from-cyan-500/20 to-teal-500/5",
  },
  {
    name: "Next.js",
    category: "Frontend",
    percentage: 88,
    level: "Avanzado",
    description: "App Router, Server Components, Server-Side Rendering (SSR), Static Site Generation (SSG) y optimizaciones de rendimiento.",
    icon: Sparkles,
    iconColor: "text-slate-200",
    borderColor: "border-slate-400/30",
    accentBg: "from-slate-500/20 to-slate-400/5",
  },
  {
    name: "Node.js",
    category: "Backend & Datos",
    percentage: 85,
    level: "Competente / Avanzado",
    description: "Creación de entornos backend, APIs RESTful modulares, gestión de dependencias con pnpm/npm y manejo de streams.",
    icon: Server,
    iconColor: "text-emerald-400",
    borderColor: "border-emerald-500/30",
    accentBg: "from-emerald-500/20 to-green-500/5",
  },
  {
    name: "Git",
    category: "Herramientas",
    percentage: 90,
    level: "Avanzado",
    description: "Control de versiones distribuido, flujo de trabajo con ramas (GitFlow), resolución de conflictos y despliegues con GitHub Pages.",
    icon: GitBranch,
    iconColor: "text-orange-500",
    borderColor: "border-orange-500/30",
    accentBg: "from-orange-600/20 to-amber-500/5",
  },
  {
    name: "Bases de Datos SQL",
    category: "Backend & Datos",
    percentage: 82,
    level: "Competente / Avanzado",
    description: "Diseño y modelado de esquemas relacionales, consultas complejas (JOINs, agregaciones), normalización e integridad referencial.",
    icon: Database,
    iconColor: "text-amber-400",
    borderColor: "border-amber-500/30",
    accentBg: "from-amber-500/20 to-orange-500/5",
  },
];

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState<string>("Todas");

  const categories = ["Todas", "Frontend", "Backend & Datos", "Herramientas"];

  const filteredSkills =
    activeCategory === "Todas"
      ? skillsData
      : skillsData.filter((skill) => skill.category === activeCategory);

  return (
    <section id="conocimientos" className="py-24 relative overflow-hidden bg-[#060910]">
      {/* Background ambient sunset glows */}
      <div className="absolute top-1/4 right-1/4 w-[450px] h-[450px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-[350px] h-[350px] bg-orange-600/10 rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold tracking-wider uppercase mb-3">
            <Flame className="w-3.5 h-3.5 text-amber-400" />
            <span>Habilidades Técnicas</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Conocimientos <span className="sunset-gradient-text">Técnicos</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400">
            Dominio exhaustivo de las tecnologías fundamentales para construir aplicaciones web modernas, rápidas y escalables.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 ${
                  activeCategory === cat
                    ? "bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 font-bold shadow-[0_0_20px_-3px_rgba(245,158,11,0.5)] scale-105"
                    : "bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Cards Grid with Progress Bars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {filteredSkills.map((skill) => {
            const IconComponent = skill.icon;
            return (
              <div
                key={skill.name}
                className="group relative p-6 sm:p-7 rounded-2xl bg-[#0b0f1b]/90 border border-slate-800/80 hover:border-amber-500/40 transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-[0_10px_30px_-5px_rgba(245,158,11,0.15)] flex flex-col justify-between"
              >
                {/* Header of Card */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-12 h-12 rounded-xl bg-gradient-to-br ${skill.accentBg} border ${skill.borderColor} flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform duration-300`}
                      >
                        <IconComponent className={`w-6 h-6 ${skill.iconColor}`} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-amber-400 transition-colors">
                          {skill.name}
                        </h3>
                        <span className="text-[11px] font-medium text-slate-400 uppercase tracking-wider">
                          {skill.category}
                        </span>
                      </div>
                    </div>

                    {/* Percentage Display */}
                    <div className="text-right">
                      <span className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">
                        {skill.percentage}%
                      </span>
                      <p className="text-[10px] text-amber-500/80 font-mono font-medium">
                        {skill.level}
                      </p>
                    </div>
                  </div>

                  {/* Progress Bar Container */}
                  <div className="w-full h-3 rounded-full bg-slate-900 border border-slate-800 overflow-hidden mb-4 p-0.5">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-amber-500 via-orange-500 to-amber-400 transition-all duration-1000 ease-out shadow-[0_0_12px_rgba(245,158,11,0.6)]"
                      style={{ width: `${skill.percentage}%` }}
                    />
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {skill.description}
                  </p>
                </div>

                {/* Footer validation badge */}
                <div className="pt-4 mt-4 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-400">
                  <span className="flex items-center gap-1.5 text-emerald-400">
                    <CheckCircle className="w-3.5 h-3.5" /> Verificado en proyectos reales
                  </span>
                  <span className="font-mono text-slate-500">v-2026</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Global Summary Ribbon */}
        <div className="mt-14 p-6 rounded-2xl bg-gradient-to-r from-amber-500/10 via-orange-500/5 to-transparent border border-amber-500/20 backdrop-blur-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="p-3 rounded-xl bg-amber-500/20 border border-amber-500/40 text-amber-400">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-white font-bold text-base">Evolución Tecnológica Continua</h4>
              <p className="text-xs text-slate-300">
                Siempre adoptando las últimas especificaciones de ECMAScript, React Compiler y optimizaciones Turbopack.
              </p>
            </div>
          </div>
          <a
            href="#proyectos"
            className="whitespace-nowrap px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 transition-all shadow-[0_0_15px_-3px_rgba(245,158,11,0.5)]"
          >
            Ver aplicaciones prácticas ↓
          </a>
        </div>
      </div>
    </section>
  );
}
