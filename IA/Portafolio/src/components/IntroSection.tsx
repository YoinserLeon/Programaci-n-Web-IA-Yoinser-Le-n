"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Code,
  Calendar,
  Layers,
  Award,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Terminal,
} from "lucide-react";

const stats = [
  {
    icon: Calendar,
    value: "2+",
    label: "Años de Experiencia",
    description: "Desarrollo web continuo y formación intensiva",
    color: "from-amber-500/20 to-orange-500/10",
    border: "border-amber-500/30",
    iconColor: "text-amber-400",
  },
  {
    icon: Layers,
    value: "6+",
    label: "Proyectos Completados",
    description: "Aplicaciones web y plataformas funcionales",
    color: "from-orange-500/20 to-amber-500/10",
    border: "border-orange-500/30",
    iconColor: "text-orange-400",
  },
  {
    icon: Code,
    value: "8+",
    label: "Tecnologías Dominadas",
    description: "Stack integral Frontend, Backend y Bases de Datos",
    color: "from-yellow-500/20 to-amber-500/10",
    border: "border-yellow-500/30",
    iconColor: "text-yellow-400",
  },
  {
    icon: Award,
    value: "100%",
    label: "Compromiso & Calidad",
    description: "Enfoque en código limpio, UI/UX y buenas prácticas",
    color: "from-amber-500/20 to-yellow-500/10",
    border: "border-amber-500/30",
    iconColor: "text-amber-400",
  },
];

