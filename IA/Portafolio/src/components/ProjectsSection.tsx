"use client";

import { useState } from "react";
import Image from "next/image";
import { ExternalLink, FolderGit2, Sparkles, Layers, Gamepad2, FileCode } from "lucide-react";
import { GithubIcon } from "@/components/Icons";

interface ProjectItem {
  id: string;
  number: string;
  name: string;
  category: string;
  description: string;
  image: string;
  technologies: string[];
  repoUrl: string;
  pagesUrl?: string;
  highlightText: string;
  isOnlyHtml?: boolean;
}

const projects: ProjectItem[] = [
  {
    id: "cinex",
    number: "01",
    name: "Proyecto Cinex (Clon de plataforma de cine)",
    category: "Plataforma Web de Cine & Streaming",
    description:
      "Clon interactivo de la plataforma cinematográfica Cinex desarrollado con estética pixel art. Presenta cartelera de estrenos ('Un Gran Aventura'), dulcería con palomitas, horarios de funciones, sinopsis, trailers y selección de butacas.",
    image: "/images/projects/cinex-pixel.jpg",
    technologies: ["JavaScript", "HTML5", "CSS3", "DOM Dinámico", "Pixel Art UI"],
    repoUrl: "https://github.com/YoinserLeon/PagCinex",
    pagesUrl: "https://yoinserleon.github.io/PagCinex/CINEX/",
    highlightText: "Cartelera interactiva y diseño streaming en Pixel Art",
  },
  {
    id: "starlink",
    number: "02",
    name: "Proyecto Starlink (Réplica de la interfaz de internet satelital)",
    category: "Landing Page Aeroespacial & Telecomunicaciones",
    description:
      "Réplica visual de alta fidelidad inspirada en la red satelital Starlink con ambientación pixel art espacial. Incluye satélite en órbita sobre la Tierra, constelación estelar profunda, selectores de planes y maquetación avanzada con CSS Grid y Flexbox.",
    image: "/images/projects/starlink-pixel.png",
    technologies: ["HTML5", "CSS Grid", "Flexbox", "Pixel Art Aeroespacial", "Animaciones CSS"],
    repoUrl: "https://github.com/YoinserLeon/PaginaStarlink",
    pagesUrl: "https://yoinserleon.github.io/PaginaStarlink/",
    highlightText: "Constelación orbital en pixel art y arquitectura CSS Grid",
  },
  {
    id: "cv-profesional",
    number: "03",
    name: "CV Profesional de Yoinser León / Alejandro León Rivas (Contaduría y Finanzas)",
    category: "Currículum Vitae Web (100% HTML5 Puro)",
    description:
      "Desarrollado ÚNICAMENTE con HTML (HTML5 puro), sin frameworks ni dependencias externas. Estructura el perfil profesional de Alejandro León Rivas como Licenciado en Contaduría Pública con posgrados en Economía y Auditoría, historial laboral en consultoría financiera y competencias técnicas.",
    image: "/images/projects/cv-pixel.jpg",
    technologies: ["HTML5 Puro (100% HTML)", "Semántica Web Nativa", "Estructura Web", "Accesibilidad"],
    repoUrl: "https://github.com/YoinserLeon/HTML-CV-YOINSER-LE-N",
    pagesUrl: "https://yoinserleon.github.io/HTML-CV-YOINSER-LE-N/HTML/",
    highlightText: "Desarrollado ÚNICAMENTE con HTML (HTML5 puro sin frameworks)",
    isOnlyHtml: true,
  },
  {
    id: "rick-and-morty",
    number: "04",
    name: "Catálogo de Rick and Morty (Aplicación web con personajes y diseño temático)",
    category: "Consumo de REST API & Asincronismo",
    description:
      "Aplicación web interactiva que consume la API oficial de Rick and Morty adaptada a una estética pixel art inmersiva. Cuenta con portal interdimensional animado, explorador de personajes con tarjetas detalladas (especie, estado de vida y origen) y buscador dinámico.",
    image: "/images/projects/rick-morty-pixel.jpg",
    technologies: ["JavaScript Asíncrono", "REST API Fetch", "JSON", "Pixel Art UI", "Manejo de Estados"],
    repoUrl: "https://github.com/YoinserLeon/Pag-rickandmorty",
    pagesUrl: "https://yoinserleon.github.io/Pag-rickandmorty/",
    highlightText: "Consumo de API en tiempo real y portal interdimensional en Pixel Art",
  },
  {
    id: "youtube-replica",
    number: "05",
    name: "Réplica de YouTube (Plataforma de video interactiva en Pixel Art)",
    category: "Plataforma Web de Video & Streaming",
    description:
      "Réplica interactiva de la interfaz oficial de YouTube reimaginada con diseño pixel art retro-moderno. Integra cabecera de búsqueda con micrófono, barra lateral con navegación completa (Inicio, Shorts, Suscripciones, Historial) y panel de videos recomendados con miniaturas dinámicas.",
    image: "/images/projects/youtube-pixel.jpg",
    technologies: ["HTML5", "CSS3", "JavaScript", "Pixel Art UI", "Diseño Streaming"],
    repoUrl: "https://github.com/YoinserLeon/PagYouTube",
    pagesUrl: "https://yoinserleon.github.io/PagYouTube/YouTube/",
    highlightText: "Interfaz completa de streaming y navegación multimedia en Pixel Art",
  },
  {
    id: "juego-js",
    number: "06",
    name: "Juego JS: Clash of Legends en Pixel Art (Laboratorio Interactivo)",
    category: "Videojuegos RPG & Programación Orientada a Objetos",
    description:
      "Videojuego arcade RPG de combate interactivo por turnos desarrollado en JavaScript vanilla con Programación Orientada a Objetos (POO). Cuenta con clases de combate (Guerrero, Mago, Arquero, Clérigo y Pícaro), cálculo de daño crítico, inventario de armas y barras de salud en tiempo real.",
    image: "/images/projects/clash-of-legends-pixel.png",
    technologies: ["JavaScript Vanilla (POO)", "Herencia de Clases", "Sistema de Combate", "Pixel Art 2D"],
    repoUrl: "https://github.com/YoinserLeon/JuegoJS",
    pagesUrl: "https://yoinserleon.github.io/JuegoJS/",
    highlightText: "Batallas RPG, combate por turnos y lógica de clases en POO",
  },
];

