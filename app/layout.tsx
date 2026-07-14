import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import WhatsAppButton from "@/components/WhatsAppButton";
import "./globals.css";

const SITE_URL = "https://lp-sitioemanuel.vercel.app";
const PHONE_NUMBER = "+55 51 98612-9832";
const GOOGLE_SITE_VERIFICATION =
  "Pb1nYCgtN3jv6QmXq3HG2g_OMsYze0cKRO9jksMTF6A";

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
    "Espaço em Gravataí/RS para retiros, encontros de igrejas e eventos em grupo, com natureza, dormitórios, salões, piscinas e área de lazer.",
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
  alternates: { canonical: "/" },
  manifest: "/manifest.webmanifest",
  openGraph: {
    type: "website",
    url: "/",
    locale: "pt_BR",
    title: "Sítio Emanuel — Retiros e Encontros",
    description:
      "Natureza, conforto e estrutura completa para retiros e encontros em Gravataí/RS.",
    siteName: "Sítio Emanuel",
    images: [
      {
        url: "/fotos/1.jpeg",
        width: 1200,
        height: 630,
        alt: "Área de lazer do Sítio Emanuel",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sítio Emanuel — Retiros e Encontros",
    description:
      "Natureza, conforto e estrutura completa para retiros e encontros em Gravataí/RS.",
    images: ["/fotos/1.jpeg"],
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
  verification: { google: GOOGLE_SITE_VERIFICATION },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#07130d",
  colorScheme: "light",
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
    `${SITE_URL}/fotos/1.jpeg`,
    `${SITE_URL}/fotos/2.jpeg`,
    `${SITE_URL}/fotos/5.jpeg`,
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
      <body className="min-h-screen bg-white text-[#172019] antialiased">
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