export default function IntroSection() {
  return (
    <section id="sobre-mi" className="py-24 relative overflow-hidden bg-[#070a12]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-amber-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Badge & Title */}
        <div className="text-center md:text-left mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Presentación Personal</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Sobre <span className="sunset-gradient-text">Mí</span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-400 max-w-2xl">
            Conoce mi trayectoria, mi filosofía de ingeniería y cómo desarrollo aplicaciones completas para la web moderna.
          </p>
        </div>

        {/* Top Split: Sunset Profile Photo + Animated Code Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-20">
          {/* Profile Photo with Warm Sunset Lighting & Halo */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group">
              {/* Sunset circular ambient backlight glow matching the photo's warm light */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-amber-600 via-orange-500 to-amber-300 rounded-3xl blur-2xl opacity-40 group-hover:opacity-60 transition duration-700 animate-warm-pulse -z-10" />
              
              {/* Outer decorative ring */}
              <div className="relative p-2 rounded-3xl bg-gradient-to-b from-amber-500/40 via-orange-500/20 to-slate-900/80 border border-amber-500/40 shadow-[0_10px_40px_rgba(0,0,0,0.8)] backdrop-blur-sm">
                <div className="relative w-[280px] sm:w-[340px] md:w-[380px] h-[370px] sm:h-[440px] md:h-[480px] rounded-2xl overflow-hidden bg-slate-950">
                  <Image
                    src="/images/yoinser-profile.jpg"
                    alt="Yoinser León - Programador Web Full-Stack con iluminación cálida al atardecer"
                    fill
                    priority
                    sizes="(max-width: 768px) 280px, (max-width: 1200px) 380px, 400px"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Subtle warm sunset overlay filter on bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070a12] via-transparent to-transparent opacity-60" />

                  {/* Floating status tag inside photo */}
                  <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-slate-950/80 backdrop-blur-md border border-amber-500/30 flex items-center justify-between">
                    <div>
                      <p className="text-white text-xs font-bold">Yoinser León</p>
                      <p className="text-amber-400 text-[11px]">Full-Stack Developer</p>
                    </div>
                    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[10px] font-semibold">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                      Activo
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Aesthetic Animated Code Block */}
          <div className="lg:col-span-7">
            <div className="relative rounded-2xl bg-[#0c101c] border border-amber-500/30 shadow-[0_10px_35px_rgba(0,0,0,0.7)] overflow-hidden">
              {/* Code Editor Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#111625] border-b border-amber-500/20">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
                  </div>
                  <span className="ml-3 text-xs font-mono text-slate-400 flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-amber-400" />
                    desarrollador.ts
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20">
                    TypeScript
                  </span>
                </div>
              </div>

              {/* Code Editor Body */}
              <div className="p-5 sm:p-6 font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto text-slate-300">
                <div className="space-y-1">
                  <p>
                    <span className="text-amber-400 font-semibold">const</span>{" "}
                    <span className="text-yellow-200">desarrollador</span>:{" "}
                    <span className="text-emerald-400">FullStackDeveloper</span> = &#123;
                  </p>
                  <p className="pl-4 sm:pl-6">
                    <span className="text-slate-400">nombre</span>:{" "}
                    <span className="text-amber-300">&quot;Yoinser León&quot;</span>,
                  </p>
                  <p className="pl-4 sm:pl-6">
                    <span className="text-slate-400">rol</span>:{" "}
                    <span className="text-amber-300">&quot;Programador Web Full-Stack&quot;</span>,
                  </p>
                  <p className="pl-4 sm:pl-6">
                    <span className="text-slate-400">ubicacion</span>:{" "}
                    <span className="text-amber-300">&quot;Venezuela&quot;</span>,
                  </p>
                  <p className="pl-4 sm:pl-6">
                    <span className="text-slate-400">especialidad</span>: [
                  </p>
                  <p className="pl-8 sm:pl-10 text-emerald-300">
                    &quot;Arquitectura Frontend Moderna&quot;,
                  </p>
                  <p className="pl-8 sm:pl-10 text-emerald-300">
                    &quot;Desarrollo Backend con APIs REST&quot;,
                  </p>
                  <p className="pl-8 sm:pl-10 text-emerald-300">
                    &quot;Modelado de Bases de Datos SQL&quot;
                  </p>
                  <p className="pl-4 sm:pl-6">],</p>
                  <p className="pl-4 sm:pl-6">
                    <span className="text-slate-400">skills</span>: [
                  </p>
                  <p className="pl-8 sm:pl-10 text-orange-300">
                    &quot;React&quot;, &quot;Next.js&quot;, &quot;JavaScript&quot;, &quot;Tailwind CSS&quot;, &quot;Node.js&quot;, &quot;SQL&quot;, &quot;Git&quot;
                  </p>
                  <p className="pl-4 sm:pl-6">],</p>
                  <p className="pl-4 sm:pl-6">
                    <span className="text-slate-400">pasion</span>:{" "}
                    <span className="text-amber-300">
                      &quot;Construir plataformas web dinámicas, rápidas y visualmente cautivadoras&quot;
                    </span>,
                  </p>
                  <p className="pl-4 sm:pl-6">
                    <span className="text-slate-400">disponibleParaContratacion</span>:{" "}
                    <span className="text-emerald-400 font-semibold">true</span>,
                  </p>
                  <p className="pl-4 sm:pl-6">
                    <span className="text-slate-400">entregarResultado</span>: () =&gt; &#123;
                  </p>
                  <p className="pl-8 sm:pl-10 text-slate-400">
                    <span className="text-amber-400 font-semibold">return</span>{" "}
                    <span className="text-amber-300">&quot;Excelencia técnica, código limpio y valor real para usuarios&quot;</span>;
                  </p>
                  <p className="pl-4 sm:pl-6">&#125;</p>
                  <p>&#125;;</p>
                  
                  {/* Animated blinking cursor */}
                  <div className="pt-2 flex items-center gap-1 text-slate-500">
                    <span className="text-amber-500">&gt;</span>
                    <span className="text-slate-400">desarrollador.entregarResultado()</span>
                    <span className="w-2 h-4 bg-amber-400 animate-pulse inline-block"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Split: Detailed Biography & 4 Stats Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Biography: Who I am, what motivates me, and what I build */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Creando soluciones digitales completas de extremo a extremo
            </h3>

            <div className="space-y-4 text-slate-300 leading-relaxed text-sm sm:text-base">
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-amber-500/30 transition-colors">
                <h4 className="text-amber-400 font-semibold text-sm mb-1 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400" /> ¿Quién soy?
                </h4>
                <p className="text-slate-300/90 text-sm">
                  Soy <strong>Yoinser León</strong>, desarrollador web full-stack apasionado por transformar desafíos y requisitos complejos en arquitecturas de software sólidas, intuitivas y eficientes. Me especializo en combinar el ecosistema moderno de JavaScript (React, Next.js, Node.js) con bases sólidas de maquetación semántica y bases de datos relacionales.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-amber-500/30 transition-colors">
                <h4 className="text-amber-400 font-semibold text-sm mb-1 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400" /> ¿Qué me motiva?
                </h4>
                <p className="text-slate-300/90 text-sm">
                  Me motiva la constante evolución tecnológica y la oportunidad de construir herramientas que generen un impacto positivo real. Busco la perfección tanto en la arquitectura interna —código limpio, modular y mantenible— como en la experiencia final del usuario: animaciones fluidas, rendimiento óptimo y diseño visualmente armónico.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-amber-500/30 transition-colors">
                <h4 className="text-amber-400 font-semibold text-sm mb-1 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400" /> ¿Qué tipo de proyectos construyo?
                </h4>
                <p className="text-slate-300/90 text-sm">
                  Desarrollo aplicaciones web de pila completa (Full-Stack): landing pages corporativas de alto impacto, plataformas interactivas, interfaces basadas en consumo de APIs externas en tiempo real, aplicaciones con lógica de juegos interactivos y paneles administrativos conectados a bases de datos relacionales SQL.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="#conocimientos"
                className="inline-flex items-center gap-2 text-sm font-semibold text-amber-400 hover:text-amber-300 group"
              >
                <span>Explora mis conocimientos técnicos y destrezas</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* 4 Key Stat Cards (2x2 Grid) */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="p-6 rounded-2xl bg-[#0c101c]/80 border border-slate-800 hover:border-amber-500/40 transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-[0_10px_25px_-5px_rgba(245,158,11,0.2)] flex flex-col justify-between"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${stat.color} border ${stat.border}`}>
                      <Icon className={`w-6 h-6 ${stat.iconColor}`} />
                    </div>
                    <span className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                      {stat.value}
                    </span>
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-slate-100 mb-1">
                      {stat.label}
                    </h4>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {stat.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
