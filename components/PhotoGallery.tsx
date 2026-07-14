"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

const ASSET_BASE =
  "https://raw.githubusercontent.com/anthonytribeiro587/sistema-agendamento/main/public";

const PHOTOS = [
  { src: `${ASSET_BASE}/fotos/1.jpeg`, alt: "Piscinas e área de lazer do Sítio Emanuel" },
  { src: `${ASSET_BASE}/fotos/2.jpeg`, alt: "Vista aérea do Sítio Emanuel" },
  { src: `${ASSET_BASE}/fotos/3.jpeg`, alt: "Área de convivência do Sítio Emanuel" },
  { src: `${ASSET_BASE}/fotos/4.jpeg`, alt: "Dormitórios do Sítio Emanuel" },
  { src: `${ASSET_BASE}/fotos/5.jpeg`, alt: "Estrutura principal do Sítio Emanuel" },
  { src: `${ASSET_BASE}/fotos/6.jpeg`, alt: "Área externa do Sítio Emanuel" },
] as const;

function CameraIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-4 w-4">
      <path d="M5 7h2.2l1.2-2h7.2l1.2 2H19a2 2 0 0 1 2 2v8.5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
      <circle cx="12" cy="13" r="3.2" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  );
}

export default function PhotoGallery() {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const closeGallery = useCallback(() => setOpen(false), []);
  const previousPhoto = useCallback(() => {
    setCurrentIndex((index) => (index - 1 + PHOTOS.length) % PHOTOS.length);
  }, []);
  const nextPhoto = useCallback(() => {
    setCurrentIndex((index) => (index + 1) % PHOTOS.length);
  }, []);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") closeGallery();
      if (event.key === "ArrowLeft") previousPhoto();
      if (event.key === "ArrowRight") nextPhoto();
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [closeGallery, nextPhoto, open, previousPhoto]);

  const currentPhoto = PHOTOS[currentIndex];

  return (
    <>
      <button
        type="button"
        onClick={() => {
          setCurrentIndex(0);
          setOpen(true);
        }}
        className="inline-flex min-h-10 items-center gap-2 rounded-lg border border-white/10 bg-white/[0.035] px-4 text-[12px] font-medium text-white/72 transition hover:bg-white/[0.07] hover:text-white"
      >
        Ver mais fotos
        <CameraIcon />
      </button>

      {open ? (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/92 p-3 backdrop-blur-md sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label="Galeria de fotos do Sítio Emanuel"
          onMouseDown={(event) => {
            if (event.currentTarget === event.target) closeGallery();
          }}
        >
          <div className="relative flex h-full max-h-[920px] w-full max-w-6xl flex-col overflow-hidden rounded-2xl border border-white/12 bg-[#07100a] shadow-2xl sm:rounded-3xl">
            <div className="flex items-center justify-between border-b border-white/8 px-4 py-3 sm:px-5">
              <div>
                <p className="text-sm font-semibold text-white">Galeria do Sítio Emanuel</p>
                <p className="mt-0.5 text-xs text-white/45">
                  Foto {currentIndex + 1} de {PHOTOS.length}
                </p>
              </div>
              <button
                type="button"
                onClick={closeGallery}
                autoFocus
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-xl text-white/75 transition hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4ade80]"
                aria-label="Fechar galeria"
              >
                ×
              </button>
            </div>

            <div className="relative min-h-0 flex-1 bg-black">
              <Image
                key={currentPhoto.src}
                src={currentPhoto.src}
                alt={currentPhoto.alt}
                fill
                sizes="(max-width: 768px) 100vw, 1152px"
                className="object-contain"
                priority
              />

              <button
                type="button"
                onClick={previousPhoto}
                className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/55 text-2xl text-white backdrop-blur transition hover:bg-black/75 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4ade80] sm:left-5 sm:h-12 sm:w-12"
                aria-label="Foto anterior"
              >
                ‹
              </button>
              <button
                type="button"
                onClick={nextPhoto}
                className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/55 text-2xl text-white backdrop-blur transition hover:bg-black/75 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4ade80] sm:right-5 sm:h-12 sm:w-12"
                aria-label="Próxima foto"
              >
                ›
              </button>
            </div>

            <div className="border-t border-white/8 bg-[#07100a] p-3 sm:p-4">
              <div className="flex gap-2 overflow-x-auto pb-1">
                {PHOTOS.map((photo, index) => (
                  <button
                    key={photo.src}
                    type="button"
                    onClick={() => setCurrentIndex(index)}
                    className={`relative h-16 w-24 shrink-0 overflow-hidden rounded-lg border transition sm:h-20 sm:w-28 ${
                      index === currentIndex
                        ? "border-[#4ade80] ring-1 ring-[#4ade80]"
                        : "border-white/10 opacity-55 hover:opacity-100"
                    }`}
                    aria-label={`Abrir foto ${index + 1}`}
                    aria-current={index === currentIndex ? "true" : undefined}
                  >
                    <Image
                      src={photo.src}
                      alt=""
                      fill
                      sizes="112px"
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
