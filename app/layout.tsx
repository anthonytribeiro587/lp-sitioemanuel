import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import WhatsAppButton from "@/components/WhatsAppButton";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const ogImage =
  "https://raw.githubusercontent.com/anthonytribeiro587/sistema-agendamento/main/public/fotos/2.jpeg";

export const metadata: Metadata = {
  title: "Sítio Emanuel — Retiros e Encontros em Gravataí",
  description:
    "Espaço em Gravataí/RS para retiros, encontros de igrejas e eventos em grupo, com natureza, dormitórios, salões e área de lazer.",
  applicationName: "Sítio Emanuel",
  keywords: [
    "Sítio Emanuel",
    "retiro",
    "retiro de igreja",
    "Gravataí",
    "espaço para eventos",
    "sítio para retiro",
  ],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    title: "Sítio Emanuel — Retiros e Encontros",
    description:
      "Estrutura, natureza e tranquilidade para retiros e encontros em Gravataí/RS.",
    siteName: "Sítio Emanuel",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Vista do Sítio Emanuel",
      },
    ],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#080d0a",
  colorScheme: "dark",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body className="min-h-screen bg-[#080d0a] text-white antialiased">
        <Navbar />
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
