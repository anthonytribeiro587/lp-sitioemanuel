"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { href: "/#inicio", label: "Início" },
  { href: "/#estrutura", label: "Estrutura" },
  { href: "/#como-funciona", label: "Como funciona" },
  { href: "/#localizacao", label: "Localização" },
  { href: "/#avaliacoes", label: "Avaliações" },
  { href: "/#contato", label: "Contato" },
];

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 32 32" fill="currentColor" aria-hidden="true" className="h-4 w-4">
      <path d="M16 .396C7.164.396 0 7.56 0 16.396c0 2.896.756 5.726 2.194 8.215L0 32l7.604-2.168a15.944 15.944 0 008.396 2.354c8.836 0 16-7.164 16-16S24.836.396 16 .396zm0 29.25a13.1 13.1 0 01-6.676-1.832l-.478-.284-4.512 1.288 1.208-4.404-.312-.454A13.07 13.07 0 012.75 16.396C2.75 9.12 8.724 3.146 16 3.146s13.25 5.974 13.25 13.25S23.276 29.646 16 29.646zm7.396-9.812c-.404-.202-2.394-1.18-2.766-1.314-.372-.134-.642-.202-.912.202-.27.404-1.046 1.314-1.284 1.584-.238.27-.476.304-.88.102-.404-.202-1.704-.628-3.248-2.002-1.202-1.07-2.014-2.392-2.252-2.796-.238-.404-.026-.622.176-.824.182-.182.404-.476.606-.714.202-.238.27-.404.404-.674.134-.27.067-.506-.034-.708-.102-.202-.912-2.202-1.248-3.014-.328-.788-.66-.68-.912-.694-.238-.012-.506-.014-.774-.014-.27 0-.708.102-1.078.506-.372.404-1.414 1.382-1.414 3.366 0 1.984 1.446 3.9 1.648 4.17.202.27 2.85 4.354 6.908 6.104.966.416 1.72.664 2.306.85.968.308 1.85.264 2.546.16.776-.116 2.394-.978 2.732-1.924.338-.946.338-1.756.236-1.924-.102-.168-.372-.27-.776-.472z" />
    </svg>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const phone = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "5551986129832";
  const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(
    "Olá! Gostaria de informações sobre o Sítio Emanuel."
  )}`;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "border-b border-white/10 bg-[#07130d]/94 shadow-[0_12px_35px_rgba(0,0,0,.18)] backdrop-blur-xl"
          : "bg-gradient-to-b from-black/45 to-transparent"
      }`}
    >
      <div className="mx-auto flex h-[78px] max-w-[1180px] items-center justify-between px-5 sm:px-8 lg:px-10">
        <Link href="/#inicio" onClick={() => setOpen(false)} className="relative h-14 w-28 shrink-0" aria-label="Página inicial do Sítio Emanuel">
          <Image src="/logo-sitio-emanuel.png" alt="Sítio Emanuel" fill className="object-contain object-left" sizes="112px" priority />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Navegação principal">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="rounded-full px-3 py-2 text-[12px] font-semibold text-white/80 transition hover:bg-white/10 hover:text-white">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a href={whatsappUrl} target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center gap-2 rounded-full bg-[#58b947] px-5 text-[12px] font-bold text-white shadow-[0_10px_30px_rgba(46,142,54,.25)] transition hover:-translate-y-0.5 hover:bg-[#67c756]">
            <WhatsAppIcon /> Fale no WhatsApp
          </a>
        </div>

        <button type="button" onClick={() => setOpen((value) => !value)} className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/20 text-white backdrop-blur lg:hidden" aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? "Fechar menu" : "Abrir menu"}>
          <span className="relative block h-4 w-5">
            <span className={`absolute left-0 top-0 h-px w-5 bg-current transition ${open ? "translate-y-[7px] rotate-45" : ""}`} />
            <span className={`absolute left-0 top-[7px] h-px w-5 bg-current transition ${open ? "opacity-0" : ""}`} />
            <span className={`absolute left-0 top-[14px] h-px w-5 bg-current transition ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
          </span>
        </button>
      </div>

      <div id="mobile-navigation" className={`overflow-hidden border-t border-white/10 bg-[#07130d] px-5 transition-all duration-300 lg:hidden ${open ? "max-h-[620px] py-5 opacity-100" : "max-h-0 py-0 opacity-0"}`}>
        <nav className="mx-auto grid max-w-[1180px] gap-1" aria-label="Navegação mobile">
          {links.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setOpen(false)} className="rounded-xl px-3 py-3 text-sm font-semibold text-white/75 transition hover:bg-white/7 hover:text-white">
              {link.label}
            </Link>
          ))}
          <a href={whatsappUrl} target="_blank" rel="noreferrer" onClick={() => setOpen(false)} className="mt-3 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#58b947] px-5 text-sm font-bold text-white">
            <WhatsAppIcon /> Fale no WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
}
