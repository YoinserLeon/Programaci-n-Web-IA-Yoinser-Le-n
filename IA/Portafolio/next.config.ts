import type { NextConfig } from "next";

// Soporte para despliegue en GitHub Pages:
// Si se despliega en un repositorio como project site (ej. https://<usuario>.github.io/<repo>),
// se puede especificar la ruta base mediante la variable de entorno NEXT_PUBLIC_BASE_PATH o BASE_PATH.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || process.env.BASE_PATH || "";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  ...(basePath ? { basePath, assetPrefix: basePath } : {}),
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