export default function ProjectsSection() {
  const [selectedFilter, setSelectedFilter] = useState<string>("Todos");

  const categories = ["Todos", "Pixel Art & Web", "APIs & Streaming", "Videojuegos & POO"];

  const filteredProjects = projects.filter((p) => {
    if (selectedFilter === "Todos") return true;
    if (selectedFilter === "Pixel Art & Web") return p.id === "cinex" || p.id === "starlink" || p.id === "cv-profesional";
    if (selectedFilter === "APIs & Streaming") return p.id === "rick-and-morty" || p.id === "youtube-replica";
    if (selectedFilter === "Videojuegos & POO") return p.id === "juego-js";
    return true;
  });

  return (
    <section id="proyectos" className="py-24 relative overflow-hidden bg-[#070a12]">
      {/* Background ambient sunset glows */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[150px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-orange-600/10 rounded-full blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold tracking-wider uppercase mb-3">
            <FolderGit2 className="w-3.5 h-3.5 text-amber-400" />
            <span>Proyectos Destacados</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Proyectos <span className="sunset-gradient-text">Desarrollados</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400">
            Colección de aplicaciones web y plataformas interactivas desarrolladas con código fuente en GitHub, despliegues en vivo y estética Pixel Art de alta fidelidad.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedFilter(cat)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  selectedFilter === cat
                    ? "bg-gradient-to-r from-amber-400 to-orange-500 text-slate-950 shadow-[0_0_20px_-3px_rgba(245,158,11,0.5)] scale-105"
                    : "bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid (2 columns on large screens for prominent presentation) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative rounded-2xl bg-[#0b0f1b]/95 border border-slate-800 hover:border-amber-500/40 transition-all duration-300 hover:-translate-y-2 shadow-xl hover:shadow-[0_15px_35px_-5px_rgba(245,158,11,0.2)] flex flex-col justify-between overflow-hidden"
            >
              <div>
                {/* Image Container with Pixel Art Preview */}
                <div className="relative w-full h-64 sm:h-72 md:h-80 bg-slate-950 overflow-hidden border-b border-slate-800/80">
                  <Image
                    src={project.image}
                    alt={`Previsualización del ${project.name}`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  />

                  {/* Gradient shadow overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f1b] via-[#0b0f1b]/20 to-transparent opacity-80" />

                  {/* Number Badge & Category */}
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded-md bg-slate-950/85 backdrop-blur-md border border-amber-500/40 text-amber-400 font-mono font-bold text-xs shadow-md">
                      {project.number}
                    </span>
                    <span className="px-2.5 py-1 rounded-md bg-slate-950/85 backdrop-blur-md text-slate-300 text-[11px] font-medium border border-slate-700/60">
                      {project.category}
                    </span>
                  </div>

                  {/* Special Badges (100% HTML Puro or Clash of Legends RPG) */}
                  <div className="absolute top-3 right-3 flex items-center gap-2">
                    {project.isOnlyHtml && (
                      <span className="px-2.5 py-1 rounded-md bg-amber-500/20 backdrop-blur-md text-amber-300 text-[10px] font-bold border border-amber-400/50 flex items-center gap-1 shadow-md animate-pulse">
                        <FileCode className="w-3 h-3 text-amber-400" /> ÚNICAMENTE HTML
                      </span>
                    )}
                    {project.id === "juego-js" && (
                      <span className="px-2.5 py-1 rounded-md bg-orange-500/20 backdrop-blur-md text-orange-300 text-[10px] font-bold border border-orange-400/50 flex items-center gap-1 shadow-md">
                        <Gamepad2 className="w-3 h-3 text-orange-400" /> Clash of Legends
                      </span>
                    )}
                  </div>

                  {/* Highlight pill */}
                  <div className="absolute bottom-3 left-3 right-3">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-950/90 backdrop-blur-md text-xs font-medium text-amber-300 border border-amber-500/30">
                      <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span className="truncate">{project.highlightText}</span>
                    </span>
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-6 sm:p-7">
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-amber-400 transition-colors mb-3 leading-snug">
                    {project.name}
                  </h3>
                  
                  {project.isOnlyHtml && (
                    <div className="mb-4 px-3.5 py-2 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-medium flex items-center gap-2">
                      <FileCode className="w-4 h-4 text-amber-400 shrink-0" />
                      <span><strong>Nota de Arquitectura:</strong> Desarrollado <strong>ÚNICAMENTE con HTML (HTML5 puro)</strong> sin hojas de estilo CSS externas ni scripts JS.</span>
                    </div>
                  )}

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Technologies Used */}
                  <div className="mb-6">
                    <div className="flex items-center gap-1.5 text-xs text-slate-400 font-semibold mb-2.5">
                      <Layers className="w-3.5 h-3.5 text-amber-400" />
                      <span>Tecnologías aplicadas:</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-lg text-xs font-medium bg-slate-900 border border-amber-500/20 text-slate-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons Footer */}
              <div className="p-6 sm:p-7 pt-0 border-t border-slate-800/80 bg-slate-950/30">
                <div className="grid grid-cols-2 gap-3 pt-4">
                  {/* GitHub Repo Button */}
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs sm:text-sm font-semibold text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-amber-500/50 transition-colors shadow-sm"
                  >
                    <GithubIcon className="w-4 h-4 text-slate-300" />
                    <span>Repositorio</span>
                  </a>

                  {/* Live GitHub Pages Demo Button */}
                  {project.pagesUrl ? (
                    <a
                      href={project.pagesUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs sm:text-sm font-semibold text-slate-950 bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-300 hover:to-orange-400 transition-all shadow-[0_0_15px_-3px_rgba(245,158,11,0.4)]"
                    >
                      <span>Demo en Vivo</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  ) : (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs sm:text-sm font-semibold text-amber-400 bg-amber-500/10 border border-amber-500/30"
                    >
                      <span>Ver Código</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub Profile Banner Link */}
        <div className="mt-16 text-center">
          <p className="text-slate-400 text-sm mb-3">
            ¿Deseas explorar más código fuente, ramas y proyectos en desarrollo?
          </p>
          <a
            href="https://github.com/YoinserLeon"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-amber-300 bg-slate-900/80 border border-amber-500/30 hover:border-amber-400 hover:bg-slate-800/90 transition-all shadow-md hover:shadow-[0_0_25px_-5px_rgba(245,158,11,0.3)]"
          >
            <GithubIcon className="w-4 h-4 text-amber-400" />
            <span>Visitar mi perfil completo en GitHub: @YoinserLeon</span>
            <ExternalLink className="w-3.5 h-3.5 text-amber-400" />
          </a>
        </div>
      </div>
    </section>
  );
}
