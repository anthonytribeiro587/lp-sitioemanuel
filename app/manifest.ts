import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Sítio Emanuel — Retiros e Encontros",
    short_name: "Sítio Emanuel",
    description:
      "Espaço em Gravataí/RS para retiros, encontros de igrejas e eventos em grupo.",
    start_url: "/",
    display: "standalone",
    background_color: "#080d0a",
    theme_color: "#080d0a",
    lang: "pt-BR",
    icons: [
      {
        src: "/icon-192.png?v=10",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png?v=10",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/apple-icon.png?v=10",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
