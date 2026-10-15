import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Yoinser León | Programador Web Full-Stack",
  description:
    "Portafolio profesional de Yoinser León, Programador Web Full-Stack Senior especializado en React, Next.js, JavaScript, Tailwind CSS, Node.js y Bases de Datos SQL.",
  keywords: [
    "Yoinser León",
    "Programador Web Full-Stack",
    "React",
    "Next.js",
    "Tailwind CSS",
    "Node.js",
    "JavaScript",
    "Desarrollador Web",
    "Portafolio Profesional",
  ],
  authors: [{ name: "Yoinser León" }],
  creator: "Yoinser León",
  openGraph: {
    title: "Yoinser León | Programador Web Full-Stack",
    description:
      "Portafolio profesional de Yoinser León con proyectos destacados, habilidades técnicas y medios de contacto directo.",
    type: "website",
    locale: "es_ES",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}>
      <body className="min-h-screen bg-[#070a12] text-slate-100 antialiased selection:bg-amber-500 selection:text-slate-950">
        {children}
      </body>
    </html>
  );
}
