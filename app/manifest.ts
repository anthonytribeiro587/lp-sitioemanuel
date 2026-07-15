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
        src: "/icon.svg?v=4",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
