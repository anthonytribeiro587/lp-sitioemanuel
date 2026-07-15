"use client";

import { useEffect } from "react";

const REVEAL_SELECTOR =
  "main section:not(#inicio) > div, main section:not(#inicio) article, main section:not(#inicio) aside";

export default function SiteMotion() {
  useEffect(() => {
    const root = document.documentElement;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion) return;

    root.classList.add("motion-ready");

    const elements = Array.from(
      document.querySelectorAll<HTMLElement>(REVEAL_SELECTOR)
    );

    elements.forEach((element, index) => {
      element.classList.add("scroll-reveal");
      element.style.setProperty(
        "--reveal-delay",
        `${Math.min(index % 4, 3) * 45}ms`
      );
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          (entry.target as HTMLElement).classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -3% 0px",
      }
    );

    elements.forEach((element) => observer.observe(element));

    const supportsPointerAura = window.matchMedia(
      "(hover: hover) and (pointer: fine)"
    ).matches;

    let pointerFrame = 0;
    let scrollFrame = 0;

    const updatePointer = (event: PointerEvent) => {
      if (!supportsPointerAura || pointerFrame) return;

      pointerFrame = window.requestAnimationFrame(() => {
        root.style.setProperty("--pointer-x", `${event.clientX}px`);
        root.style.setProperty("--pointer-y", `${event.clientY}px`);
        pointerFrame = 0;
      });
    };

    const updateScroll = () => {
      if (scrollFrame) return;

      scrollFrame = window.requestAnimationFrame(() => {
        const shift = Math.min(window.scrollY * 0.045, 32);
        root.style.setProperty("--hero-shift", `${shift}px`);
        scrollFrame = 0;
      });
    };

    if (supportsPointerAura) {
      window.addEventListener("pointermove", updatePointer, { passive: true });
    }

    window.addEventListener("scroll", updateScroll, { passive: true });
    updateScroll();

    return () => {
      observer.disconnect();
      window.removeEventListener("pointermove", updatePointer);
      window.removeEventListener("scroll", updateScroll);

      if (pointerFrame) window.cancelAnimationFrame(pointerFrame);
      if (scrollFrame) window.cancelAnimationFrame(scrollFrame);

      root.classList.remove("motion-ready");
    };
  }, []);

  return (
    <>
      <div className="cursor-aura" aria-hidden="true" />
      <div className="site-wind" aria-hidden="true">
        <span />
        <span />
      </div>
    </>
  );
}
