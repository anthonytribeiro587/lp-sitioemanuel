import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import WhatsAppButton from "@/components/WhatsAppButton";
import "./globals.css";

const SITE_URL = "https://lp-sitioemanuel.vercel.app";
const PHONE_NUMBER = "+55 51 98612-9832";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Sítio Emanuel — Retiros e Encontros em Gravataí",
    template: "%s | Sítio Emanuel",
  },
  description:
    "Espaço em Gravataí/RS para retiros, encontros de igrejas e eventos em grupo, com natureza, dormitórios, salões e área de lazer.",
  applicationName: "Sítio Emanuel",
  category: "Espaço para retiros e encontros",
  keywords: [
    "Sítio Emanuel",
    "retiro",
    "retiro de igreja",
    "Gravataí",
    "espaço para eventos",
    "sítio para retiro",
    "local para retiro em Gravataí",
    "retiro cristão no Rio Grande do Sul",
  ],
  alternates: {
    canonical: "/",
  },
  manifest: "/manifest.webmanifest",
  openGraph: {
    type: "website",
    url: "/",
    locale: "pt_BR",
    title: "Sítio Emanuel — Retiros e Encontros",
    description:
      "Estrutura, natureza e tranquilidade para retiros e encontros em Gravataí/RS.",
    siteName: "Sítio Emanuel",
    images: [
      {
        url: "/fotos/2.jpeg",
        width: 1200,
        height: 630,
        alt: "Vista aérea do Sítio Emanuel",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sítio Emanuel — Retiros e Encontros",
    description:
      "Estrutura, natureza e tranquilidade para retiros e encontros em Gravataí/RS.",
    images: ["/fotos/2.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION || undefined,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#080d0a",
  colorScheme: "dark",
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "EventVenue"],
  name: "Sítio Emanuel",
  description:
    "Espaço em Gravataí para retiros, encontros de igrejas e eventos em grupo.",
  url: SITE_URL,
  telephone: PHONE_NUMBER,
  image: [
    `${SITE_URL}/fotos/2.jpeg`,
    `${SITE_URL}/fotos/5.jpeg`,
    `${SITE_URL}/fotos/1.jpeg`,
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Gravataí",
    addressRegion: "RS",
    addressCountry: "BR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -29.86813357501282,
    longitude: -50.96700012378962,
  },
  sameAs: ["https://share.google/1Tw9zT7p248iLoEYO"],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body className="min-h-screen bg-[#080d0a] text-white antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <Navbar />
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
